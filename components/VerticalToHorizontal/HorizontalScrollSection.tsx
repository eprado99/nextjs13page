"use client"
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
                    <div className="my-4 flex-none w-1/3 h-auto py-1.5 bg-white rounded-md">
                        <div className={"block relative h-[33%] max-w-[100%] rounded-md"}>
                            <div className={"relative flex flex-col h-[33%] p-6"}>
                                <h2 className={"text-black"}>Title</h2>
                                {/* p tag with lorem ipsum text of 4 paragraphs */}
                                <p className={"whitespace-pre-wrap max-w-[95%] mt-20 mb-5"}>
                                    Lorem ipsum dol Lorem ipsum dol
                                    Lorem ipsum dol Lorem ipsum dol
                                    Lorem ipsum dol Lorem ipsum dol
                                </p>
                                
                            </div>
                        </div>
                    </div>
                    <div className="my-4 flex-none w-1/3 h-auto py-1.5 bg-white rounded-md">
                        <div className={"block relative h-[33%] max-w-[100%] rounded-md"}>
                            <div className={"relative flex flex-col h-[33%] p-6"}>
                                <h2 className={"text-black"}>Title</h2>
                                {/* p tag with lorem ipsum text of 4 paragraphs */}
                                <p className={"whitespace-pre-wrap max-w-[95%] mt-20 mb-5"}>
                                    Lorem ipsum dol Lorem ipsum dol
                                    Lorem ipsum dol Lorem ipsum dol
                                    Lorem ipsum dol Lorem ipsum dol
                                </p>
                                
                            </div>
                        </div>
                    </div>
                    <div className="my-4 flex-none w-1/3 h-auto py-1.5 bg-white rounded-md">
                        <div className={"block relative h-[33%] max-w-[100%] rounded-md"}>
                            <div className={"relative flex flex-col h-[33%] p-6"}>
                                <h2 className={"text-black"}>Title</h2>
                                {/* p tag with lorem ipsum text of 4 paragraphs */}
                                <p className={"whitespace-pre-wrap max-w-[95%] mt-20 mb-5"}>
                                    Lorem ipsum dol Lorem ipsum dol
                                    Lorem ipsum dol Lorem ipsum dol
                                    Lorem ipsum dol Lorem ipsum dol
                                </p>
                                
                            </div>
                        </div>
                    </div>
                    <div className="my-4 flex-none w-1/3 h-auto py-1.5 bg-white rounded-md">
                        <div className={"block relative h-[33%] max-w-[100%] rounded-md"}>
                            <div className={"relative flex flex-col h-[33%] p-6"}>
                                <h2 className={"text-black"}>Title</h2>
                                {/* p tag with lorem ipsum text of 4 paragraphs */}
                                <p className={"whitespace-pre-wrap max-w-[95%] mt-20 mb-5"}>
                                    Lorem ipsum dol Lorem ipsum dol
                                    Lorem ipsum dol Lorem ipsum dol
                                    Lorem ipsum dol Lorem ipsum dol
                                </p>
                                
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default HorizontalScrollSection;