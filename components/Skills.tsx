import { Server, PanelsTopLeft, Hammer, BadgeCheck } from 'lucide-react';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle
} from '@/components/ui/card';
import { Locale } from '@/i18n';
import { getTranslation } from '@/lib/i18n/getTranslation';

type Props = {
    locale: Locale;
};

const Skills = async ({ locale }: Props) => {
    const translation = await getTranslation(locale);

    const skillsData = [
        {
            icon: <Server size={72} strokeWidth={0.8} />,
            title: 'Backend Development',
            description: 'I design and develop websites that are visually appealing and easy to use.',
            tools: [
                {
                    name: 'Node.js',
                    level: translation('skills.intermediate')
                },
                {
                    name: 'Go',
                    level: translation('skills.intermediate')
                },
                {
                    name: 'Python',
                    level: translation('skills.basic')
                },
                {
                    name: 'C#',
                    level: translation('skills.basic')
                },
                {
                    name: 'Rust',
                    level: translation('skills.basic')
                },
                {
                    name: 'MongoDB',
                    level: translation('skills.intermediate')
                },
                {
                    name: 'PostgreSQL',
                    level: translation('skills.intermediate')
                },
                {
                    name: 'Redshift',
                    level: translation('skills.intermediate')
                },
                {
                    name: 'Redis',
                    level: translation('skills.intermediate')
                }
            ]
        },
        {
            icon: <PanelsTopLeft size={72} strokeWidth={0.8} />,
            title: 'Frontend Development',
            description: 'I build websites and web applications using modern technologies.',
            tools: [
                {
                    name: 'HTML',
                    level: translation('skills.intermediate')
                },
                {
                    name: 'CSS',
                    level: translation('skills.intermediate')
                },
                {
                    name: 'Tailwind CSS',
                    level: translation('skills.basic')
                },
                {
                    name: 'JavaScript',
                    level: translation('skills.intermediate')
                },
                {
                    name: 'TypeScript',
                    level: translation('skills.intermediate')
                },
                {
                    name: 'React',
                    level: translation('skills.intermediate')
                },
                {
                    name: 'Next.js',
                    level: translation('skills.intermediate')
                }
            ]
        },
        {
            icon: <Hammer size={72} strokeWidth={0.8} />,
            title: 'Tools',
            description: 'I develop mobile applications for iOS and Android devices.',
            tools: [
                {
                    name: 'GitHub',
                    level: translation('skills.intermediate')
                },
                {
                    name: 'VS Code',
                    level: translation('skills.intermediate')
                },
                {
                    name: 'AWS',
                    level: translation('skills.intermediate')
                },
                {
                    name: 'Docker',
                    level: translation('skills.intermediate')
                },
                {
                    name: 'Kubernetes',
                    level: translation('skills.basic')
                },
                {
                    name: 'CircleCI',
                    level: translation('skills.intermediate')
                },
                {
                    name: 'Airflow',
                    level: translation('skills.basic')
                },
            ]
        }
    ];

    return (
        <section className='mb-12 xl:mb-36'>
            <div className='container mx-auto'>
                <h2 className='section-title mb-12 xl:mb-24 text-center mx-auto'>
                    {translation('skills.title')}
                </h2>
                {/* Grid items */}
                <div className='grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8'>
                    {skillsData.map((item, index) => {
                        const { icon, title, tools } = item;
                        return (
                            <Card
                                // className='w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative'
                                className='w-full md:w-[424px] max-w-[424px] h-[415px] flex flex-col items-center relative pt-16 dark:bg-[#121212]'
                                key={index}
                            >
                                <CardHeader className='flex absolute -top-[60px]'>
                                    <div className='text-primary w-[140px] h-[80px] bg-white dark:bg-[#121212] flex justify-center items-center'>
                                        {icon}
                                    </div>
                                </CardHeader>
                                <CardContent className='text-center'>
                                    <CardTitle className='mb-10'>
                                        {title}
                                    </CardTitle>
                                    <div className='grid grid-cols-2 gap-x-8 gap-y-4'>
                                        {tools.map((tool, index) => {
                                            const { name, level } = tool;
                                            return (
                                                <div className='flex gap-x-1' key={index}>
                                                    <BadgeCheck size={16} className='text-muted-foreground' />
                                                    <div className='text-left'>
                                                        <h3 className="leading-none">{name}</h3>
                                                        <span className="text-xs text-muted-foreground">{level}</span>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </CardContent>
                            </Card>
                        );
                    })}
                    {/* <Card
                        className='w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative'
                    >
                        <CardHeader className='text-primary absolute -top-[60px]'>
                            <div className='w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center'>
                            </div>
                        </CardHeader>
                        <CardContent className='text-center'>
                            <CardTitle className='mb-4'>
                            </CardTitle>
                            <CardDescription className='text-lg'>
                            </CardDescription>
                        </CardContent>
                    </Card> */}
                </div>
            </div>
        </section>
    );
};

export default Skills;