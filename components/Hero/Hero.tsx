"use client"

import * as React from "react"

import Image from 'next/image'

import { AcademicCapIcon } from '@heroicons/react/24/solid'
import { RoughNotation, RoughNotationGroup } from "react-rough-notation"
import { Source_Sans_3 } from "next/font/google"

export default function Hero() {
    return (
      <main className="grid mx-2 md:mx-1 lg:mx-0 md:grid-cols-2 place-items-center pt-16 pb-8 md:pt-8">
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
            Welcome to my blog/portfolio site.
          </h1>
          <p className="text-lg mt-4 text-slate-600 max-w-xl font-kleeone">
            <RoughNotationGroup show={true}>
              I'm Emilio Prado, a 
              <RoughNotation padding={[1, 1, 0, 1]} animationDuration={500} animationDelay={1} type="highlight" color={"yellow"}> Software Engineer </RoughNotation>
              based in 
              <RoughNotation padding={[1, 1, 0, 1]} animationDuration={500} animationDelay={1.5} type="circle" color={"blue"} iterations={3}> Monterrey, Mexico. </RoughNotation>
              Here you'll be able to find all about my 
              <RoughNotation padding={[1, 1, 0, 1]} animationDuration={500} animationDelay={2} type="underline" color={"cyan"} multiline={true}> latest projects and blogs. </RoughNotation>
              The main focus of my blogs will be on technology but I might slip in one or two fitness/gym blogs. 
              I have a
              <RoughNotation padding={[1, 1, 0, 1]} animationDuration={500} animationDelay={4} type="highlight" color={"yellow"} multiline={true}> B.S. in Computer Science & Technology </RoughNotation>
              from
              <RoughNotation padding={[1, 1, 0, 1]} animationDuration={500} animationDelay={4.5} type="circle" color={"cyan"}> Tec de Monterrey </RoughNotation> 
              & I'm currently an 
              <RoughNotation padding={[1, 1, 0, 1]} animationDuration={500} animationDelay={5} type="highlight" color={"yellow"} multiline={true}> Applications Engineer </RoughNotation>at
              <RoughNotation padding={[1, 1, 0, 1]} animationDuration={500} animationDelay={5.5} type="circle" color={"cyan"}> Steelcase</RoughNotation>. 
              <AcademicCapIcon className="inline-block w-6 h-6 text-slate-500" />
            </RoughNotationGroup>
          </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">

        </div>
        </div>
    </main>
  )
}