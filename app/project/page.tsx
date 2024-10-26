import ProjectList from "@/components/ProjectList/ProjectList";
import Heading from "@/components/UI/Heading/Heading";
import { getAllProjects } from "@/services/projectServices";

export const revalidate = 86400 // 1 day

export default async function Page() {
    const projectMetadata = await getAllProjects();
    const data = projectMetadata;
    
    return (
        <div className={"my-4"}>
            <Heading style={{marginBottom: '1rem'}}>Projects</Heading>
            {
                data && <ProjectList projectsArr={data}/>
            }
        </div>
    )
}