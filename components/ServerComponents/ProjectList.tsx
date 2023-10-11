import { getProjects } from "@/services/projectServices";
import ProjectCard from "../UI/ProjectCard/ProjectCard"
import { Node } from "@/types/projectMetadataTypes"

export const revalidate = 86400 // 1 day

export default async function ProjectList() {
    const projectMetadata = await getProjects();
    const data = projectMetadata?.projects.nodes
    return (
        <>
           { data && data.map((post: Node) => {
                return <ProjectCard key={post.id} {...post}/>
            })}
        </>
    )
}