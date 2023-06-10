import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { MdxProjectMetadata } from "@/types"

const rootDirectory = path.join(process.cwd(), 'content')

// Pass the folder name as a parameter without / suffix
export const getPostMetadata = (folderName: string) : MdxProjectMetadata[] => {
    const filePath = path.join(rootDirectory, folderName)
    const files = fs.readdirSync(path.normalize(filePath))
    const mdxPosts = files.filter(f => f.endsWith(".mdx"))
    
    const posts = mdxPosts.map(fileName => {
        const fileContent = fs.readFileSync(`${filePath}/${fileName}`)
        const frontMatter = matter(fileContent)
        return {
            title: frontMatter.data.title,
            description: frontMatter.data.description,
            slug: fileName.replace(".mdx", ""),
            githubLink: frontMatter.data.githubLink
        }
    })
    return posts
}

// export const getRemoteMdx = async (folderName:string, slug: string) => {
//     const filePath = path.join(rootDirectory, folderName, `${slug}.mdx`)
//     const source = fs.readFileSync(filePath, "utf8")
//     const { content } = await compileMDX({
//         source: source
//     })
//     return content
// }

export const getPostContent = (folderName:string, slug: string) => {
    const filePath = path.join(rootDirectory, folderName, `${slug}.mdx`)
    const content = fs.readFileSync(filePath, "utf8")
    return matter(content).content
}