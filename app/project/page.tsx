import ProjectList from "@/components/ProjectList/ProjectList";
import Heading from "@/components/UI/Heading/Heading";
import { getProjects } from "@/services/projectServices";


export default async function Page() {
    const projectMetadata = await getProjects();
    const data = projectMetadata?.projects.nodes
    
    return (
        <div className={"my-4"}>
            <Heading style={{marginBottom: '1rem'}}>Projects</Heading>
            {
                data && <ProjectList projectsArr={data} />
            }
        </div>
    )
}