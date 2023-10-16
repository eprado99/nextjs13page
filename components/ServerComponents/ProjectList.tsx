import { getProjects } from "@/services/projectServices";
import ProjectCard from "../UI/ProjectCard/ProjectCard"
import { Node } from "@/types/projectMetadataTypes"

export const revalidate = 86400 // 1 day

interface ProjectListProps {
    classNames?: string
}

export default async function ProjectList({ classNames }: ProjectListProps) {
    const projectMetadata = await getProjects();
    const data = projectMetadata?.projects.nodes
    return (
        <div className={classNames}>
           { data && data.map((post: Node) => {
                return <ProjectCard key={post.id} {...post}/>
            })}
        </div>
    )
}