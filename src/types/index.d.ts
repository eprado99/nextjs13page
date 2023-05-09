export type NavItem = {
    title: string
    href: string
    disabled?: boolean
    show?: boolean
}

export type DefaultConfig = {
    navBar: NavItem[]
}