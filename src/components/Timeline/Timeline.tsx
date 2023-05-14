"use client"

import * as React from "react"
import { WorkExperience } from "@/types"

interface TimelineProps {
    work: WorkExperience[]
}
export default function Timeline({work}: TimelineProps){
    return (
        <ol className={"mx-2 md:mx-1 lg:mx-0 relative border-l border-black "}>
            {
                work.map((item: WorkExperience, index) => {
                    var formattedStartDate = Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(item.startDate)
                    var formattedEndDate = Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(item.endDate)
                    return (
                        <li className={"mb-10 ml-4"} key={index}>
                            <div className={"absolute w-3 h-3 bg-black rounded-full mt-1.5 -left-1.5 border border-dark"}></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-800">
                                { formattedStartDate } - { formattedEndDate }
                            </time>
                            <h3 className="text-lg font-semibold text-gray-900">{ item.role } @ {item.company}</h3>
                            <p className="mb-4 text-base font-normal text-gray-500">{item.description}</p>
                        </li>
                    )
                })
            }
        </ol>
    )
}