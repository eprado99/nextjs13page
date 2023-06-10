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
        <div className={"block w-80 min-h-[20rem] bg-white rounded-3xl p-4 shadow-2xl cardContainer"}>
            <div className={"cardImageContainer mb-4"}>
                <Image src="https://picsum.photos/500" alt="Image from picsum" width={288} height={288} className={"text-center rounded-2xl object-fill object-center shadow-2xl overflow-hidden"}/>
            </div>
            <div className={"grid grid-rows-3 h-44"}>
                <h3 className={"font-bold leading-normal mb-2 w-full"}>{projectPost.title}</h3>
                <p className={"leading-normal mt-1 min-h-24 w-18 row-span-2 overflow-auto"}>{projectPost.description}</p>
                <div className={"grid grid-cols-2 mt-4 w-full"}>
                   
                    <a href={projectPost.githubLink ? projectPost.githubLink : "#"} target="_blank" className={"flex gap-1"} style={{ color: 'inherit', textDecoration: 'none', cursor: 'pointer' }}>
                        <ArrowTopRightOnSquareIcon className={"w-6 h-6 justify-self-start self-center"} /> <p className={"self-center"}>Github Repo</p>
                    </a>
                    
                    <Link href={`${projectPost.url}`} className={"text-center bg-black text-white rounded-2xl py-2 px-4 justify-self-end"}>Read more</Link>
                </div>
            </div>
        </div>
    )
}