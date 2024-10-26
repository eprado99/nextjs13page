interface Sys {
  id: string;
}

interface Image {
  title: string;
  url: string;
  width: number;
  height: number;
}

interface Description {
  json: any; // Adjust this type based on the actual structure of the JSON if needed
}

export interface Project {
  sys: Sys;
  title: string;
  description: Description;
  isReady?: boolean;
  mainImage: Image;
  githubUrl: string;
  slug: string;
}

interface ProjectCollection {
  items: Project[];
}

async function fetchGraphQL(query: string, preview = false): Promise<any> {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
    }
  ).then((response) => response.json());
}

function extractProjectEntries(fetchResponse: any): Project[] {
  return fetchResponse?.data?.projectCollection?.items;
}

export async function getAllProjects(
  limit = 3,
  isDraftMode = false
): Promise<Project[]> {
  const projects = await fetchGraphQL(
    `query {
        projectCollection(order: sys_publishedAt_DESC, limit: ${limit}, preview: ${
      isDraftMode ? "true" : "false"
    }) {
          items {
            sys {
              id
            },
            title,
            description {
              json
            },
            mainImage {
              title,
              url,
              width,
              height
            },
            githubUrl,
            slug
          }
        }
      }`,
    isDraftMode
  );
  return extractProjectEntries(projects);
}

export async function getProject(
  id: string,
  isDraftMode = false
): Promise<Project | null> {
  const project = await fetchGraphQL(
    `query {
        project(id: "${id}", preview: ${
      isDraftMode ? "true" : "false"
    }) {
          sys {
            id
          },
          title,
          description {
            json
          },
          isReady,
          mainImage {
            title,
            url,
            width,
            height
          },
          githubUrl,
          slug
        }
      }`,
    isDraftMode
  );
  return project?.data?.project ?? null;
}