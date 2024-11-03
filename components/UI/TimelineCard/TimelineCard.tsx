import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WorkExperience } from "@/types";

interface TimelineCardProps {
    item: WorkExperience,
    index: number,
    mouseX: number,
    mouseY: number,
    isSelected: boolean,
    onSelect: (id: number | null) => void
}

function SkeletonContent() {
  return (
    <div className="animate-pulse h-full flex flex-col justify-between">
      <div>
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4 mb-2"></div>
        <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2"></div>
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-2/3"></div>
        </div>
      </div>
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-24 mt-3"></div>
    </div>
  );
}

export default function TimelineCard({item, index, mouseX, mouseY, isSelected, onSelect}: TimelineCardProps) {
    const [isTransitioning, setIsTransitioning] = useState(false);
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
    var formattedEndDate = item.endDate === "Present" ? "Present" : Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(new Date(item.endDate));

    return (
        <>
            <motion.div 
                className={`timeline-card transition-transform cursor-pointer mx-auto ${isSelected ? 'z-50' : ''}`}
                key={index} 
                ref={cardRef}
                layoutId={`card-${index}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { duration: 0.5, delay: index * 0.2 }
                }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ scale: 1.02 }}
                onClick={() => !isSelected && onSelect(index)}
            >
                <div className="timeline-card-content p-4 h-full flex flex-col justify-between">
                    {(isSelected || isTransitioning) ? (
                        <SkeletonContent />
                    ) : (
                        <>
                            <div>
                                <time className="mb-2 text-sm font-normal leading-none text-gray-500 dark:text-gray-400 block">
                                    {formattedStartDate} - {formattedEndDate}
                                </time>
                                <h3 className="text-lg font-semibold mb-2">
                                    {item.role} @ {item.company}
                                </h3>
                                <p className="mb-3 text-base font-normal line-clamp-3">
                                    {item.shortDescription}
                                </p>
                                <p className="text-sm font-normal line-clamp-2">
                                    Technologies: {item.technologies}
                                </p>
                            </div>
                            <div className="mt-3 text-sm text-blue-500 hover:text-blue-600">
                                Click to expand
                            </div>
                        </>
                    )}
                </div>
            </motion.div>

            {isSelected && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4"
                    initial={false}
                    onClick={(e) => e.stopPropagation()}
                >
                    <motion.div 
                        layoutId={`card-${index}`}
                        className="bg-white dark:bg-gray-800 p-6 rounded-lg w-full max-w-2xl mx-4"
                        transition={{ duration: 0.3 }}
                    >
                        <div className="flex justify-between items-start mb-4">
                            <time className="text-sm font-normal text-gray-500 dark:text-gray-400">
                                {formattedStartDate} - {formattedEndDate}
                            </time>
                            <button
                                onClick={() => onSelect(null)}
                                className="text-gray-500 hover:text-gray-700 dark:text-gray-400"
                            >
                                ✕
                            </button>
                        </div>
                        <h3 className="text-xl font-semibold mb-3">
                            {item.role} @ {item.company}
                        </h3>
                        <p className="mb-4 text-base font-normal">
                            {item.shortDescription}
                        </p>
                        <p className="text-base font-normal">
                            <span className="font-medium">Technologies:</span> {item.technologies}
                        </p>
                    </motion.div>
                </motion.div>
            )}
        </>
    );
}