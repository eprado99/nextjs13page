"use client";

import { useState } from "react";
import { FifthCard, FirstCard, FourthCard, SecondCard, ThirdCard } from "./ScrollingCard";
import ScrollingTitle from "./ScrollingTitle";

const data = [
    {
        title: "First text",
        id: "first-text",
        card: FirstCard
    },
    {
        title: "Second text",
        id: "second-text",
        card: SecondCard
    },
    {
        title: "Third text",
        id: "third-text",
        card: ThirdCard
    },
    {
        title: "Fourth text",
        id: "fourth-text",
        card: FourthCard
    },
    {
        title: "Fifth text",
        id: "fifth-text",
        card: FifthCard
    }
]

const ScrollingAnimation = () => {

    const [currentId, setCurrentId] = useState("");

    return (
        <div className="flex w-full items-start gap-10 md:gap-20">
            
            <div className="w-full py-[40vh]">
                <h2 className={"font-bold text-3xl"}>Uses</h2>
                <ul>
                    {
                        data.map((item) => {
                            return <ScrollingTitle key={item.id} id={item.id} onViewChange={setCurrentId}> {item.title} </ScrollingTitle>
                        })
                    }
                </ul>
            </div>
            <div className="sticky top-0 flex h-screen w-full items-center">
                <div className="relative aspect-square h-[25%] md:h-[45%] rounded-2xl bg-gray-100">
                    {
                        data.map((item) => {
                            return <item.card key={item.id} id={item.id} currentId={currentId}/>
                        })
                    }
                </div>
            </div>
        </div>
    )
};

export default ScrollingAnimation;