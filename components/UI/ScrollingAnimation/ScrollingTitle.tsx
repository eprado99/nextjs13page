import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface ScrollingTitleProps {
    children: React.ReactNode;
    id: string;
    onViewChange: (id: string) => void;
}

const ScrollingTitle = ({ children, id, onViewChange }: ScrollingTitleProps) => {
    const ref = useRef<HTMLParagraphElement>(null);
    const isInView = useInView(ref, { margin: "-50% 0px -50% 0px"});

    useEffect(() => {
        if(isInView) {
            onViewChange(id);
        }
    }, [isInView])

    return (
        <p ref={ref} className={`py-16 font-mono text-3xl md:text-5xl trasition-colors ${isInView ? "text-black font-bold" : "text-gray-300"}`}>
            {children}
        </p>
    )
}

export default ScrollingTitle;