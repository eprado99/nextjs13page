"use client"

import { MdxProjectMetadata } from "@/types"
import ProjectCard from "../UI/ProjectCard/ProjectCard"

interface ProjectListProps {
    projectMetadataArr: MdxProjectMetadata[]
}
export default function ProjectList({projectMetadataArr}: ProjectListProps) {
    return (
        <div className={"grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-6 justify-items-center"}>
           { projectMetadataArr.map((project) => {
                return <ProjectCard key={project.slug} project={project}/>
            })}
        </div>
    )
}