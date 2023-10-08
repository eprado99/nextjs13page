"use client"

import * as React from "react"

import { NavItem } from "@/types"

import Link from "next/link"
import { usePathname } from "next/navigation"

import Image from "next/image"
import cloudinaryLoader from "@/utils/cloudinaryLoader"

interface HeaderProps {
    items: NavItem[]
}

export function Header({items}: HeaderProps) {

    const pathname = usePathname().split("/")[1].trim();

    return (
        <>
            <header className={"w-full flex justify-between items-center"}>
                <Image width={100} height={100} src={cloudinaryLoader("portfolio/Mia/gjwys4bgjtsqtn21rorb", 100, 80, false)} alt={"Image of the owner of this website"} className={"h-8 w-8 rounded-full bg-white/80 p-1 shadow-lg shadow-cyan-500/50 ring-1 ring-cyan-500/50 backdrop-blur object-cover"}/>


                
                    {/* active bar */}
                    {/* <div className={"h-1 w-20 bg-gradient-to-r from-cyan-400 via-white-500 to-blue-500 rounded-full"}></div> */}
                    {/* inactive bar */}
                    {/* <div className={"h-1 w-20 rounded-full bg-gray-400/50"}></div> */}
                    {/* <div className={`h-1 w-20 rounded-full ${pathname === item.href.split('/')[1] ? "bg-gradient-to-r from-cyan-400 via-white-500 to-blue-500" : "bg-gray-400/50" } `}> */}

                <nav className={"flex justify-center gap-1.5 rounded-full border-2 bg-neutral-100/60 h-[50%] px-3"}>
                
                
                    {
                        
                        items.map((item, index) => {
                            if (item.hide) return <></>
                            return (
                                    <div className={"group relative"} key={index}>
                                        <span
                                            className={`absolute transition -bottom-px 
                                                inset-x-0 h-px bg-gradient-to-r from-sky-500/0 via-sky-500/70 to-sky-500/0 
                                                ${pathname === item.href.split('/')[1].trim() ? "opacity-100" : "opacity-0"} 
                                                group-hover:opacity-100`
                                            }
    ></span>
                                    
                                        <Link
                                            
                                            href={item.disabled ? "#" : item.href}
                                            className={`border-transparent whitespace-nowrap border-b-2 px-3 ${pathname === item.href.split('/')[1].trim() ? "font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white-500 to-blue-500" : "text-gray-900 text-base font-medium"} hover:font-bold hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-400 hover:via-white-500 hover:to-blue-500`}
                                        >
                                                
                                            {item.title}
                                        </Link>
                                    </div>
                            )
                        })
                    }
                </nav>

                <div className={"h-8 w-8 p-1"}></div>
                
            </header>
        </>
    )
}