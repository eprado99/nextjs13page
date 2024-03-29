"use client"

import Image from 'next/image'

import { AcademicCapIcon } from '@heroicons/react/24/solid'
import { RoughNotation, RoughNotationGroup } from "react-rough-notation"

export default function Hero() {
    return (
      <main className="grid mx-2 md:mx-1 lg:mx-0 md:grid-cols-2 place-items-center pt-16 pb-8 md:pt-8 h-[60vh] md:h-[70vh]">
        <div className="py-6 md:order-1 hidden md:block">
          <Image
              src="/undraw_cat_epte.svg"
              alt="A black cat"
              width={1128}
              height={502}
              priority
          />
        </div>
        <div>
          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight">
            Welcome to my personal site!
          </h1>
          <p className="text-lg mt-4 text-slate-600 max-w-xl font-kleeone leading-relaxed md:[word-spacing:0.5rem]">
          <RoughNotationGroup show={true}>
            <span>I&apos;m Emilio Prado, a </span>
            <RoughNotation iterations={1} padding={[1, 0, 1, 0]} animationDuration={500} animationDelay={1} type={"highlight"} color={"yellow"}>Software Engineer</RoughNotation>
            <span> based in </span>
            <RoughNotation iterations={1} padding={[1, 1, 0, 1]} animationDuration={500} animationDelay={1.5} type={"circle"} color={"blue"} multiline={true}>Monterrey, Mexico.</RoughNotation>
            <span> Here you&apos;ll be able to find all about my </span>
            <RoughNotation iterations={1} padding={[1, 1, 0, 1]} animationDuration={500} animationDelay={2} type={"underline"} color={"cyan"} multiline={true}>latest projects and blogs.</RoughNotation>
            <span> The main focus of my blogs will be on technology but I might slip in one or two fitness blogs. I have a </span>
            <RoughNotation iterations={1} padding={[1, 1, 0, 1]} animationDuration={500} animationDelay={4} type={"highlight"} color={"yellow"} multiline={true}>B.S. in Computer Science &amp; Technology</RoughNotation>
            <span> from </span>
            <RoughNotation iterations={1} padding={[1, 1, 0, 1]} animationDuration={500} animationDelay={4.5} type={"circle"} color={"cyan"} multiline={true}>Tec de Monterrey</RoughNotation> 
            <span> &amp; I&apos;m currently an </span>
            <RoughNotation iterations={1} padding={[1, 1, 0, 1]} animationDuration={500} animationDelay={5} type={"highlight"} color={"yellow"} multiline={true}>Applications Engineer</RoughNotation>
            <span> at </span>
            <RoughNotation iterations={1} padding={[1, 1, 0, 1]} animationDuration={500} animationDelay={5.5} type={"circle"} color={"cyan"} multiline={true}>Steelcase</RoughNotation>. 
            <AcademicCapIcon className="inline-block w-6 h-6 text-slate-500" />
            </RoughNotationGroup>
          </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">

        </div>
        </div>
    </main>
  )
}