import { Server, PanelsTopLeft, Hammer, BadgeCheck } from 'lucide-react';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from '@/components/ui/card';

const skillsData = [
    {
        icon: <Server size={72} strokeWidth={0.8} />,
        title: 'Backend Development',
        description: 'I design and develop websites that are visually appealing and easy to use.',
        tools: [
            {
                name: 'Node.js',
                level: 'Intermediate'
            },
            {
                name: 'Go',
                level: 'Intermediate'
            },
            {
                name: 'Python',
                level: 'Basic'
            },
            {
                name: 'C#',
                level: 'Basic'
            },
            {
                name: 'Rust',
                level: 'Basic'
            },
            {
                name: 'MongoDB',
                level: 'Intermediate'
            },
            {
                name: 'PostgreSQL',
                level: 'Intermediate'
            },
            {
                name: 'Redshift',
                level: 'Intermediate'
            },
            {
                name: 'Redis',
                level: 'Intermediate'
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
                level: 'Intermediate'
            },
            {
                name: 'CSS',
                level: 'Intermediate'
            },
            {
                name: 'Tailwind CSS',
                level: 'Basic'
            },
            {
                name: 'JavaScript',
                level: 'Intermediate'
            },
            {
                name: 'TypeScript',
                level: 'Intermediate'
            },
            {
                name: 'React',
                level: 'Intermediate'
            },
            {
                name: 'Next.js',
                level: 'Intermediate'
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
                level: 'Intermediate'
            },
            {
                name: 'VS Code',
                level: 'Intermediate'
            },
            {
                name: 'AWS',
                level: 'Intermediate'
            },
            {
                name: 'Docker',
                level: 'Intermediate'
            },
            {
                name: 'Kubernetes',
                level: 'Basic'
            },
            {
                name: 'CircleCI',
                level: 'Intermediate'
            },
            {
                name: 'Airflow',
                level: 'Basic'
            },
        ]
    }
]

const Skills = () => {
    return (
        <section className='mb-12 xl:mb-36'>
            <div className='container mx-auto'>
                <h2 className='section-title mb-12 xl:mb-24 text-center mx-auto'>
                    My Skills
                </h2>
                {/* Grid items */}
                <div className='grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8'>
                    {skillsData.map((item, index) => {
                        const { icon, description, title, tools } = item;
                        return (
                            <Card
                                // className='w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative'
                                className='w-full max-w-[424px] h-[415px] flex flex-col items-center relative pt-16'
                                key={index}
                            >
                                <CardHeader className='flex absolute -top-[60px]'>
                                    <div className='text-primary w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center'>
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