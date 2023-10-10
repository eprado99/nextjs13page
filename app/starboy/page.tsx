import cloudinaryLoader from "@/utils/cloudinaryLoader";
import Image from "next/image";

export default function Page() {
    return (
        <div className={"h-screen space-y-4 my-2"}>
            <h1 className={"text-5xl font-bold text-center"}>Felicidades Starboy</h1>
            <div className="grid grid-cols-4 grid-rows-8 gap-4 h-full">
                <div className="row-span-4 relative">
                    <Image src={cloudinaryLoader("starboy/9AB00BA0-CDE8-4C34-99FC-C3FC75030AFC_l3ovuf.jpg", 600, 80, false)} alt={"A picture of Mike & Prado"} fill className={"w-full h-auto object-cover rounded-lg"} />
                </div>
                <div className="row-span-4 col-start-1 row-start-5 relative">
                    <Image src={cloudinaryLoader("starboy/IMG_2643_jlfmad.jpg", 600, 80, false)} alt={"A picture of Mike & Prado"} fill className={"w-full h-auto object-cover rounded-lg"} />
                </div>
                <div className="col-span-2 row-span-3 col-start-2 row-start-1 relative">
                    <Image src={cloudinaryLoader("starboy/IMG_1425_sh95il.jpg", 600, 80, false)} alt={"A picture of Mike & Prado"} fill className={"w-full h-auto object-cover rounded-lg"} />
                </div>
                <div className="row-span-4 col-start-4 row-start-1 relative">
                    <Image src={cloudinaryLoader("starboy/IMG_1315_j1m7ga.jpg", 600, 80, false)} alt={"A picture of Mike & Prado"} fill className={"w-full h-auto object-cover rounded-lg"} />
                </div>
                <div className="row-span-4 col-start-4 row-start-5 relative">
                    <Image src={cloudinaryLoader("starboy/IMG_4119_zgmknx.jpg", 600, 80, false)} alt={"A picture of Mike & Prado"} fill className={"w-full h-auto object-cover rounded-lg"} />
                </div>
                <div className="row-span-5 col-start-2 row-start-4 relative">
                    <Image src={cloudinaryLoader("starboy/IMG_2272_ylip74.jpg", 600, 80, false)} alt={"A picture of Mike & Prado"} fill className={"w-full h-auto object-cover rounded-lg"} />
                </div>
                <div className="row-span-5 col-start-3 row-start-4 relative">
                    <Image src={cloudinaryLoader("starboy/97EFADE6-BD02-4FE0-BC26-42149708ADFE_poh4ln.jpg", 600, 80, false)} alt={"A picture of Mike & Prado"} fill className={"w-full h-auto object-cover rounded-lg"} />
                </div>
            </div>
        </div>
    )
}