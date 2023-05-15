import { MdxProjectMetadata } from "@/types"
import * as React from "react"
import Link from "next/link"
import Image from "next/image"
interface ProjectListProps {
    project: MdxProjectMetadata
}
export default function ProjectCard({project}:ProjectListProps) {
    return (
        <div className={"block w-80 min-h-[20rem] bg-white rounded-3xl p-4 shadow-2xl cardContainer"}>
            <div className={"cardImageContainer mb-4"}>
                <Image src="https://picsum.photos/500" alt="Image from picsum" width={288} height={288} className={"text-center rounded-2xl object-fill object-center shadow-2xl overflow-hidden"}/>
            </div>
            <div className={"grid grid-rows-3 justify-start h-44"}>
                <h3 className={"font-bold leading-normal mb-2"}>{project.title}</h3>
                <p className={"leading-normal mt-1 min-h-24"}>{project.description}</p>
                <Link href={`/project/${project.slug}`} className={"text-center mt-4 bg-black text-white rounded-2xl py-2 px-4 justify-self-end"}>Read more</Link>
            </div>
        </div>
    )
}