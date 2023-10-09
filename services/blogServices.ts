import { RootContent } from "@/types/blogContentTypes";
import { RootMetadata } from "@/types/blogMetadataTypes";

const GetPostsByUriQuery = {
    query: `query GetPostsByUri($uri: String!) {
      nodeByUri(uri: $uri) {
        __typename
        ... on ContentType {
          name
          uri
          isFrontPage
          contentNodes {
            nodes {
              __typename
              ... on Post {
                id
                title
                slug
                date
                excerpt
                featuredImage {
                  node {
                    id
                    sourceUrl(size: MEDIUM)
                  }
                }
                tags {
                  nodes {
                    id
                    name
                  }
                }
              }
            }
          }
        }
      }
    }
    `,
    variables: {
      "uri": "/"
    },
}

const GetPostBySlugQuery = (slug: string): { query: string, variables: { id: string } } => {
    return {
        query: `query GetPostBySlug($id: ID = "") {
                post(id: $id, idType: SLUG) {
                    title
                    date
                    blocks
                }
            }
        `,
        variables: {
            "id": slug
        }
    }
}

export const getBlogMetadata = async () => {
    const res = await fetch(`${process.env.WP_GRAPHQL_URL}`, {
        method: "POST",
        body: JSON.stringify(GetPostsByUriQuery),
        headers: {
          "Content-Type": "application/json",
        },
    });
    const { data }: RootMetadata = await res.json();

    const posts = data.nodeByUri.contentNodes.nodes;

    return posts;
}

export const getBlogPost = async (slug: string) => {
    const res = await fetch(`${process.env.WP_GRAPHQL_URL}`, {
        method: "POST",
        body: JSON.stringify(GetPostBySlugQuery(slug)),
        headers: {
          "Content-Type": "application/json",
        },
    });
    const { data }: RootContent = await res.json();
    if(!data) {
        return null;
    }
    return data;
}