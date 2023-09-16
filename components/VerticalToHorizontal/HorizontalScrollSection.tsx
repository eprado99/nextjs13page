"use client"
import BlogCard from "../UI/BlogCard/BlogCard";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const HorizontalScrollSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: sectionRef});

    const horizontal = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);
    return (
        <section ref={sectionRef} className={"expanded-container relative h-[300vh] bg-zinc-950"}>
            <div className={"sticky top-0 h-screen flex items-center overflow-hidden"}>
                <motion.div style={{ translateX: horizontal }} className={"flex gap-4"}>
                    {
                        [...Array(5)].map((_, i) => (
                            <BlogCard key={i} />
                        ))
                    }
                   
                </motion.div>
            </div>
        </section>
    )
}

export default HorizontalScrollSection;