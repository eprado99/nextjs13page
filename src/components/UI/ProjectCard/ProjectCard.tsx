import { MdxProjectMetadata } from "@/types"
import * as React from "react"
interface ProjectListProps {
    project: MdxProjectMetadata
}
export default function ProjectCard({project}:ProjectListProps) {
    return (
        <div className={"block w-80 bg-white rounded-3xl p-4 shadow-2xl"}>
            <img src="https://picsum.photos/300" alt="" className={"text-center rounded-2xl object-fill object-center mb-4 shadow-2xl"} />
            <h3 className={"font-bold leading-normal mb-2"}>{project.title}</h3>
            <p className={"leading-normal mx-auto mt-1"}>{project.description}</p>
        </div>
    )
}