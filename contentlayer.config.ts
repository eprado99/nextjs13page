import { defineDocumentType, makeSource } from '@contentlayer/source-files'
import { rehypeoptions } from './utils/rehypeoptions'
import rehypePrettyCode from "rehype-pretty-code";


export const ProjectPost = defineDocumentType(() => ({
  name: 'ProjectPost',
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    githubLink: { type: 'string', required: true },
    authors: { type: 'string', required: true },
  },
  computedFields: {
    url: { type: 'string', resolve: (post) => `/project/${post._raw.flattenedPath}` },
  },
}))

export default makeSource({ contentDirPath: 'content/projects', documentTypes: [ProjectPost], mdx: { rehypePlugins: [[rehypePrettyCode, rehypeoptions]]}})