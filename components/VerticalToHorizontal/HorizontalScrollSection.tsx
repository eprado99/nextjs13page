"use client"

import { useRef } from "react";

import { motion, useTransform, useScroll } from "framer-motion";

const HorizontalScrollSection = ({children,}:{children: React.ReactNode}) => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: sectionRef});

    const horizontal = useTransform(scrollYProgress, [0, 1], ["135%", "-95%"]);

    return (
        <section ref={sectionRef} className={"expanded-container relative h-[300vh] bg-zinc-950"}>
            <div className={"sticky top-[20vh] h-screen flex justify-items-center overflow-hidden"}>
                <motion.div style={{ translateX: horizontal }} className={"flex gap-4 mx-auto"}>
                    { children }
                </motion.div>
            </div>
        </section>
    )
}

export default HorizontalScrollSection;