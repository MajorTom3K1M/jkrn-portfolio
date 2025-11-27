import { Locale } from '@/i18n';
import { getTranslation } from '@/lib/i18n/getTranslation';
import { fetchGitHubStats } from '@/lib/github/fetchGitHubStats';
import { TrendingUp } from 'lucide-react';

type Props = {
    locale: Locale;
};

const GitHubStats = async ({ locale }: Props) => {
    const translation = await getTranslation(locale);
    const githubUsername = process.env.NEXT_PUBLIC_GITHUB_USERNAME || 'your-username';

    const stats = await fetchGitHubStats(githubUsername);

    if (!stats) {
        return null;
    }

    const { totalRepos, totalFollowers, languages, contributionYears, bestYear, thisYear } = stats;

    const maxContributions = Math.max(...contributionYears.map(y => y.total));

    const totalContributions = contributionYears.reduce((sum, year) => sum + year.total, 0);

    return (
        <section className='mb-12 xl:mb-36'>
            <div className='container mx-auto px-4'>
                <h2 className='section-title mb-12 xl:mb-24 text-center mx-auto'>
                    {translation('github.title')}
                </h2>

                <div className='max-w-5xl mx-auto space-y-12'>
                    <div className='flex justify-center gap-6'>
                        <div className='relative bg-gradient-to-br from-primary/10 via-primary/5 to-transparent dark:from-primary/20 dark:via-primary/10 backdrop-blur-sm rounded-xl p-8 flex-1 max-w-xs text-center transition-all duration-300 border border-primary/20'>
                            <p className='text-5xl font-bold text-primary mb-3 relative z-10'>{totalRepos}</p>
                            <p className='text-sm text-muted-foreground uppercase tracking-wider relative z-10'>
                                {translation('github.publicRepos')}
                            </p>
                        </div>

                        <div className='relative bg-gradient-to-br from-emerald-500/10 via-emerald-500/5 to-transparent dark:from-emerald-500/20 dark:via-emerald-500/10 backdrop-blur-sm rounded-xl p-8 flex-1 max-w-xs text-center transition-all duration-300 border border-emerald-500/20'>
                            <p className='text-5xl font-bold text-emerald-500 mb-3 relative z-10'>{totalFollowers}</p>
                            <p className='text-sm text-muted-foreground uppercase tracking-wider relative z-10'>
                                {translation('github.followers')}
                            </p>
                        </div>
                    </div>

                    <div className='space-y-6'>
                        <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
                            <div>
                                <h3 className='text-xl md:text-2xl font-bold flex items-center gap-2 md:gap-3'>
                                    <TrendingUp className='text-primary' size={24} />
                                    <span className='md:inline'>{translation('github.contributionTrends')}</span>
                                </h3>
                                <p className='text-xs md:text-sm text-muted-foreground mt-2'>
                                    {totalContributions.toLocaleString()} {translation('github.contributions')} • {contributionYears.length} {translation('github.totalYears')}
                                </p>
                            </div>
                            <div className='hidden md:flex items-center gap-6 text-sm'>
                                <div className='flex items-center gap-2'>
                                    <div className='w-4 h-4 rounded bg-primary'></div>
                                    <span className='text-muted-foreground'>{translation('github.bestYear')}</span>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <div className='w-4 h-4 rounded bg-emerald-500'></div>
                                    <span className='text-muted-foreground'>{translation('github.thisYear')}</span>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <div className='w-4 h-4 rounded bg-slate-400'></div>
                                    <span className='text-muted-foreground'>{translation('github.otherYears')}</span>
                                </div>
                            </div>
                        </div>

                        <div className='hidden md:block bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-xl p-8'>
                            <div className='flex items-end justify-center gap-8 h-80'>
                                {contributionYears.map((yearData, index) => {
                                    const barHeight = (yearData.total / maxContributions) * 100;
                                    const isThisYear = yearData.year === thisYear.year;
                                    const isBestYear = yearData.year === bestYear.year;

                                    return (
                                        <div key={index} className='flex flex-col items-center flex-1 max-w-[120px] group'>
                                            <div className='w-full h-72 flex flex-col justify-end relative'>
                                                <div className='text-center mb-2'>
                                                    <p className='text-sm font-bold mb-0.5'>
                                                        {yearData.total.toLocaleString()}
                                                    </p>
                                                    <p className='text-xs text-muted-foreground'>
                                                        {translation('github.contributions')}
                                                    </p>
                                                </div>

                                                <div
                                                    className={`w-full rounded-t-xl transition-all duration-700 ease-out group-hover:scale-y-105 origin-bottom shadow-lg ${isBestYear
                                                        ? 'bg-gradient-to-t from-primary via-primary/90 to-primary/80'
                                                        : isThisYear
                                                            ? 'bg-gradient-to-t from-emerald-500 via-emerald-400 to-emerald-400'
                                                            : 'bg-gradient-to-t from-slate-400 via-slate-300 to-slate-300'
                                                        }`}
                                                    style={{ height: `${barHeight}%` }}
                                                />

                                                <div className='absolute bottom-0 left-0 right-0 h-[2px] bg-gray-300 dark:bg-gray-700'></div>
                                            </div>

                                            <div className='flex mt-3 text-center'>
                                                <div className='flex flex-col items-center gap-1'>
                                                    <span className='text-lg font-bold'>{yearData.year}</span>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        <div className='md:hidden bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-xl p-6'>
                            <div className='space-y-6'>
                                {contributionYears.map((yearData, index) => {
                                    const barWidth = (yearData.total / maxContributions) * 100;
                                    const isThisYear = yearData.year === thisYear.year;
                                    const isBestYear = yearData.year === bestYear.year;

                                    return (
                                        <div key={index} className='space-y-2'>
                                            <div className='flex items-center justify-between'>
                                                <div className='flex items-center gap-2'>
                                                    <span className='text-lg font-bold'>{yearData.year}</span>
                                                    {isBestYear && (
                                                        <span className='inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20'>
                                                            {translation('github.best')}
                                                        </span>
                                                    )}
                                                    {isThisYear && !isBestYear && (
                                                        <span className='inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20'>
                                                            {translation('github.current')}
                                                        </span>
                                                    )}
                                                </div>
                                                <div className='text-right'>
                                                    <p className='text-sm font-bold'>
                                                        {yearData.total.toLocaleString()}
                                                    </p>
                                                    <p className='text-xs text-muted-foreground'>
                                                        {translation('github.contributions')}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className='w-full h-8 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden'>
                                                <div
                                                    className={`h-full rounded-full transition-all duration-700 ${isBestYear
                                                        ? 'bg-gradient-to-r from-primary via-primary/90 to-primary/80'
                                                        : isThisYear
                                                            ? 'bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-400'
                                                            : 'bg-gradient-to-r from-slate-400 via-slate-300 to-slate-300'
                                                        }`}
                                                    style={{ width: `${barWidth}%` }}
                                                />
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    <div className='space-y-6'>
                        <h3 className='text-xl md:text-2xl font-bold'>{translation('github.topLanguages')}</h3>
                        <div className='bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8'>
                            <div className='grid md:grid-cols-2 gap-x-8 gap-y-4'>
                                {languages.map((lang, index) => (
                                    <div key={index} className='space-y-2'>
                                        <div className='flex items-center justify-between'>
                                            <div className='flex items-center gap-2'>
                                                <div
                                                    className='w-3 h-3 rounded-full'
                                                    style={{ backgroundColor: lang.color }}
                                                />
                                                <span className='font-semibold text-sm md:text-base'>{lang.name}</span>
                                            </div>
                                            <span className='text-sm md:text-base font-bold text-primary'>
                                                {lang.percentage.toFixed(1)}%
                                            </span>
                                        </div>
                                        <div className='w-full h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden'>
                                            <div
                                                className='h-full rounded-full transition-all duration-700'
                                                style={{
                                                    width: `${lang.percentage}%`,
                                                    backgroundColor: lang.color,
                                                }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GitHubStats;
