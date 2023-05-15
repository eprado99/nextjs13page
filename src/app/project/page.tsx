import ProjectList from "@/components/ProjectList/ProjectList";
import Heading from "@/components/UI/Heading/Heading";
import { MdxProjectMetadata } from "@/types";
import { getPostMetadata } from "@/utils";

export default function Page() {

    const metadata: MdxProjectMetadata[] = getPostMetadata("projects");
    console.log(metadata)
    return (
        <div className={"mt-4"}>
            <Heading style={{marginBottom: '1rem'}}>Projects</Heading>
            <ProjectList projectMetadataArr={metadata} />
        </div>
    )
}