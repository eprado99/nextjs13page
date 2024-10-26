import { Metadata } from 'next';
import Link from 'next/link'

import { getAllProjects, getProject, Project } from '@/services/projectServices';

import Icon from '@/components/UI/Icon/Icon';
import { notFound } from 'next/navigation';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

interface ProjectPageProps {
    params: { slug: string }
}

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export const revalidate = 14400 // 4 hours

export async function generateStaticParams() {
  const allProjects = await getAllProjects();

  return allProjects.map((project: Project) => ({
    slug: project.slug,
  }));
}

// export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
//   const post = await getProjects()
//   const cmsPost = post?.projects?.nodes?.find(p => p.slug === params.slug);
//   return { title: cmsPost?.title, description: cmsPost?.excerpt };
// };

export default async function Page({ params }: ProjectPageProps) {
    const cmsProjectPost = await getProject(params.slug);
    if(cmsProjectPost === null){
      notFound();
    }

    const { title, description, githubUrl, mainImage, isReady } = cmsProjectPost;

    if(cmsProjectPost.isReady === false){
      notFound();
    }
    
    return (
      <div className="my-4 mx-2 md:mx-12 h-[90vh] lg:flex font-mono">
        <div className={"bg-black rounded-lg lg:w-[33%] h-[70vh] lg:h-full flex flex-col gap-4 justify-center"}>
          <div className={"flex mt-2 lg:mt-0"}>
            <Link href={"/project"} className={"ml-2 place-self-start self-start flex gap-2 p-3 text-white text-center md:bg-transparent rounded-3xl border-2 border-white"}>
                {/* @ts-expect-error Server Component */}
                <Icon name="arrow_back" width={24} style={{ sm: { fill: "black" }, fill: "white"}}/>
                <span className={"flex items-center justify-center"}>Go back</span>
            </Link>
          </div>
          <div className={"h-[30vh] grid grid-cols-2 grid-rows-6 w-[80%] mt-1 border-2 bg-white border-neutral-300/60 rounded-lg ml-[-2vh]"}>
            <div className={"col-span-2 p-2 space-y-0.5"}>
              <h1 className={"text-[2.5rem] font-bold leading-[3rem] tracking-tight text-black"}>{title}</h1>
                <div className={"flex gap-2 text-sm text-gray-500 justify-self-start self-center"}>
                    {
                        /*
                        programmingLanguages.nodes.map((language, index) => {
                            return <p key={index}>{language.name}</p>
                        })
                        */
                    }
                </div>
                <div className={"flex gap-2 text-sm text-white justify-self-start self-center"}>
                    {
                        /*
                        appTypes.nodes.map((appType, index) => {
                            return <p className={"bg-black rounded-full px-2 py-1"} key={index}>{appType.name}</p>
                        })
                        */
                    }
                </div>
                <div className={"font-medium tracking-normal leading-relaxed text-left text-zinc-800"} dangerouslySetInnerHTML={{ __html: "WIP" }} />
            </div>
          </div>
          <div className={"h-[40vh] w-[80%] mb-2 rounded-lg"}>
            
          </div>
        </div>
        <div className={"rounded-lg mt-[-4vh] w-[98%] mx-auto lg:mx-0 lg:ml-[-2vh] lg:mt-0 lg:w-[66%] border-2 bg-white border-neutral-300/60 h-[98%] self-center overflow-y-scroll"}>
          <article className={"prose lg:prose-xl mx-auto my-6"}>
            {documentToReactComponents(description.json)}
          </article>
        </div>
      </div>
    )
}