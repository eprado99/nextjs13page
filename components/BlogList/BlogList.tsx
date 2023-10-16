import { Node } from "@/types/blogMetadataTypes"
import BlogCard from "../UI/BlogCard/BlogCard"

interface BlogListProps {
    posts: Node[]
}

export default function BlogList({posts}: BlogListProps) {
    console.log(posts)
    return (
        <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6 justify-items-center"}>
           { posts.map((post) => {
                return <BlogCard key={post.id} {...post}/>
            })}
        </div>
    )
}