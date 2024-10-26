import * as React from "react"

import Link from "next/link"

import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid"
import { Project } from "@/services/projectServices"


export default function ProjectCard({ sys, title, description, githubUrl, mainImage, isReady, slug }:Project) {
    return (
        <div className={"block w-full bg-white rounded-2xl p-4 shadow-2xl cardContainer"} key={title}>
            <div className={"grid grid-rows-6 h-full"}>
                <div className={"row-span-2 space-y-4"}>
                    <h3 className={"font-bold text-2xl self-center leading-normal w-full"}>
                        {title}
                    </h3>
                    <div className={"flex gap-2 text-sm text-gray-500 justify-self-start self-center"}>
                        {
                            /*
                            programmingLanguages.nodes.map((language, index) => {
                                return <p key={index}>{language.name}</p>
                            })
                            */
                        }
                    </div>
                    <div className={"flex gap-2 text-sm text-white justify-self-start self-center"}>
                        {
                            /*
                            appTypes.nodes.map((appType, index) => {
                                return <p className={"bg-black rounded-full px-2 py-1"} key={index}>{appType.name}</p>
                            })
                            */
                        }
                    </div>
                </div>
                
                <div className={"leading-normal mt-1 w-18 row-span-3 overflow-hidden overflow-y-scroll"} dangerouslySetInnerHTML={{ __html: "WIP" }} />



                <div className={"grid grid-cols-2 mt-4 self-end w-full"}>
                   
                    <a href={githubUrl ? githubUrl : "#"} target="_blank" className={"flex gap-1"} style={{ color: 'inherit', textDecoration: 'none', cursor: 'pointer' }}>
                        <ArrowTopRightOnSquareIcon className={"w-6 h-6 justify-self-start self-center"} /> <p className={"self-center"}>Github Repo</p>
                    </a>
                    
                    <Link href={`project/${slug}`} className={`text-center bg-black text-white rounded-2xl py-2 px-4 justify-self-end ${!isReady && "pointer-events-none"}`}>Read more</Link>
                </div>
            </div>
        </div>
    )
}