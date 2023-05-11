import Hero from '@/components/Hero/Hero'
import Timeline from '@/components/Timeline/Timeline'
import { workExperienceData } from '@/config/workExperience'

export default function Home() {
  return (
    <>
      <Hero />
      <Timeline work={workExperienceData.workExperienceArr}/>
    </>
  )
}
