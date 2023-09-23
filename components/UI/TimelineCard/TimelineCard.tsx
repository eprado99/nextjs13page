import { WorkExperience } from "@/types";
import React, { useEffect } from "react";

interface TimelineCardProps {
    item: WorkExperience,
    index: number,
    mouseX: number,
    mouseY: number
}

export default function TimelineCard({item, index, mouseX, mouseY}: TimelineCardProps) {

    const cardRef = React.useRef<HTMLDivElement>(null);

    useEffect(() => {
        const card = cardRef.current;
        if(card){
            const rect = card.getBoundingClientRect();
            var x, y;
            if (mouseX || mouseY) { 
                x = mouseX;
                y = mouseY;
            }
            else { 
                x = mouseX + document.body.scrollLeft + document.documentElement.scrollLeft; 
                y = mouseY + document.body.scrollTop + document.documentElement.scrollTop; 
              } 
            card.style.setProperty('--mouse-x', `${x - rect.left}px`);
            card.style.setProperty('--mouse-y', `${y - rect.top}px`);
        }
    }, [mouseX, mouseY])

    var formattedStartDate = Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(item.startDate)
    // Spaghetti code to check if the end date is "Present" or not
    var formattedEndDate = item.endDate === "Present" ? "Present" : Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(new Date(item.endDate));
    return (
        <div 
            className={`timeline-card`} 
            key={index} 
            ref={cardRef}
        >
            <div className={"timeline-card-content"}>
                <time className="mb-1 text-sm font-normal leading-none">
                    { formattedStartDate } - { formattedEndDate }
                </time>
                <h3 className="text-lg font-semibold">{ item.role } @ {item.company}</h3>
                <p className="mb-4 text-base font-normal">{item.description}</p>
                <p className="text-base font-normal">Technologies used: {item.technologies}</p>
            </div>
        </div>
    )
}