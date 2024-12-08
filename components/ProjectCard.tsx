import Link from 'next/link';
import Image from 'next/image';
import { Github, Link2Icon } from 'lucide-react';

import { Card, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from './ui/button';

interface ProjectCardProps {
    project: {
        image: string;
        category: string[];
        name: string;
        description: string;
        link?: string;
        github: string;
    };
    isHoverAction?: boolean;
};

const ProjectCard = ({ project, isHoverAction }: ProjectCardProps) => {
    return (
        <Card className='group overflow-hidden relative dark:bg-[#121212]'>
            <CardHeader className='p-0'>
                {/* image */}
                {/* <div className='relative w-full h-[300px] flex items-center justify-center bg-tertiary dark:bg-secondary/40 xl:bg-work_project_bg_light xl:dark:bg-work_project_bg_dark xl:bg-[110%] xl:bg-no-repeat overflow-hidden'> */}
                <div className='relative w-full h-[300px] flex items-center justify-center bg-tertiary dark:bg-secondary/40 xl:bg-work_project_bg_light xl:dark:bg-work_project_bg_dark xl:bg-[110%] xl:bg-no-repeat overflow-hidden'>
                    {/* <div className="z-10 absolute top-0 left-0 w-full p-7 bg-gradient-to-b from-black/70 to-transparent"> */}
                    <div className="z-10 absolute top-0 left-0 w-full p-6 bg-gradient-to-b from-black/70 to-transparent">
                        <div className="flex flex-wrap gap-2">
                            {project.category.map((category, index) => (
                                <Badge key={index} variant="secondary"  className='uppercase text-sm font-medium border-[#e5e7eb]'>
                                    {category}
                                </Badge>
                            ))}
                            {/* <Badge className='uppercase text-sm font-medium mb-2 absolute top-4 left-5'>
                                {project.category}
                            </Badge> */}
                        </div>
                    </div>
                    {/* <Image
                        className='absolute bottom-0 shadow-2xl rounded-t-lg max-h-[250px] max-w-[247px] h-full object-cover'
                        src={project.image}
                        width={247}
                        height={250}
                        alt=''
                        priority
                    /> */}
                    <Image
                        // className='absolute bottom-0 rounded-t-2xl max-h-[250px] max-w-[300px] h-full object-cover border-4 border-b-0 border-input'
                        className='absolute bottom-0 rounded-t-2xl max-h-[250px] max-w-[300px] h-full object-cover border-b-0 border-solid box-border border-[#e5e7eb] border-[1px]'
                        src={project.image}
                        width={500}
                        height={250}
                        // fill
                        objectFit='cover'
                        alt=''
                        priority
                    />
                    {/* <Image
                        className='object-fit object-center'
                        src={project.image}
                        // width={247}
                        // height={250}
                        fill
                        objectFit='cover'
                        alt=''
                        priority
                    /> */}
                    {/* btn links */}
                    {/* <div className='flex gap-x-4'> */}
                    {isHoverAction && (
                        <div className='absolute flex gap-x-4'>
                            {project?.link && (
                                <Link
                                    href={project?.link}
                                    className='bg-secondary gap-x-1 w-[54px] lg:w-[100px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200'
                                    // className='bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200'
                                >
                                    <Link2Icon className='text-white' />
                                    <div className='text-sm text-white hidden lg:flex'>Demo</div>
                                </Link>
                            )}
                            <Link
                                href={project.github}
                                className='bg-secondary gap-x-1 w-[54px] lg:w-[100px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300'
                                // className='bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300'
                            >

                                <Github className='text-white' />
                                <div className='text-sm text-white hidden lg:flex'>Github</div>
                            </Link>
                        </div>
                    )}
                </div>
            </CardHeader>
            <div className='h-full px-8 py-6'>
                {/* <Badge className='uppercase text-sm font-medium mb-2 absolute top-4 left-5'>
                    {project.category}
                </Badge> */}
                <h4 className='h4 mb-1'>{project.name}</h4>
                <p className='text-muted-foreground text-lg'>{project.description}</p>
            </div>

            {!isHoverAction && (
                <CardFooter className="gap-2">
                    {project.github && (
                        <Button variant="secondary" size="sm" className='rounded-full' asChild>
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                                <Github className="w-4 h-4 mr-2" />
                                View Code
                            </a>
                        </Button>
                    )}
                    {project?.link && (
                        <Button size="sm" className='rounded-full' asChild>
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                <Link2Icon className='text-white' />
                                Live Demo
                            </a>
                        </Button>
                    )}
                </CardFooter>
            )}
        </Card>
    );
}

export default ProjectCard;