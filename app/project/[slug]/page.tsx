import { getPostContent, getPostMetadata } from '@/utils'
import { allProjectPosts, ProjectPost } from 'contentlayer/generated'
import { Metadata } from 'next';
import { getMDXComponent } from "next-contentlayer/hooks";
import Link from 'next/link'

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
    const post = allProjectPosts.find((post) => post._raw.flattenedPath === params.slug)
    if (!post) throw new Error(`Post not found for slug: ${params.slug}`)
    let MDXContent;
    if (!post) {
      return ""
    } else {
      MDXContent = getMDXComponent(post!.body.code);
    }
    return (
      <div className="py-10 flex justify-center">
        <div className="w-full h-fit flex flex-col">
          <div className="xl:px-32 px-10 flex flex-col items-center">
            <article className={"prose lg:prose-xl"}>
              <MDXContent />
            </article>
          </div>
        </div>
      </div>
    )
}