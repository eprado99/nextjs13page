import { BlockRenderer } from "@/components/Blocks/BlockRenderer/BlockRenderer";
import BlogList from "@/components/BlogList/BlogList";
import Heading from "@/components/UI/Heading/Heading";
import { getBlogMetadata } from "@/services/blogServices";
import { Node } from "@/types/blogMetadataTypes";

export default async function Page({params}: any){
  const nodes = await getBlogMetadata();
  if(!nodes) return <div></div>
  return (
    <div className={"my-4"}>
      <Heading style={{ marginBottom: "1rem" }}>Blog Posts</Heading>
      <BlogList posts={nodes}/>
    </div>
  )
}