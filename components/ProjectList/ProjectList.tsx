"use client"

import { MdxProjectMetadata } from "@/types"
import ProjectCard from "../UI/ProjectCard/ProjectCard"
import { allProjectPosts } from 'contentlayer/generated'

interface ProjectListProps {
    projectMetadataArr: MdxProjectMetadata[]
}
export default function ProjectList({projectMetadataArr}: ProjectListProps) {
    const posts = allProjectPosts
    return (
        <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6 justify-items-center"}>
           { posts.map((post) => {
                return <ProjectCard key={post.title} {...post}/>
            })}
        </div>
    )
}