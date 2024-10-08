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
        <div className={"xl:h-[100vh] 2xl:h-[80vh] flex"}>
            <div className={"timeline-card-container"} onMouseMove={handleMouseMove} >
                {
                    work.map((item: WorkExperience, index) => {
                        return (
                            <TimelineCard key={index} item={item} index={index} mouseX={mouseX} mouseY={mouseY} />
                        )
                    })
                }
            </div>
        </div>
        
    )
}