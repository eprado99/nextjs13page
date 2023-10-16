import Hero from '@/components/Hero/Hero'
import ScrollingTechCards from '@/components/Technologies/ScrollingTechCards'
// import Timeline from '@/components/Timeline/Timeline'
import HorizontalScrollSection from '@/components/VerticalToHorizontal/HorizontalScrollSection'
import Footer from '@/components/Footer/Footer'
import { workExperienceData } from '@/config/workExperience'
import { programmingLanguagesSvg, frameworksSvg, cloudSvg } from '@/config/svgItems'
// import BlogList from '@/components/ServerComponents/BlogList'
import HorizontalTimeline from '@/components/Timeline/HorizontalTimeline'
// import GridHero from '@/components/Hero/GridHero'
import ProjectList from '@/components/ServerComponents/ProjectList'

export default async function Home() {
  return (
    <>
      {/* <GridHero /> */}
      <Hero />
      <HorizontalTimeline work={workExperienceData.workExperienceArr}/>
      <ScrollingTechCards programmingSvgItems={programmingLanguagesSvg.svgItemArray} frameworkSvgItems={frameworksSvg.svgItemArray} cloudSvgItems={cloudSvg.svgItemArray}/>
      {/* <HorizontalScrollSection> */}
        {/* {<ProjectList />} */}
      {/* </HorizontalScrollSection> */}
      {/* @ts-expect-error Server Component */}
      <ProjectList classNames={'expanded-container bg-black h-[100vh] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6 justify-center items-center px-10'}/>
      {/* <Footer /> */}
    </>
  )
}
