"use client"

import * as React from "react"

import Image from 'next/image'

import { AcademicCapIcon } from '@heroicons/react/24/solid'

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
          <p className="text-lg mt-4 text-slate-600 max-w-xl">
            In here you are able to find all about my latest projects and
            blogs.<wbr /> The main focus of my blogs will be about technology but I
            might slip in one or two fitness/gym blogs. Graduating June 2023 from B.S. in Computer Science & Technology <AcademicCapIcon className="inline-block w-6 h-6 text-slate-500" />
          </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">

        </div>
        </div>
    </main>
  )
}