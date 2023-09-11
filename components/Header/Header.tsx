"use client"

import { NavItem } from "@/types"
import Link from "next/link"
import { usePathname } from "next/navigation"
import * as React from "react"

interface HeaderProps {
    items: NavItem[]
}
export function Header({items}: HeaderProps) {
    const pathname = usePathname().split("/")[1];

    
    return (
        <>
            <header className={"w-full flex justify-start items-center"}>
                <div className={"h-8 w-8 rounded-full bg-white/80 p-1 shadow-lg shadow-cyan-500/50 ring-1 ring-cyan-500/50 backdrop-blur"}></div>

                
                    {/* active bar */}
                    {/* <div className={"h-1 w-20 bg-gradient-to-r from-cyan-400 via-white-500 to-blue-500 rounded-full"}></div> */}
                    {/* inactive bar */}
                    {/* <div className={"h-1 w-20 rounded-full bg-gray-400/50"}></div> */}
                <nav className={"flex gap-1.5"}>
                    {
                        
                        items.map((item, index) => {
                            if (item.hide) return <></>
                            return (
                                <div className={`h-1 w-20 rounded-full ${pathname === item.href.split('/')[1] ? "bg-gradient-to-r from-cyan-400 via-white-500 to-blue-500" : "bg-gray-400/50" } `}>
                                    <Link
                                        key={index}
                                        href={item.disabled ? "#" : item.href}
                                        className={`text-gray-900 border-transparent whitespace-nowrap border-b-2 mt-2 py-2 px-2 text-base font-medium ${pathname === item.href.split('/')[1] && "text-indigo-600 border-indigo-600 font-bold underline underline-offset-8"}`}
                                    >
                                        {item.title}
                                    </Link>
                                </div>
                            )
                        })
                    }
                </nav>
                    

                {/* <time>
                        {new Date().toLocaleDateString('en-us', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                            weekday: 'short'
                        })}
                </time> */}
                
            </header>
        </>
    )
}