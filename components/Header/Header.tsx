"use client"

import { NavItem } from "@/types"
import Link from "next/link"
import { usePathname } from "next/navigation"
import * as React from "react"
// import { CircleImage } from "./CircleImage/CircleImage"
// import { MobileHeader } from "./MobileHeader"
// import { useBreakpoint } from "@/hooks/useBreakpoint"
interface HeaderProps {
    items: NavItem[]
}
export function Header({items}: HeaderProps) {
    const pathname = usePathname().split("/")[1];

    // const { isAboveSm, isBelowSm, sm } = useBreakpoint("sm");

    // React.useEffect(() => {
    //     console.log({ isAboveSm, isBelowSm, sm });
    // });
    // Might be needed later for the breakpoint error.
    // const [isBwSm, setIsBwSm] = React.useState<boolean>(false);

    // React.useLayoutEffect(() => {
    //     setIsBwSm(isBelowSm);
    // }, [isBelowSm]);

    return (
        <>
            {/* {isBelowSm && <MobileHeader items={items} />} */}
            <header className={"w-full flex justify-around items-center"}>
                <div className={"h-8 w-8 rounded-full bg-white/80 p-1 shadow-lg shadow-cyan-500/50 ring-1 ring-cyan-500/50 backdrop-blur"}></div>

                <nav>
                    {/* instagram progressbar, make it inactive without the gradient*/}
                    <div className={"h-1 w-20 bg-gradient-to-r from-cyan-400 via-white-500 to-blue-500 rounded-full"}></div>
                    <div className={"h-1 w-20 rounded-full bg-gray-400/50"}></div>
                        
                    {
                        
                        items.map((item, index) => {
                            if (item.hide) return <></>
                            return (
                                <Link
                                    key={index}
                                    href={item.disabled ? "#" : item.href}
                                    className={`text-gray-900 border-transparent whitespace-nowrap border-b-2 mt-2 py-2 px-2 text-base font-medium ${pathname === item.href.split('/')[1] && "text-indigo-600 border-indigo-600 font-bold underline underline-offset-8"}`}
                                >
                                    {item.title}
                                </Link>
                            )
                        })
                    }
                    
                </nav>
                <time>
                        {new Date().toLocaleDateString('en-us', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                            weekday: 'short'
                        })}
                </time>
                
            </header>
        </>
    )
}