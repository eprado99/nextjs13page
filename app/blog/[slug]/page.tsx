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
interface BlogPageParams {
    params: { slug: string }
}


type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export const generateStaticParams = async () => {
  const posts = await getBlogMetadata();
  return posts?.map(p => ({
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
        <div>
            Hello
            {JSON.stringify(data)}
        </div>
    )
}