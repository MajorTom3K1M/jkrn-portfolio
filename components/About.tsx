'use client';
import ProfileImg from '@/components/ProfileImg';
import TimelineItem from '@/components/TimelineItem';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import {
    User2,
    MailIcon,
    HomeIcon,
    PhoneCall,
    GraduationCap,
    Calendar,
    Briefcase,
} from 'lucide-react';

import { Locale } from '@/i18n';
import { useState } from 'react';
import { useTranslation } from './providers/TranslationProvider';

interface Item {
    title: string;
    text?: string;
    data?: Array<{
        university?: string;
        qualification?: string;
        years?: string;
        company?: string;
        role?: string;
        name?: string;
        imgPath?: string;
        details?: Array<string>;
        description?: string;
        detailedDate: {
            start: string;
            end: string;
            duration: string;
        },
        tags: Array<string>;
    }>;
};

type Props = {
    locale: Locale;
};

const skillData = [
    {
        title: 'skills',
        data: [
            {
                name: 'HTML, CSS',
            },
            {
                name: 'Front-end Development',
            },
            {
                name: 'Javascript, PHP',
            },
            {
                name: 'Back-end Development',
            },
        ],
    },
    {
        title: 'tools',
        data: [
            {
                imgPath: '/about/vscode.svg',
            },
            {
                imgPath: '/about/figma.svg',
            },
            {
                imgPath: '/about/notion.svg',
            },
            {
                imgPath: '/about/wordpress.svg',
            },
        ],
    },
];


