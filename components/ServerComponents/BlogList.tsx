import BlogCard from "../UI/BlogCard/BlogCard";

const BlogList = async () => {
    const posts: { id: string; [key: string]: any }[] = [];
    return (
        <>
        {
            posts && posts.map((post: any) => {
                return (<BlogCard key={post.id}  {...post} />)
            })
        }
        </>
    );
}

export default BlogList;