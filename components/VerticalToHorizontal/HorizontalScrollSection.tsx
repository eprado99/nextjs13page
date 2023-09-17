"use client"
import { Node } from "@/types/blogMetadataTypes";
import BlogCard from "../UI/BlogCard/BlogCard";
import { motion, useTransform, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { getBlogMetadata } from "@/services/blogServices";

const HorizontalScrollSection = () => {
    const [posts, setPosts] = useState<Node[]>([]);
    const sectionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: sectionRef});

    const horizontal = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

    useEffect(() => {
        const getPosts = async () => {
            const nodes = await getBlogMetadata();
            if(nodes){
                setPosts(nodes);
            }
            console.log(nodes)
        }
        getPosts();
        console.log(posts)
    }, [])

    return (
        <section ref={sectionRef} className={"expanded-container relative h-[300vh] bg-zinc-950"}>
            <div className={"sticky top-0 h-screen flex items-center overflow-hidden"}>
                <motion.div style={{ translateX: horizontal }} className={"flex gap-4"}>
                    {
                        posts ? posts.map((post) => {
                            return (<BlogCard key={post.id}  {...post} />)
                        })
                        : "loading"
                    }
                   
                </motion.div>
            </div>
        </section>
    )
}

export default HorizontalScrollSection;