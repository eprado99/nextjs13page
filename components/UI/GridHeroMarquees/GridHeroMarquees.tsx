"use client"

import { useEffect } from "react";

const GridHeroMarquees = () => {
    useEffect(() => {
        let scrollers: NodeListOf<HTMLElement>;
        if (typeof window !== 'undefined') {
            scrollers = document.querySelectorAll('.scroller');
        }
        if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches){
            addAnimation();
        }

        function addAnimation() {
            scrollers.forEach((scroller) => {
                scroller.setAttribute('data-animated', 'true')
                const scrollerInner = scroller.querySelector('.scroller__inner');
                const scrollerInnerHtml = Array.from(scrollerInner!.children);

                scrollerInnerHtml.forEach(item => {
                    const duplicatedItem = item.cloneNode(true) as HTMLElement;
                    duplicatedItem.setAttribute('aria-hidden', 'true');
                    scrollerInner?.append(duplicatedItem);
                })
            });
        }
    }, [])

    return (
        <div className="scroller">
            <ul className="services-list scroller__inner">
                <li>Web Development</li>
                <li>CMS</li>
                <li>Backend Development</li>
                <li>Service Integration</li>
            </ul>
        </div>
    )
}

export default GridHeroMarquees;