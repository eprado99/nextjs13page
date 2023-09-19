import { BlockRenderer } from "@/components/Blocks/BlockRenderer/BlockRenderer";
import { getPageByUri } from "@/utils/getPageByUri";
import { notFound } from "next/navigation";
import { getPostContent, getPostMetadata } from '@/utils'
import { allProjectPosts, ProjectPost } from 'contentlayer/generated'
import { Metadata } from 'next';
import { getMDXComponent } from "next-contentlayer/hooks";
import Link from 'next/link'
import { getBlogMetadata, getBlogPost } from "@/services/blogServices";
import { Data, RootContent } from "@/types/blogContentTypes";
import Heading from "@/components/UI/Heading/Heading";
import Icon from "@/components/UI/Icon/Icon";
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
    const data: Data | null = await getBlogPost(params.slug);
    return { title: data?.post.title, description: "" };
};


export default async function Page({params}: BlogPageParams){
    const data = await getBlogPost(params.slug);
    if(!data){
        notFound();
    }
    return (
        <div className={"my-4 mx-2 md:mx-12 font-mono"}>
            <div className={"bg-black h-[40vh] rounded-lg"}></div>
            <div className={"mt-[-32vh] md:mx-14"}>
              <div className={"grid grid-cols-2 gap-5 justify-between justify-items-center items-center mb-2"}>
                <button className={"flex gap-2 p-3 text-white text-center md:bg-transparent rounded-3xl border-2 border-white"}>
                  {/* @ts-expect-error Server Component */}
                  <Icon name="arrow_back" width={24} style={{ sm: { fill: "black" }, fill: "white"}}/>
                  <span className={"flex items-center justify-center"}>Go back</span>
                
                </button>
                <div className={""}></div>
              </div>
              <div className={"bg-white p-4 lg:mx-14 rounded-lg border-2 overflow-hidden h-[100vh] border-neutral-300/60"}>
                <Heading style={{ marginBottom: '1rem', textAlign: 'center' }}>{data.post.title}</Heading>
                <BlockRenderer blocks={data.post.blocks} />
              </div>
            </div>
        </div>
    )
}