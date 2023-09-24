import { RootPostSeo } from "@/types/seoMetadataTypes";

const GetPostSeoBySlugQuery = (slug: string): { query: string, variables: { id: string } } => {
    return {
        query: `query GetPostSeoBySlug($id: ID = "") {
            post(id: $id, idType: SLUG) {
                seo {
                    metaDesc
                    title
                }
            }
        }
        `,
        variables: {
            "id": slug
        },
    }
}

export const getPostSeo = async (slug: string) => {
    const res = await fetch(`${process.env.WP_GRAPHQL_URL}`, {
        method: "POST",
        body: JSON.stringify(GetPostSeoBySlugQuery(slug)),
        headers: {
          "Content-Type": "application/json",
        },
    });
    const { data }: RootPostSeo = await res.json();

    const seo = data?.post.seo;

    return seo;
}