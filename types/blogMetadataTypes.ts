export interface RootMetadata {
    data: Data
    extensions: Extensions
}

export interface Data {
    nodeByUri: NodeByUri
}

export interface NodeByUri {
    __typename: string
    name: string
    uri: string
    isFrontPage: boolean
    contentNodes: ContentNodes
}

export interface ContentNodes {
    nodes: Node[]
}

export interface Node {
    __typename: string
    id: string
    title: string
    uri: string
    slug: string
    date: string
    excerpt: string
    featuredImage: FeaturedImage
}

export interface FeaturedImage {
    node: {
        id: string
        sourceUrl: string
    }
}
  

export interface Extensions {
    debug: Debug[]
}

export interface Debug {
    type: string
    message: string
}
  