import Hero from '@/components/Hero/Hero'
import ScrollingTechCards from '@/components/Technologies/ScrollingTechCards'
import Timeline from '@/components/Timeline/Timeline'
import HorizontalScrollSection from '@/components/VerticalToHorizontal/HorizontalScrollSection'
import Footer from '@/components/Footer/Footer'
import { workExperienceData } from '@/config/workExperience'
import { programmingLanguagesSvg, frameworksSvg, cloudSvg } from '@/config/svgItems'
import BlogList from '@/components/ServerComponents/BlogList'

export default async function Home() {
  return (
    <>
      <Hero />
      <Timeline work={workExperienceData.workExperienceArr}/>
      <ScrollingTechCards programmingSvgItems={programmingLanguagesSvg.svgItemArray} frameworkSvgItems={frameworksSvg.svgItemArray} cloudSvgItems={cloudSvg.svgItemArray}/>
      <HorizontalScrollSection>
        {/* @ts-expect-error Server Component */}
        {<BlogList />}
      </HorizontalScrollSection>
      <Footer />
    </>
  )
}
