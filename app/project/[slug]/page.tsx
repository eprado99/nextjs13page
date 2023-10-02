import Heading from '@/components/UI/Heading/Heading';
import {  getPostMetadata } from '@/utils'
import { allProjectPosts, ProjectPost } from 'contentlayer/generated'
import { Metadata } from 'next';
import { getMDXComponent } from "next-contentlayer/hooks";
import Link from 'next/link'
import Icon from '@/components/UI/Icon/Icon';

interface ProjectPageProps {
    params: { slug: string }
}


type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata("projects")
  return posts.map(p => ({
    slug: p.slug
  }))
}

export const generateMetadata = ({ params }: Props): Metadata => {
  const post = allProjectPosts.find(
    (post: ProjectPost) => post._raw.flattenedPath === params.slug
  );
  return { title: post?.title, description: post?.description };
};

export default function Page({ params }: ProjectPageProps) {
    const post = allProjectPosts.find((post: any) => post._raw.flattenedPath === params.slug)
    if (!post) throw new Error(`Post not found for slug: ${params.slug}`)
    let MDXContent;
    if (!post) {
      return ""
    } else {
      MDXContent = getMDXComponent(post!.body.code);
    }
    return (
      <div className="my-4 mx-2 md:mx-12 h-[90vh] flex font-mono">
        
        <div className={"bg-black rounded-lg w-[33%] h-full flex flex-col gap-4 justify-center"}>
          <div className={"flex"}>
          <Link href={"/project"} className={"ml-2 place-self-start self-start flex gap-2 p-3 text-white text-center md:bg-transparent rounded-3xl border-2 border-white"}>
                    {/* @ts-expect-error Server Component */}
                    <Icon name="arrow_back" width={24} style={{ sm: { fill: "black" }, fill: "white"}}/>
                    <span className={"flex items-center justify-center"}>Go back</span>
          </Link>
          </div>
          <div className={"h-[30vh] grid grid-cols-2 grid-rows-6 w-[80%] mt-1 border-2 bg-white border-neutral-300/60 rounded-lg ml-[-2vh]"}>
            <div className={"col-span-2"}>
              <Heading style={{ marginBottom: '1rem', textAlign: 'center', color: 'black' }}>{post?.title}</Heading>
            </div>
          </div>
          <div className={"h-[40vh] w-[80%] mb-2 rounded-lg"}>

          </div>
        </div>
        <div className={"rounded-lg ml-[-2vh] w-[66%] border-2 bg-white border-neutral-300/60 h-[98%] self-center overflow-y-scroll"}>
          <article className={"prose lg:prose-xl"}>
            <MDXContent />
          </article>
        </div>
      </div>
    )
}