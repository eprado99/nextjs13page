import { Metadata } from 'next';
import Link from 'next/link'

import { getProjectBySlug, getProjects } from '@/services/projectServices';

import Icon from '@/components/UI/Icon/Icon';
import { BlockRenderer } from '@/components/Blocks/BlockRenderer/BlockRenderer';

interface ProjectPageProps {
    params: { slug: string }
}

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export const generateStaticParams = async () => {
  const posts = await getProjects();
  const projectNodes = posts?.projects?.nodes;
  return projectNodes!.map(p => ({
    slug: p.slug
  }))
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const post = await getProjects()
  const cmsPost = post?.projects?.nodes?.find(p => p.slug === params.slug);
  return { title: cmsPost?.title, description: cmsPost?.excerpt };
};

export default async function Page({ params }: ProjectPageProps) {
    const cmsProjectPost = await getProjectBySlug(params.slug);
    if(cmsProjectPost === null){
      throw new Error("Project not found");
    }

    const { title, excerpt, blocks, projectDetails, programmingLanguages, appTypes } = cmsProjectPost?.project;

    if(projectDetails.hasDetails === false){
      throw new Error("Project does not have details");
    }
    
    return (
      <div className="my-4 mx-2 md:mx-12 h-[90vh] flex font-mono">
        <div className={"bg-black rounded-lg w-[33%] h-full flex flex-col gap-4 justify-center"}>
          <div className={"flex"}>
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
                        programmingLanguages.nodes.map((language, index) => {
                            return <p key={index}>{language.name}</p>
                        })
                    }
                </div>
                <div className={"flex gap-2 text-sm text-white justify-self-start self-center"}>
                    {
                        appTypes.nodes.map((appType, index) => {
                            return <p className={"bg-black rounded-full px-2 py-1"} key={index}>{appType.name}</p>
                        })
                    }
                </div>
                <div className={"font-medium tracking-normal leading-relaxed text-left text-zinc-800"} dangerouslySetInnerHTML={{ __html: excerpt }} />
            </div>
          </div>
          <div className={"h-[40vh] w-[80%] mb-2 rounded-lg"}>
            
          </div>
        </div>
        <div className={"rounded-lg ml-[-2vh] w-[66%] border-2 bg-white border-neutral-300/60 h-[98%] self-center overflow-y-scroll"}>
          <article className={"prose lg:prose-xl mx-auto my-6"}>
            <BlockRenderer blocks={blocks} />
          </article>
        </div>
      </div>
    )
}