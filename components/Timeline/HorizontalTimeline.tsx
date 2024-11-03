"use client"

import { WorkExperience } from "@/types"
import { SetStateAction, useState } from "react";
import TimelineCard from "../UI/TimelineCard/TimelineCard";
import { motion, AnimatePresence } from "framer-motion";

interface TimelineProps {
    work: WorkExperience[]
}

export default function HorizontalTimeline({work}: TimelineProps){
    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);
    const [selectedId, setSelectedId] = useState<number | null>(null);

    const handleMouseMove = (e: { nativeEvent: { clientX: SetStateAction<number>; clientY: SetStateAction<number>; }; }) => {
        setMouseX(e.nativeEvent.clientX);
        setMouseY(e.nativeEvent.clientY);
    };

    return (
        <motion.div 
            className="min-h-[500px] w-full flex flex-col items-center relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div 
                className="timeline-card-container w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 relative"
                onMouseMove={handleMouseMove}
            >
                {work.map((item: WorkExperience, index) => (
                    <TimelineCard 
                        key={index} 
                        item={item} 
                        index={index} 
                        mouseX={mouseX} 
                        mouseY={mouseY}
                        isSelected={selectedId === index}
                        onSelect={setSelectedId}
                    />
                ))}
            </div>

            <AnimatePresence mode="popLayout">
                {selectedId !== null && (
                    <>
                        <motion.div
                            className="fixed inset-0 bg-black/50 z-40"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedId(null)}
                        />
                        <motion.div
                            className="fixed inset-0 z-50 flex items-center justify-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            {work.map((item, index) => (
                                selectedId === index && (
                                    <TimelineCard 
                                        key={`modal-${index}`}
                                        item={item} 
                                        index={index} 
                                        mouseX={mouseX} 
                                        mouseY={mouseY}
                                        isSelected={true}
                                        onSelect={setSelectedId}
                                    />
                                )
                            ))}
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </motion.div>
    )
}