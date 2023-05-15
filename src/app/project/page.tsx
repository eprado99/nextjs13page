import ProjectList from "@/components/ProjectList/ProjectList";
import { MdxProjectMetadata } from "@/types";
import { getPostMetadata } from "@/utils";

export default function Page() {

    const metadata: MdxProjectMetadata[] = getPostMetadata("projects");
    console.log(metadata)
    return (
        <div className={"mt-5"}>
            <ProjectList projectMetadataArr={metadata} />
        </div>
    )
}