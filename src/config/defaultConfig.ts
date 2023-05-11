import { DefaultConfig } from "@/types";

export const defaultConfig: DefaultConfig = {
    navBar: [
        {
            title: "Home",
            href: "/",
        },
        {
            title: "Projects",
            href: "/project",
            disabled: true,
            hide: true
        }
    ]
}