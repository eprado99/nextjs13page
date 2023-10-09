export interface Root {
    data: Data
    extensions: Extensions
}

export interface Data {
    projects: Projects
}

export interface Projects {
    nodes: Node[]
}

export interface Node {
    id: string
    title: string
    excerpt: string
    slug: string
    programmingLanguages: ProgrammingLanguages
    appTypes: AppTypes
    projectDetails: ProjectDetails
}

export interface ProgrammingLanguages {
    nodes: Node2[]
}

export interface Node2 {
    name: string
}

export interface AppTypes {
    nodes: Node3[]
}

export interface Node3 {
    name: string
}

export interface ProjectDetails {
    hasDetails: boolean
    githubRepo: string
}

export interface Extensions {
    debug: Debug[]
}

export interface Debug {
    type: string
    message: string
}
  