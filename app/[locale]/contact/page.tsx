import { Mail, Phone, MapPin, Linkedin, Github, Twitter, X, Facebook } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

export default function ContactPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            {/* <h1 className="text-4xl font-bold mb-8 text-center">Contact Me</h1> */}
            <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>
                Contact Me
            </h2>
            {/* <div className='grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24'> */}
                {/* text */}
                <div className='flex flex-col justify-center'>
                    <div className='flex items-center gap-x-4 text-primary text-lg mb-4'>
                        <span className='w-[30px] h-[2px] bg-primary'></span>
                        Say Hello 👋
                    </div>
                    <h1 className='h1 mb-8'>Let's Work Together.</h1>
                    <p className='subtitle'>
                        I'm always open to new opportunities. Feel free to reach out through any of the channels below.
                    </p>
                </div>
                {/* illustration */}
                {/* <div className='hidden xl:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat'></div> */}
            {/* </div> */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <ContactCard icon={<Mail className="h-6 w-6" />} title="Email" content="jakkarin.mike@gmail.com" />
                <ContactCard icon={<Phone className="h-6 w-6" />} title="Phone" content="092-538-3629" />
                {/* <ContactCard icon={<MapPin className="h-6 w-6" />} title="Location" content="City, Country" /> */}
                <ContactCard icon={<Linkedin className="h-6 w-6" />} title="LinkedIn" content="linkedin.com/in/" link="https://linkedin.com/in/" />
                <ContactCard icon={<Github className="h-6 w-6" />} title="GitHub" content="github.com/MajorTom3K1M" link="https://github.com/MajorTom3K1M" />
                <ContactCard icon={<Facebook className="h-6 w-6" />} title="Facebook" content="facebook.com/meteor.invader" link="https://www.facebook.com/meteor.invader" />
            </div>
        </div>
    )
}

interface ContactCardProps {
    icon: React.ReactNode
    title: string
    content: string
    link?: string
}

function ContactCard({ icon, title, content, link }: ContactCardProps) {
    return (
        <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardContent className="flex items-center p-6">
                <div className="mr-4 text-primary">{icon}</div>
                <div>
                    <h2 className="font-semibold text-lg mb-1">{title}</h2>
                    {link ? (
                        <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                            {content}
                        </a>
                    ) : (
                        <p className="text-gray-600">{content}</p>
                    )}
                </div>
            </CardContent>
        </Card>
    )
}
