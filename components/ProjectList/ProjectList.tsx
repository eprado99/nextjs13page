"use client"

import ProjectCard from "../UI/ProjectCard/ProjectCard"
import { Node } from "@/types/projectMetadataTypes"

interface ProjectListProps {
    projectsArr: Node[]
    classNames?: string
}

export default function ProjectList({ projectsArr, classNames }: ProjectListProps) {
    return (
        <div className={`grid grid-cols-1 lg:grid-cols-3 gap-x-4 gap-y-6 justify-items-center ${classNames}`}>
           { projectsArr.map((post: Node) => {
                return <ProjectCard key={post.id} {...post}/>
            })}
        </div>
    )
}