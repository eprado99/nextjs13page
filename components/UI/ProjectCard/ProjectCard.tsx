import { MdxProjectMetadata } from "@/types"
import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid"
import { ProjectPost } from "contentlayer/generated"
interface ProjectListProps {
    project: MdxProjectMetadata
}
export default function ProjectCard(projectPost:ProjectPost) {
    return (
        <div className={"block w-full bg-white rounded-2xl p-4 shadow-2xl cardContainer"}>
            <div className={"grid grid-rows-6 h-full"}>
                <div className={"row-span-2 space-y-4"}>
                    <h3 className={"font-bold text-2xl self-center leading-normal w-full"}>
                        {projectPost.title}
                    </h3>
                    <div className={"flex gap-2 text-sm text-gray-500 justify-self-start self-center"}>
                        <p>Python</p>
                        <p>Java</p>
                        <p>JavaScript</p>
                    </div>
                    <div className={"flex gap-2 text-sm text-white justify-self-start self-center"}>
                        <p className={"bg-black rounded-full px-2 py-1"}>Web App</p>
                        <p className={"bg-black rounded-full px-2 py-1"}>Mobile App</p>
                    </div>
                </div>
                
                <p className={"leading-normal mt-1 w-18 row-span-3 overflow-hidden overflow-y-scroll"}>
                    {projectPost.description}
                    lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Donec euismod, nisl eget maximus ultrices, nunc nisl aliquam nunc, vitae aliquam nunc nisl eget mauris. 
                    Donec euismod, nisl eget maximus ultrices, nunc nisl aliquam nunc, vitae aliquam nunc nisl eget mauris. 
                    Donec euismod, nisl eget maximus ultrices, nunc nisl aliquam nunc, vitae aliquam nunc nisl eget mauris.
                    Donec euismod, nisl eget maximus ultrices, nunc nisl aliquam nunc, vitae aliquam nunc nisl eget mauris.
                    Donec euismod, nisl eget maximus ultrices, nunc nisl aliquam nunc, vitae aliquam nunc nisl eget mauris.
                    Donec euismod, nisl eget maximus ultrices, nunc nisl aliquam nunc, vitae aliquam nunc nisl eget mauris.
                </p>

                <div className={"grid grid-cols-2 mt-4 self-end w-full"}>
                   
                    <a href={projectPost.githubLink ? projectPost.githubLink : "#"} target="_blank" className={"flex gap-1"} style={{ color: 'inherit', textDecoration: 'none', cursor: 'pointer' }}>
                        <ArrowTopRightOnSquareIcon className={"w-6 h-6 justify-self-start self-center"} /> <p className={"self-center"}>Github Repo</p>
                    </a>
                    
                    <Link href={`${projectPost.url}`} className={"text-center bg-black text-white rounded-2xl py-2 px-4 justify-self-end"}>Read more</Link>
                </div>
            </div>
        </div>
    )
}