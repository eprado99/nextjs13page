import { AcademicCapIcon } from '@heroicons/react/24/solid'
import { RoughNotation, RoughNotationGroup } from "react-rough-notation"

const GridHero = () => {
    return (
        <div className="h-[90vh] grid grid-cols-4 md:grid-cols-6 grid-rows-6 gap-3 mt-4 mb-2">
            <div className="border-2 border-black order-3 md:order-none rounded-lg">1 image 1, 5, 3 and 6 together on mobile under 2 and 7 [Order 3]</div>
            <div className="border-2 border-black order-1 col-span-4 md:order-none md:col-span-3 row-span-1 md:row-span-2 rounded-lg">
                <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight">
                    Welcome to my personal site!
                </h1>
            </div>
            <div className="border-2 border-black order-5 md:order-none rounded-lg">3 text [Order 5]</div>
            <div className="hidden md:block border-2 border-black row-span-3 rounded-lg">4 could be latest project or post, even a long vertical image (Hidden on Mobile)</div>
            <div className="border-2 border-black order-4 md:order-none rounded-lg">5 text [Order 4]</div>
            <div className="border-2 border-black order-6 md:order-none rounded-lg">6 image [Order 6]</div>
            <div className="border-2 border-black order-2 col-span-4 md:col-span-5 md:order-none row-span-2 rounded-lg">
                <p className="text-sm md:text-md lg:text-lg mx-auto md:mx-1 mt-4 text-slate-600 max-w-xl font-kleeone leading-relaxed md:[word-spacing:0.5rem]">
                    <RoughNotationGroup show={true}>
                        I&apos;m Emilio Prado, a 
                        <RoughNotation iterations={1} padding={[1, 0, 1, 0]} animationDuration={500} animationDelay={1} type={"highlight"} color={"yellow"}> Software Engineer </RoughNotation>
                        based in 
                        <RoughNotation iterations={1} padding={[1, 1, 0, 1]} animationDuration={500} animationDelay={1.5} type={"circle"} color={"blue"} multiline={true}> Monterrey, Mexico. </RoughNotation>
                        Here you&apos;ll be able to find all about my 
                        <RoughNotation iterations={1} padding={[1, 1, 0, 1]} animationDuration={500} animationDelay={2} type={"underline"} color={"cyan"} multiline={true}> latest projects and blogs. </RoughNotation>
                        The main focus of my blogs will be on technology but I might slip in one or two fitness/gym blogs. 
                        I have a
                        <RoughNotation iterations={1} padding={[1, 1, 0, 1]} animationDuration={500} animationDelay={4} type={"highlight"} color={"yellow"} multiline={true}> B.S. in Computer Science &amp; Technology </RoughNotation>
                        from
                        <RoughNotation iterations={1} padding={[1, 1, 0, 1]} animationDuration={500} animationDelay={4.5} type={"circle"} color={"cyan"} multiline={true}> Tec de Monterrey </RoughNotation> 
                        &amp; I&apos;m currently an 
                        <RoughNotation iterations={1} padding={[1, 1, 0, 1]} animationDuration={500} animationDelay={5} type={"highlight"} color={"yellow"} multiline={true}> Applications Engineer </RoughNotation>at
                        <RoughNotation iterations={1} padding={[1, 1, 0, 1]} animationDuration={500} animationDelay={5.5} type={"circle"} color={"cyan"}> Steelcase</RoughNotation>. 
                        <AcademicCapIcon className="inline-block w-6 h-6 text-slate-500" />
                    </RoughNotationGroup>
                </p>
            </div>
            <div className="hidden md:block border-2 border-black rounded-lg">8 link to more about me? (Hidden on Mobile)</div>
            <div className="border-2 border-black order-7 md:order-none col-span-4 md:col-span-5 rounded-lg">9 join with 11? second marquee [Order 7]</div>
            <div className="hidden md:block border-2 border-black rounded-lg">10 explore adding a real time spotify widget or ig widget? (Hidden on Mobile)</div>
            <div className="border-2 border-black order-8 md:order-none col-span-4 md:col-span-6 rounded-lg">11 marquee here [Order 8]</div>
        </div>
    )
}

export default GridHero;