export interface RootProjectContent {
    data: ProjectData
    extensions: Extensions
}

export interface ProjectData {
    project: ProjectContent
}

export interface ProjectContent {
    id: string
    title: string
    excerpt: string
    blocks: Block[]
    projectDetails: ProjectDetails
    programmingLanguages: ProgrammingLanguages
    appTypes: AppTypes
}

export interface Block {
    name: string
    originalContent: string
    attributes: Attributes
    innerBlocks: any[]
}

export interface Attributes {
    id?: number
    sizeSlug?: string
    linkDestination?: string
    url?: string
    width?: number
    height?: number
    textAlign?: string
    level?: number
    content?: string
}

export interface ProjectDetails {
    hasDetails: boolean
    githubRepo: string
    projectGallery: any
}

export interface ProgrammingLanguages {
    nodes: Node[]
}

export interface Node {
    name: string
}

export interface AppTypes {
    nodes: Node2[]
}

export interface Node2 {
    name: string
}

export interface Extensions {
    debug: Debug[]
}

export interface Debug {
    type: string
    message: string
}
  