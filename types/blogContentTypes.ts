export interface RootContent {
    data: Data
    extensions: Extensions
}
  
export interface Data {
    post: Post
}

export interface Post {
    title: string
    date: string
    blocks: Block[]
}

export interface Block {
    name: string
    originalContent: string
    attributes: Attributes
    innerBlocks: any[]
}

export interface Attributes {
    content: string
}

export interface Extensions {
    debug: Debug[]
}

export interface Debug {
    type: string
    message: string
}