const About = ({ locale }: Props) => {
    const { translation } = useTranslation();

    const getData = (arr: Item[], title: string): Item | undefined => {
        return arr.find((item) => item.title === title);
    };

    const qualificationData = [
        {
            title: translation("about.education"),
            data: [
                {
                    university: "King Mongkut's Institute Technology of Ladkrabang",
                    qualification: 'Bachelor of Science',
                    years: '2016 - 2020',
                    description: `Studied fundamental and advanced computer science concepts. Completed projects in software development and system design. Participated in programming competitions and tech events. Coursework included Data Structures, Algorithms, Database Systems, Computer Networks, and Software Engineering. Completed a capstone project developing a machine learning-based recommendation system for local businesses. Participated in a study abroad program at the University of California, Berkeley for one semester, focusing on Artificial Intelligence and Big Data Analytics. Achieved Dean's List recognition for academic excellence in 6 out of 8 semesters.`,
                    detailedDate: {
                        start: translation("about.ibm.start"),
                        end: translation("about.ibm.end"),
                        duration: translation("about.ibm.duration")
                    },
                    tags: []
                }
            ],
        },
        {
            title: translation("about.experience"),
            data: [
                {
                    company: 'Internship at IBM Thailand',
                    role: 'Fullstack Engineer',
                    years: '2019 - 2019',
                    details: [
                        translation("about.ibm.details.0"),
                        translation("about.ibm.details.1"),
                        translation("about.ibm.details.2"),
                    ],
                    detailedDate: {
                        start: translation("about.ibm.start"),
                        end: translation("about.ibm.end"),
                        duration: translation("about.ibm.duration")
                    },
                    tags: ['HTML', 'IBM Watson Assistant', 'CSS', 'React.js', 'Node.js', 'MongoDB', 'Arduino', 'C', 'React Native', 'IBM Watson IoT']
                },
                {
                    company: 'Vonder (Thailand) Company Limited',
                    role: 'Backend Engineer',
                    years: '2020 - Present',
                    details: [
                        translation("about.vonder.details.0"),
                        translation("about.vonder.details.1"),
                        translation("about.vonder.details.2"),
                        translation("about.vonder.details.3"),
                        translation("about.vonder.details.4"),
                        translation("about.vonder.details.5"),
                        translation("about.vonder.details.6"),
                    ],
                    detailedDate: {
                        start: translation("about.vonder.start"),
                        end: translation("about.vonder.end"),
                        duration: translation("about.vonder.duration")
                    },
                    tags: ['Node.js', 'MongoDB', 'PostgreSQL', 'AWS Lambda', 'Python', 'AWS S3', 'Amazon Redshift', 'Apache Airflow', 'Unity', 'C#', 'SQL Injection', 'Prepared Statements', 'Helmet', 'Load Testing', 'Performance Optimization']
                }
            ],
        },
    ];

    const infoData = [
        {
            icon: <User2 size={20} />,
            text: translation("about.name"),
        },
        {
            icon: <PhoneCall size={20} />,
            text: '092 538 3629',
        },
        {
            icon: <MailIcon size={20} />,
            text: 'jakkarin.mike@gmail.com',
        },
        {
            icon: <Calendar size={20} />,
            text: translation("about.birthday"),
        },
        {
            icon: <GraduationCap size={20} />,
            text: translation("about.degree"),
        },
        {
            icon: <HomeIcon size={20} />,
            text: translation("about.location"),
        },
    ];

    return (
        <div className='xl:h-[860px] pb-12 xl:py-24'>
            <div className="container mx-auto">
                <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>
                    {translation("about.title")}
                </h2>
                <div className='flex flex-col xl:flex-row'>
                    {/* image */}
                    <div className='hidden xl:flex flex-1 relative'>
                        <ProfileImg
                            // containerStyles='bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[443px] bg-no-repeat justify-self-center self-center relative'
                            containerStyles='rounded-shape_light bg-[#FFEDDF] bg-no-repeat w-[505px] h-[443px] justify-self-center self-center relative'
                            imageStyles='rounded-shape w-[505px] max-h-[443px] object-cover justify-self-center self-center'
                            imgSrc='/about/profile.png'
                        />
                    </div>
                    {/* tabs */}
                    <div className='flex-1'>
                        <Tabs defaultValue='personal'>
                            <TabsList className='w-full grid xl:grid-cols-2 xl:max-w-[520px] xl:border dark:border-none'>
                                <TabsTrigger value='personal'>
                                    {translation("about.personalInfo")}
                                </TabsTrigger>
                                <TabsTrigger value='qualifications'>
                                    {translation("about.qualifications")}
                                </TabsTrigger>
                            </TabsList>
                            {/* tabs content */}
                            <div className='text-lg mt-12 xl:mt-8'>
                                {/* personal */}
                                <TabsContent value='personal'>
                                    <div className='text-center xl:text-left'>
                                        <h3 className='h3 mb-4'>
                                            {translation("about.personalInfoQuote")}
                                        </h3>
                                        <p className='subtitle max-w-xl mx-auto xl:mx-0'>
                                            {translation("about.personalInfoDescription")}
                                        </p>
                                        {/* icons */}
                                        <div className='grid xl:grid-cols-2 gap-4 mb-12'>
                                            {infoData.map((item, index) => {
                                                return (
                                                    <div
                                                        className='flex items-center gap-x-4 mx-auto xl:mx-0'
                                                        key={index}
                                                    >
                                                        <div className='text-primary'>{item.icon}</div>
                                                        <div>{item.text}</div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                        {/* languages */}
                                        <div className='flex flex-col gap-y-2'>
                                            <div className='text-primary'>{translation("about.languageSkill")}</div>
                                            <div className='border-b border-border'></div>
                                            <div>{translation("about.Languages")}</div>
                                        </div>
                                    </div>
                                </TabsContent>
                                {/* qualifications */}
                                <TabsContent value='qualifications'>
                                    <div>
                                        <h3 className='h3 mb-8 text-center xl:text-left'>
                                            {translation("about.journeyTitle")}
                                        </h3>
                                        {/* experience & education wrapper */}
                                        <div className='grid md:grid-cols-2 gap-y-8'>
                                            {/* experience */}
                                            <div className='flex flex-col gap-y-2'>
                                                <div className='flex gap-x-4 items-center text-[22px] text-primary'>
                                                    <Briefcase />
                                                    <h4 className='capitalize font-medium'>
                                                        {getData(qualificationData, translation("about.experience"))?.title}
                                                    </h4>
                                                </div>
                                                {/* experience list */}
                                                <div className='flex flex-col'>
                                                    {getData(qualificationData, translation("about.experience"))?.data?.map(
                                                        (item, index) => {
                                                            const { company, role, years, details, detailedDate, tags } = item;
                                                            return (
                                                                <article
                                                                    className='relative flex gap-x-8 group hover:cursor-default'
                                                                    key={index}
                                                                >
                                                                    <TimelineItem
                                                                        title={company}
                                                                        subtitle={role}
                                                                        date={years}
                                                                        detailedDate={{
                                                                            start: detailedDate?.start,
                                                                            end: detailedDate?.end,
                                                                            duration: detailedDate?.duration
                                                                        }}
                                                                        description=''
                                                                        details={details}
                                                                        tags={tags}
                                                                    />
                                                                    {/* <div>
                                                                        <div className='font-semibold text-xl leading-none mb-2'>
                                                                            {company}
                                                                        </div>
                                                                        <div className='text-lg leading-none text-muted-foreground mb-4'>
                                                                            {role}
                                                                        </div>
                                                                        <div className='text-base font-medium'>
                                                                            {years}
                                                                        </div>
                                                                    </div> */}
                                                                </article>
                                                            );
                                                        }
                                                    )}
                                                </div>
                                            </div>
                                            {/* education */}
                                            <div className='flex flex-col gap-y-2'>
                                                <div className='flex gap-x-4 items-center text-[22px] text-primary'>
                                                    <GraduationCap size={28} />
                                                    <h4 className='capitalize font-medium'>
                                                        {getData(qualificationData, translation("about.education"))?.title}
                                                    </h4>
                                                </div>
                                                {/* list */}
                                                <div className='flex flex-col gap-y-8'>
                                                    {getData(qualificationData, translation("about.education"))?.data?.map(
                                                        (item, index) => {
                                                            const { university, qualification, years, detailedDate, description } = item;
                                                            return (
                                                                <div className='flex gap-x-8 group' key={index}>
                                                                    <TimelineItem
                                                                        title={university}
                                                                        subtitle={qualification}
                                                                        date={years}
                                                                        detailedDate={{
                                                                            start: detailedDate?.start,
                                                                            end: detailedDate?.end,
                                                                            duration: detailedDate?.duration
                                                                        }}
                                                                        description={description ?? ''}
                                                                        details={[]}
                                                                        tags={[]}
                                                                    />
                                                                    {/* <div className='h-[84px] w-[1px] bg-border relative ml-2'>
                                                                        <div className='w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500'></div>
                                                                    </div>
                                                                    <div>
                                                                        <div className='font-semibold text-xl leading-none mb-2'>
                                                                            {university}
                                                                        </div>
                                                                        <div className='text-lg leading-none text-muted-foreground mb-4'>
                                                                            {qualification}
                                                                        </div>
                                                                        <div className='text-base font-medium'>
                                                                            {years}
                                                                        </div>
                                                                    </div> */}
                                                                </div>
                                                            );
                                                        }
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabsContent>
                            </div>
                        </Tabs>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;