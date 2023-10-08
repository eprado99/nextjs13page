import cloudinaryLoader from '@/utils/cloudinaryLoader';
import { AcademicCapIcon } from '@heroicons/react/24/solid'
import Image from 'next/image';
import { RoughNotation, RoughNotationGroup } from "react-rough-notation"
import GridHeroMarquees from '../UI/GridHeroMarquees/GridHeroMarquees';
import Icon from '../UI/Icon/Icon';

const GridHero = () => {

    {/* To make image responsive, pass width as needed to cloudinary, assign relative to parent element, add fill property to Image and style with w-full and h-auto */}


    return (
        <div className="h-[100vh] grid grid-cols-4 md:grid-cols-5 grid-rows-6 gap-3 mt-4 mb-2">
            <div className="border-2 border-black order-1 col-span-4 md:order-none md:col-span-3 row-span-1 md:row-span-2 rounded-lg">
                <h1 className="text-5xl lg:text-6xl xl:text-6xl 2xl:text-8xl font-bold lg:tracking-tight">
                    Welcome to my personal site!
                </h1>
            </div>
            <div className="border-2 border-black order-3 md:order-none rounded-lg relative">
                <Image 
                    fill 
                    src={cloudinaryLoader("portfolio/Mia/GracefulMia", 240, 100, false)} 
                    alt="A cat named Mia lying down with her arms crossed in front of her." 
                    className={"w-full h-auto object-cover rounded-lg"}
                />
            </div>
            
            <div className="border-2 border-black text-sm md:text-xl 2xl:text-2xl order-5 md:order-none rounded-lg font-kleeone skew-y-6">She&#39;s playful, loving and a heavy eater.</div>
            {/* <div className="hidden md:block border-2 border-black row-span-3 rounded-lg relative">
                <Image 
                    fill
                    src={cloudinaryLoader("portfolio/Mia/MiaWalking", 240, 100, false)} 
                    className={"w-full h-auto rounded-lg"}
                    alt={'A cat named Mia is walking on the chest of the owner, who is lying down.'} 
                />
            </div> */}
            <div className="border-2 border-black text-sm md:text-xl 2xl:text-2xl order-4 md:order-none rounded-lg font-kleeone -skew-y-6">Her Name is Mia!</div>
            <div className="border-2 border-black order-6 md:order-none rounded-lg relative">                
                <Image fill src={cloudinaryLoader("portfolio/Mia/lh9ahn7lnpfcvghpv1mm", 240, 100, false)} alt="A cat named Mia lying down with her arms crossed in front of her." className={"w-full h-auto object-cover rounded-lg"}/>
            </div>
            <div className="border-2 border-black order-2 col-span-4 md:col-span-3 md:order-none row-span-2 rounded-lg">
                <p className="text-sm text-justify md:text-md lg:text-lg xl:text-lg 2xl:text-2xl mx-auto md:mx-1 text-slate-600 max-w-2xl font-kleeone leading-relaxed md:[word-spacing:0.2rem]">
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
            </div>
            <div className={"border-2 border-black hidden md:block  rounded-lg md:col-span-2 row-span-2 relative"}>
                <Image
                    src="/undraw_cat_epte.svg"
                    alt="A black cat"
                    fill
                    priority
                    className={"w-full h-auto object-cover rounded-lg"}
                />
            </div>
            {/* <div className="hidden md:block border-2 border-black rounded-lg">8 link to more about me? (Hidden on Mobile)</div> */}
            
            <div className="border-2 border-black order-7 md:order-none col-span-4 md:col-span-3 rounded-lg flex items-center justify-center">
                <GridHeroMarquees>
                    <li>Web Development</li>
                    <li>CMS</li>
                    <li>Backend Development</li>
                    <li>AI Integration</li>
                    <li>SEO</li>
                </GridHeroMarquees>
            </div>
            <div className="border-2 border-black order-9 md:order-none row-span-2 rounded-lg relative">
                {/* To make image responsive, pass width as needed to cloudinary, assign relative to parent element, add fill property to Image and style with w-full and h-auto */}
                <Image 
                    fill
                    src={cloudinaryLoader("portfolio/Mia/MiaWalking", 240, 100, false)} 
                    className={"w-full h-auto rounded-lg"}
                    alt={'A cat named Mia is walking on the chest of the owner, who is lying down.'} 
                />
            </div>

            {/* md:grid md:grid-rows-2 md:grid-cols-4 */}
            <div className="hidden order-10 md:order-none bg-black rounded-lg relative">
                {/* row-start-1 row-end-3 col-start-1 col-end-4 */}
                <div className={"rounded-lg about-info text-white m-2"}>Learn more about me!</div>
                <div className={"rounded-lg about-empty"}></div>
                <div className={"about-button bg-white col-start-4 col-end-5 row-start-1 row-end-2 flex items-center justify-center"} style={{ boxShadow: "0 -0.3rem 0 white, 0.3rem 0 0 white"}}>
                    <div className={"rounded-full bg-black w-10 h-10 2xl:w-12 2xl:h-12 flex items-center justify-center"}>
                        {/* @ts-expect-error Server Component */}
                        <Icon name={"north_east"} width={24} style={{ fill: "white"}} />
                    </div>
                </div>
            </div>

            <div className="border-2 border-black order-8 md:order-none col-span-4 md:col-span-3 rounded-lg flex items-center justify-center">
                <GridHeroMarquees>

                    <li>Business Analysis</li>
                    <li>Project Management</li>
                    <li>Software Development</li>
                    <li>Responsive Design</li>
                    <li>UI/UX</li>
                </GridHeroMarquees>
            </div>
            
            {/* md:grid md:grid-rows-2 md:grid-cols-4 */}
            <div className="about col-span-2 md:col-span-1 order-11 md:order-none bg-black rounded-lg relative">
                {/* row-start-1 row-end-3 col-start-1 col-end-4 */}
                <div className={"rounded-lg about-info text-white m-2"}>Learn more about me!</div>
                <div className={"rounded-lg about-empty"}></div>
                <div className={"about-button bg-white col-start-4 col-end-5 row-start-1 row-end-2 flex items-center justify-center"} style={{ boxShadow: "0 -0.3rem 0 white, 0.3rem 0 0 white"}}>
                    <div className={"rounded-full bg-black w-10 h-10 2xl:w-12 2xl:h-12 flex items-center justify-center"}>
                        {/* @ts-expect-error Server Component */}
                        <Icon name={"north_east"} width={24} style={{ fill: "white"}} />
                    </div>
                </div>

            </div>

        </div>
            
    )
}

export default GridHero;