"use client"

import { WorkExperience } from "@/types"
import { SetStateAction, useState } from "react";
import TimelineCard from "../UI/TimelineCard/TimelineCard";

interface TimelineProps {
    work: WorkExperience[]
}
export default function HorizontalTimeline({work}: TimelineProps){

    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);

    const handleMouseMove = (e: { nativeEvent: { clientX: SetStateAction<number>; clientY: SetStateAction<number>; }; }) => {
        setMouseX(e.nativeEvent.clientX);
        setMouseY(e.nativeEvent.clientY);
    };

    
    return (
        <div className={"timeline-expanded-container inverse h-[100vh] flex items-center justify-center"}>
            <div className={"timeline-card-container"} onMouseMove={handleMouseMove}>
                {
                    work.map((item: WorkExperience, index, arr) => {

                        
                        return (
                            <TimelineCard key={index} item={item} index={index} mouseX={mouseX} mouseY={mouseY} />
                        )
                    })
                }
            </div>
        </div>
        
    )
}