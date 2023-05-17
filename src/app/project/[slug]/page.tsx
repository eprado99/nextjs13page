import { getPostContent, getPostMetadata, getRemoteMdx } from '@/utils'
import ReactMarkdown from "react-markdown"


interface ProjectPageProps {
    params: { slug: string }
}

export const generateStaticParams = async () => {
  const posts = getPostMetadata("projects")
  return posts.map(p => ({
    slug: p.slug
  }))
}

export default function Page({ params }: ProjectPageProps) {
    const content = getPostContent("projects", params.slug)
    const sourceContent = getRemoteMdx("projects", params.slug)
    return (
        <div className={"px-2 sm:px-0 my-5 mx-auto"}>
          <article className={"prose lg:prose-xl"}>
            <ReactMarkdown>{content}</ReactMarkdown>
          </article>
        </div>
    )
}