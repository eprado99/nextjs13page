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
        <header className={"mt-4 mb-3"}>
            <nav>
                {
                    
                    items.map((item, index) => {
                        if (item.hide) return <></>
                        return (
                        <Link
                            key={index}
                            href={item.disabled ? "#" : item.href}
                            className={`text-gray-900 border-transparent flex-1 whitespace-nowrap border-b-2 mt-2 py-2 px-2 text-base font-medium ${pathname === item.href.split('/')[1] && "text-indigo-600 border-indigo-600 font-bold underline underline-offset-8"}`}
                        >
                            {item.title}
                        </Link>
                        )
                    })
                }
                <time className={"float-right"}>
                    {new Date().toLocaleDateString('en-us', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                        weekday: 'short'
                    })}
                </time>
            </nav>
            
        </header>
    )
}