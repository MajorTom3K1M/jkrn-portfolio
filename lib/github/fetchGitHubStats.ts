export interface GitHubStats {
    totalRepos: number;
    totalFollowers: number;
    languages: { name: string; percentage: number; color: string }[];
    contributionYears: {
        year: number;
        total: number;
    }[];
    bestYear: {
        year: number;
        total: number;
    };
    thisYear: {
        year: number;
        total: number;
    };
}

const GITHUB_COLORS: { [key: string]: string } = {
    JavaScript: '#f1e05a',
    TypeScript: '#3178c6',
    Python: '#3572A5',
    Java: '#b07219',
    Go: '#00ADD8',
    Rust: '#dea584',
    Ruby: '#701516',
    PHP: '#4F5D95',
    'C++': '#f34b7d',
    C: '#555555',
    'C#': '#178600',
    HTML: '#e34c26',
    CSS: '#563d7c',
    Shell: '#89e051',
    Dart: '#00B4AB',
    Kotlin: '#A97BFF',
    Swift: '#F05138',
};

export async function fetchGitHubStats(username: string): Promise<GitHubStats | null> {
    const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

    if (!GITHUB_TOKEN) {
        console.warn('GitHub token not found. Using public API with rate limits.');
    }

    const headers: HeadersInit = {
        'Content-Type': 'application/json',
        ...(GITHUB_TOKEN && { Authorization: `Bearer ${GITHUB_TOKEN}` }),
    };

    try {
        // Fetch user info
        const userResponse = await fetch(
            `https://api.github.com/users/${username}`,
            { headers, next: { revalidate: 3600 } }
        );

        if (!userResponse.ok) {
            throw new Error(`GitHub API error: ${userResponse.status}`);
        }

        const user = await userResponse.json();
        const totalRepos = user.public_repos;
        const totalFollowers = user.followers;

        // Fetch user's repositories
        const reposResponse = await fetch(
            `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`,
            { headers, next: { revalidate: 3600 } }
        );

        if (!reposResponse.ok) {
            throw new Error(`GitHub API error: ${reposResponse.status}`);
        }

        const repos = await reposResponse.json();

        // Calculate language statistics
        const languageBytes: { [key: string]: number } = {};

        for (const repo of repos) {
            if (repo.fork) continue;

            try {
                const langResponse = await fetch(
                    `https://api.github.com/repos/${username}/${repo.name}/languages`,
                    { headers, next: { revalidate: 3600 } }
                );

                if (langResponse.ok) {
                    const languages = await langResponse.json();
                    for (const [lang, bytes] of Object.entries(languages)) {
                        languageBytes[lang] = (languageBytes[lang] || 0) + (bytes as number);
                    }
                }
            } catch (error) {
                console.error(`Error fetching languages for ${repo.name}:`, error);
            }
        }

        const totalBytes = Object.values(languageBytes).reduce((a, b) => a + b, 0);
        const languages = Object.entries(languageBytes)
            .map(([name, bytes]) => ({
                name,
                percentage: (bytes / totalBytes) * 100,
                color: GITHUB_COLORS[name] || '#8b8b8b',
            }))
            .sort((a, b) => b.percentage - a.percentage)
            .slice(0, 6);

        // Fetch contribution data for last 5 years using GraphQL
        const currentYear = new Date().getFullYear();
        const years = [currentYear - 4, currentYear - 3, currentYear - 2, currentYear - 1, currentYear];

        const queries = years.map(year => `
            year${year}: contributionsCollection(from: "${year}-01-01T00:00:00Z", to: "${year}-12-31T23:59:59Z") {
                contributionCalendar {
                    totalContributions
                }
            }
        `).join('\n');

        const query = `
            query {
                user(login: "${username}") {
                    ${queries}
                }
            }
        `;

        const contributionYears: { year: number; total: number }[] = [];
        let bestYear = { year: currentYear, total: 0 };
        let thisYear = { year: currentYear, total: 0 };

        try {
            const contributionResponse = await fetch('https://api.github.com/graphql', {
                method: 'POST',
                headers,
                body: JSON.stringify({ query }),
                next: { revalidate: 3600 },
            });

            if (contributionResponse.ok) {
                const contributionData = await contributionResponse.json();
                const userData = contributionData.data?.user;

                if (userData) {
                    for (const year of years) {
                        const yearData = userData[`year${year}`];
                        const total = yearData?.contributionCalendar?.totalContributions || 0;
                        contributionYears.push({ year, total });

                        if (total > bestYear.total) {
                            bestYear = { year, total };
                        }

                        if (year === currentYear) {
                            thisYear = { year, total };
                        }
                    }
                }
            }
        } catch (error) {
            console.error('Error fetching contribution data:', error);
        }

        return {
            totalRepos,
            totalFollowers,
            languages,
            contributionYears,
            bestYear,
            thisYear,
        };
    } catch (error) {
        console.error('Error fetching GitHub stats:', error);
        return null;
    }
}
