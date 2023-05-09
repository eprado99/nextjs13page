"use client"

import { NavItem } from "@/types"
import Link from "next/link"
import * as React from "react"

interface HeaderProps {
    items: NavItem[]
}
export function Header({items}: HeaderProps) {
    return (
        <div>
        {
            items.map((item, index) => (
                <Link
                    key={index}
                    href={item.disabled ? "#" : item.href}
                >
                    {item.title}
                </Link>
            ))
        }
        </div>
    )
}