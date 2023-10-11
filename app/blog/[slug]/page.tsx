import { Metadata } from 'next';
import Link from 'next/link'
import { notFound } from "next/navigation";


import { getBlogMetadata, getBlogPost } from "@/services/blogServices";
import { getPostSeo } from "@/services/getSeo";

import { Seo } from "@/types/seoMetadataTypes";

import { BlockRenderer } from "@/components/Blocks/BlockRenderer/BlockRenderer";
import Heading from "@/components/UI/Heading/Heading";
import Icon from "@/components/UI/Icon/Icon";

export const revalidate = 86400 // 1 day

interface BlogPageParams {
    params: { slug: string }
}


type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export const generateStaticParams = async () => {
  const posts = await getBlogMetadata();
  return posts!.map(p => ({
    slug: p.slug
  }))
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    const data: Seo = await getPostSeo(params.slug);
    return { title: data?.title || "", description: data?.metaDesc || "Prado's blog" };
};


export default async function Page({params}: BlogPageParams){
    const data = await getBlogPost(params.slug);
    if(!data){
        notFound();
    }
    return (
        <div className={"mt-4 mx-2 md:mx-12 h-screen font-mono"}>
            <div className={"bg-black h-[40vh] rounded-lg"}></div>
            <div className={"mt-[-32vh] md:mx-14"}>
              <div className={"grid grid-cols-2 gap-5 justify-between justify-items-center items-center mb-2"}>
                <Link href={"/blog"} className={"flex gap-2 p-3 text-white text-center md:bg-transparent rounded-3xl border-2 border-white"}>
                  {/* @ts-expect-error Server Component */}
                  <Icon name="arrow_back" width={24} style={{ sm: { fill: "black" }, fill: "white"}}/>
                  <span className={"flex items-center justify-center"}>Go back</span>
                </Link>
                <div className={""}></div>
              </div>
              <div className={"bg-white p-4 overflow-hidden rounded-lg border-2 h-[80vh] border-neutral-300/60"}>
                <Heading style={{ marginBottom: '1rem', textAlign: 'center' }}>{data.post.title}</Heading>
                <div className={"modern-card-scrollable-section overflow-y-auto h-4/5"}>
                  <BlockRenderer blocks={data.post.blocks} />
                </div>
              </div>
            </div>
        </div>
    )
}