export interface RootPostSeo {
    data: SeoData
    extensions: Extensions
}

export interface SeoData {
    post: Post
}

export interface Post {
    seo: Seo
}

export interface Seo {
    metaDesc: string
    title: string
}

export interface Extensions {
    debug: Debug[]
}

export interface Debug {
    type: string
    message: string
}
