import { BlockRenderer } from "@/components/Blocks/BlockRenderer/BlockRenderer";
import { getBlogMetadata } from "@/services/blogServices";
import { Node } from "@/types/blogMetadataTypes";
import { notFound } from "next/navigation";

export default async function Page({params}: any){
    // const res = await fetch(`${process.env.WP_GRAPHQL_URL}`, {
    //     method: "POST",
    //     body: JSON.stringify({
    //       query: `query GetNodeByUri($uri: String!) {
    //         nodeByUri(uri: $uri) {
    //           __typename
    //           ... on ContentType {
    //             name
    //             uri
    //             isFrontPage
    //             contentNodes {
    //               nodes {
    //                 __typename
    //                 ... on Post {
    //                   id
    //                   title
    //                   uri
    //                   slug
    //                   date
    //                 }
    //               }
    //             }
    //           }
    //         }
    //       } 
    //       `,
    //       variables: {
    //         "uri": "/"
    //       },
    //     }),
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    // });
    // const { data } = await res.json();
    // if(!data){
    //     notFound();
    // }
    const nodes = await getBlogMetadata();
    return (
        <div>
            Hello
            {nodes?.map((node: Node) => {
              return ( 
                <div>
                  <h1>{node.title}</h1>
                  <p>{node.date}</p>
                  {/* <p>{node.excerpt}</p> */}
                  <p>{node.slug}</p>
                </div>
              )
            })}
        </div>
        // <BlockRenderer blocks={data?.blocks} />
    )
}