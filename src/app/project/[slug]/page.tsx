import { getPostContent, getPostMetadata } from '@/utils'
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
    return (
        <div className={"mx-auto"}>
          <article className={"prose lg:prose-xl"}>
            <ReactMarkdown>{content}</ReactMarkdown>
          </article>
        </div>
    )
}