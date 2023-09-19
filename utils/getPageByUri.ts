import { block_preprocessor } from "./block_preprocessor";

export const getPageByUri = async (uri: string) => {

  const blogParams = {
    query: `query GetNodeByUri($uri: String!) {
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
                uri
                slug
                date
                blocks
              }
            }
          }
        }
      }
    } 
    `,
    variables: {
      uri,
    },
  }

  const response = await fetch(`${process.env.WP_GRAPHQL_URL}`, {
    method: "POST",
    body: JSON.stringify({
      query: `query GetNodeByUri($uri: String!) {
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
                  uri
                  slug
                  date
                  blocks
                }
              }
            }
          }
        }
      } 
      `,
      variables: {
        uri,
      },
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(response.json())
  const { data } = await response.json();

  if(!data.nodeByUri) return null;

  const blocks = block_preprocessor(data.nodeByUri.blocks);
  return {
    title: data.nodeByUri.title,
    blocks,
  };
};