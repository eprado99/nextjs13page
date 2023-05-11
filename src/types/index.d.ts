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

export type WorkExperienceArr = {
    workExperienceArr: WorkExperience[]
}

export type DefaultConfig = {
    navBar: NavItem[]
}