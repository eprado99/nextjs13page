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
    const slug = params.slug
    const content = getPostContent("projects", params.slug)
    return (
        <div>
          <div>{slug}</div>
          <article className={"prose lg:prose-xl"}>
            <ReactMarkdown>{content}</ReactMarkdown>
          </article>
        </div>
    )
}