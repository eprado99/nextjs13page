"use client"

import { MdxProjectMetadata } from "@/types"
import { allProjectPosts } from 'contentlayer/generated'
import ProjectCard from "../UI/ProjectCard/ProjectCard"
import { Node } from "@/types/projectMetadataTypes"

interface ProjectListProps {
    projectsArr: Node[]
}

export default function ProjectList({ projectsArr }: ProjectListProps) {

    return (
        <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6 justify-items-center"}>
           { projectsArr.map((post: Node) => {
                return <ProjectCard key={post.id} {...post}/>
            })}
        </div>
    )
}