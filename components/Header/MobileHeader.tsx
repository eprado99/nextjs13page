import { NavItem } from "@/types";

interface HeaderProps {
    items: NavItem[]
}

export function MobileHeader({items}: HeaderProps) {
    return (
        <>
            <header className={"mt-4 mb-3"}>
                <nav className={"flex"}>
                    {
                        items.map((item, index) => {
                            if (item.hide) return <></>
                            return (
                                
                                <span key={index} className={"red"} >{item.title}</span>   
                                
                            )
                        })
                    }
                </nav>
            </header>
        </>
    )
}