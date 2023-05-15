import ProjectList from "@/components/ProjectList/ProjectList";
import { MdxProjectMetadata } from "@/types";
import { getPostMetadata } from "@/utils";

export default function Page() {

    const metadata: MdxProjectMetadata[] = getPostMetadata("projects");
    console.log(metadata)
    return (
        <div>
            <ProjectList projectMetadataArr={metadata} />
        </div>
    )
}