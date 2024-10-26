import BlogList from "@/components/BlogList/BlogList";
import Heading from "@/components/UI/Heading/Heading";

export const revalidate = 86400 // 1 day

export default async function Page({params}: any){
  const nodes = null;
  if(!nodes) return <div></div>
  return (
    <div className={"my-4"}>
      <Heading style={{ marginBottom: "1rem" }}>Blog Posts</Heading>
      <BlogList posts={nodes}/>
    </div>
  )
}