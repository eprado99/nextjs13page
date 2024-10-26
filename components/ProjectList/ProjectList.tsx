"use client"

import { Project } from "@/services/projectServices"
import ProjectCard from "../UI/ProjectCard/ProjectCard"

interface ProjectListProps {
    projectsArr: Project[]
    classNames?: string
}

export default function ProjectList({ projectsArr, classNames }: ProjectListProps) {
    return (
        <div className={`grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-6 justify-items-center ${classNames}`}>
           { projectsArr.map((post: Project) => {
                return <ProjectCard key={post.title} {...post}/>
            })}
        </div>
    )
}