export type NavItem = {
    title: string
    href: string
    disabled?: boolean
    hide?: boolean
}

export type WorkExperience = {
    role: string
    company: string
    location: string
    startDate: Date
    endDate: Date
    description: string
}

export type SvgItem = {
    fileName: string
    altText: string
}

export type MdxProjectMetadata = {
    title: string
    description: string
    slug: string
    githubLink?: string
}

export type SvgItemArray = {
    svgItemArray: SvgItem[]
}
export type WorkExperienceArr = {
    workExperienceArr: WorkExperience[]
}

export type DefaultConfig = {
    navBar: NavItem[]
}

