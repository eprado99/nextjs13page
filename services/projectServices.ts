import { RootProjectContent } from "@/types/projectContentTypes";
import { Root } from "@/types/projectMetadataTypes";

const getProjectsQuery = { 
  query: `query GetProjects {
    projects {
      nodes {
        id
        title
        excerpt
        slug
        programmingLanguages {
          nodes {
            name
          }
        }
        appTypes {
          nodes {
            name
          }
        }
        projectDetails {
          hasDetails
          githubRepo
        }
      }
    }
  }`
}

const getProjectBySlugQuery = (slug: string): { query: string, variables: { id: string } } => {
  return {
    query: `query GetProjectBySlug($id: ID = "") {
      project(id: $id, idType: SLUG) {
        id
        title
        excerpt
        blocks
        projectDetails {
          hasDetails
          githubRepo
          projectGallery {
            blocks
          }
        }
        programmingLanguages {
          nodes {
            name
          }
        }
        appTypes {
          nodes {
            name
          }
        }
      }
    }`,
    variables: {
      "id": slug
    }
  }
}

export const getProjects = async () => {
    const res = await fetch(`${process.env.WP_GRAPHQL_URL}`, {
        method: "POST",
        body: JSON.stringify(getProjectsQuery),
        headers: {
          "Content-Type": "application/json",
        },
    });
    const { data }: Root = await res.json();
    console.log(data);
    if(!data) {
        return null;
    }
    return data;
}

export const getProjectBySlug = async (slug: string) => {
    const res = await fetch(`${process.env.WP_GRAPHQL_URL}`, {
        method: "POST",
        body: JSON.stringify(getProjectBySlugQuery(slug)),
        headers: {
          "Content-Type": "application/json",
        },
    });
    const { data }: RootProjectContent = await res.json();
    if(!data) {
        return null;
    }
    return data;
}