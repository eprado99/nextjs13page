import { getAllProjects, Project } from "@/services/projectServices";
import ProjectCard from "../UI/ProjectCard/ProjectCard"

export const revalidate = 86400 // 1 day

interface ProjectListProps {
    classNames?: string
}

export default async function ProjectList({ classNames }: ProjectListProps) {
    const data = await getAllProjects();

    return (
        <div className={classNames}>
           { data && data.map((project: Project) => {
                return <ProjectCard key={project.title} {...project}/>
            })}
        </div>
    )
}