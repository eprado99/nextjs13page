import { BlockRenderer } from "@/components/Blocks/BlockRenderer/BlockRenderer";
import { getPageByUri } from "@/utils/getPageByUri";

export default async function Page({params}: any) {
    const data = await getPageByUri(params.slug.join('/'));
    return <BlockRenderer blocks={data.blocks} />;
}

