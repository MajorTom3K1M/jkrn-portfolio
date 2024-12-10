"use client";
import { useState } from "react";

import { Dialog, DialogContent, DialogTitle, DialogHeader, DialogDescription, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

import { Calendar, ChevronRight, ExternalLink, FileText } from "lucide-react";

import { useTranslation } from "@/components/providers/TranslationProvider";

interface DetailedDate {
    start: string
    end: string
    duration: string
}

interface TimelineItemProps {
    title?: string
    subtitle?: string
    date?: string
    detailedDate: DetailedDate
    description: string
    details?: string[]
    tags: string[]
    transcriptUrl?: string
}

function TimelineItem({ title, subtitle, date, detailedDate, description, tags, details, transcriptUrl }: TimelineItemProps) {
    const { translation } = useTranslation()
    const [isOpen, setIsOpen] = useState(false)

    const openTranscript = () => {
        console.log('transcriptUrl', transcriptUrl)
        window.open(transcriptUrl, '_blank', 'noopener,noreferrer')
    }

    return (
        <>
            <div className="flex relative group">
                {/* <div className="absolute -left-[25px] h-4 w-4 rounded-full bg-background border-2 border-[#ff7171] group-hover:scale-125 transition-transform duration-300" /> */}
                <div className='mt-4 mr-2 h-[84px] w-[1px] bg-border relative ml-2'>
                    <div className='w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500'></div>
                </div>

                <div
                    className="space-y-1 p-4 rounded-lg transition-all duration-300 hover:bg-muted hover:shadow-md cursor-pointer group"
                    onClick={() => setIsOpen(true)}
                >

                    <div className="flex items-center justify-between">
                        <h3 className="font-semibold">{title}</h3>
                        <ChevronRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <p className="text-muted-foreground">{subtitle}</p>
                    {/* <p className="text-sm text-muted-foreground">{date}</p> */}
                    <p className="text-base font-medium">{date}</p>
                    {/* <div className="mt-2 text-sm text-[#ff7171] flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"> */}
                    <div className="mt-2 text-sm text-[#ff7171] flex items-center gap-1 opacity-100 transition-opacity duration-300">
                        <ExternalLink className="w-4 h-4" />
                        <span>{translation("timeline.clickForDetails")}</span>
                    </div>
                </div>
            </div>

            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                {/* <DialogContent className="sm:max-w-[425px]"> */}
                <DialogContent className="max-w-[700px]">
                    <DialogHeader>
                        <DialogTitle>{title}</DialogTitle>
                        <DialogDescription>{subtitle}</DialogDescription>
                        {/* {transcriptUrl && (<div>
                            <Button size="sm" variant="outline" className='rounded-full flex items-center justify-center gap-2'>
                                <FileText className="w-4 h-4" />
                                View Transcript
                            </Button>
                        </div>)} */}
                    </DialogHeader>
                    <ScrollArea className="max-h-[60vh] overflow-auto">
                        <div className="grid gap-4 py-4">
                            <div className="flex items-start gap-2">
                                <Calendar className="w-4 h-4 mt-1 text-[#ff7171]" />
                                <div>
                                    <p className="text-sm font-semibold">{translation("timeline.detailedTimeframe")}</p>
                                    <p className="text-xs">{translation("timeline.start")} {detailedDate.start}</p>
                                    <p className="text-xs">{translation("timeline.end")} {detailedDate.end}</p>
                                    <p className="text-xs">{translation("timeline.duration")} {detailedDate.duration}</p>
                                </div>
                            </div>

                            <ul className="space-y-2 text-sm">
                                {details?.map((detail, detailIndex) => (
                                    <li key={detailIndex} className="flex flex-1 items-start">
                                        <span className="text-center justify-self-center mr-2 mt-2 w-[4px] h-[4px] aspect-square rounded-full bg-red-400" />
                                        {detail}
                                    </li>
                                ))}
                            </ul>

                            {description && <p className="text-sm">{description}</p>}

                            {transcriptUrl && (<div>
                                <Button size="sm" variant="outline" className='rounded-full flex items-center justify-center gap-2' onClick={openTranscript}>
                                    <FileText className="w-4 h-4" />
                                    {/* View Transcript */}
                                    {translation("timeline.viewTranscript")}
                                </Button>
                            </div>)}

                            <div className="flex flex-wrap gap-1 mt-2">
                                {tags.map((tag, index) => (
                                    <span key={index} className="text-xs bg-muted px-2 py-1 rounded">{tag}</span>
                                ))}
                            </div>

                        </div>
                    </ScrollArea>
                    <DialogClose asChild>
                        <Button type="button" variant="secondary">
                            {translation("timeline.close")}
                        </Button>
                    </DialogClose>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default TimelineItem;