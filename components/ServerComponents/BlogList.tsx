import { getBlogMetadata } from "@/services/blogServices"
import BlogCard from "../UI/BlogCard/BlogCard";

const BlogList = async () => {
    const posts = await getBlogMetadata();
    return (
        <>
        {
            posts && posts.map((post) => {
                return (<BlogCard key={post.id}  {...post} />)
            })
        }
        </>
    );
}

export default BlogList;