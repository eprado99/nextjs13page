import Image from "next/image";
import Link from "next/link";
import { Node } from "@/types/blogMetadataTypes";

const BlogCard = (post: Node) => {
    const cleanExcerpt = post.excerpt.replace(/(<([^>]+)>)/gi, "");
    const cleanedText = cleanExcerpt.replace(/&#(\d+);/g, (match, charCode) => String.fromCharCode(charCode));
    // const style = { paddingBottom: `min(200px, ${100 / (500 / 500)}%)` }
    return (
        <div className={"block w-80 min-h-[20rem] bg-white rounded-3xl p-4 shadow-2xl cardContainer"}>
            <div className={"cardImageContainer mb-4"}>
                <Image src={post.featuredImage ? post.featuredImage.node.sourceUrl : "https://picsum.photos/500"} alt="Image from picsum" fill className={"text-center rounded-2xl object-cover object-center shadow-2xl overflow-hidden"}/>
            </div>
            <div className={"grid grid-rows-3 h-[15rem]"}>
                <h3 className={"font-bold leading-normal mb-2 w-full"}>{post.title}</h3>
                <p className={"leading-normal min-h-30 w-18 row-span-2 overflow-auto"}>{cleanedText}</p>
                <div className={"grid grid-cols-2 mt-4 w-full"}>
                    
                    {/* <a href={projectPost.githubLink ? projectPost.githubLink : "#"} target="_blank" className={"flex gap-1"} style={{ color: 'inherit', textDecoration: 'none', cursor: 'pointer' }}>
                        <ArrowTopRightOnSquareIcon className={"w-6 h-6 justify-self-start self-center"} /> <p className={"self-center"}>Github Repo</p>
                    </a> */}
                    <div>{post.tags.nodes.map(
                        (tag, i) => {
                            return (
                                <span key={i} className={"text-xs bg-[#272725] rounded-xl p-1 text-white font-bold"}>{tag.name}</span>
                            )
                        }
                    )
                    }</div>
                    <Link href={`blog/${post.slug}`} className={"text-center bg-black text-white rounded-2xl py-2 px-4 justify-self-end"}>Read more</Link>
                </div>
            </div>
        </div>
    )
        // <div className="my-4 flex-none w-1/3 h-[66vh] py-1.5 bg-white rounded-md">
        //     <div className={"block relative h-[33%] max-w-[100%] rounded-md"}>
        //         <div className={"relative flex flex-col h-[33%] p-6"}>
        //             <h2 className={"text-black"}>Title</h2>
        //             {/* p tag with lorem ipsum text of 4 paragraphs */}
        //             <p className={"whitespace-pre-wrap max-w-[95%] mt-20 mb-5"}>
        //                 {
        //                     [...Array(8)].map((_, i) => {
        //                         return (
        //                             <span key={i}>
        //                                 Lorem ipsum dol Lorem ipsum dol
        //                                 Lorem ipsum dol Lorem ipsum dol
        //                                 Lorem ipsum dol Lorem ipsum dol
        //                                 Lorem ipsum dol Lorem ipsum dol
        //                             </span>
        //                         )
        //                     })
        //                 }
        //             </p>
        //         </div>
        //     </div>
        // </div>
}

export default BlogCard;