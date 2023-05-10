"use client"

import { NavItem } from "@/types"
import Link from "next/link"
import { usePathname } from "next/navigation"
import * as React from "react"

interface HeaderProps {
    items: NavItem[]
}
export function Header({items}: HeaderProps) {
    const pathname = usePathname();
    return (
        <header className={"mt-4"}>
            <nav>
            {
                
                items.map((item, index) => {
                    const isActive = pathname.startsWith(item.href)
                    
                    return (
                    <Link
                        key={index}
                        href={item.disabled ? "#" : item.href}
                        className={`text-gray-900 border-transparent flex-1 whitespace-nowrap border-b-2 py-2 px-1 text-base font-medium ${isActive && "text-indigo-600 border-indigo-600"}`}
                    >
                        {item.title}
                    </Link>
                    )
                })
            }
            </nav>
        </header>
    )
}