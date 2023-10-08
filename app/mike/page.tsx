import cloudinaryLoader from "@/utils/cloudinaryLoader";
import Image from "next/image";

export default function Page() {
    return (
        <div className={"h-screen space-y-4 my-2"}>
            <h1 className={"text-5xl font-bold text-center"}>Felicidades Maykol</h1>
            <div className="grid grid-cols-4 grid-rows-8 gap-4 h-full">
                <div className="row-span-4 relative">
                    <Image src={cloudinaryLoader("mike/20220429_150901_small_re3ptc.jpg", 600, 80, false)} alt={"A picture of Mike & Prado"} fill className={"w-full h-auto object-cover rounded-lg"} />
                </div>
                <div className="row-span-4 col-start-1 row-start-5 relative">
                    <Image src={cloudinaryLoader("mike/WhatsApp_Image_2023-10-08_at_14.42.05_loj9bs.jpg", 600, 80, false)} alt={"A picture of Mike & Prado"} fill className={"w-full h-auto object-cover rounded-lg"} />
                </div>
                <div className="col-span-2 row-span-3 col-start-2 row-start-1 relative">
                    <Image src={cloudinaryLoader("mike/IMG_1772_i5ftsp.jpg", 600, 80, false)} alt={"A picture of Mike & Prado"} fill className={"w-full h-auto object-cover rounded-lg"} />
                </div>
                <div className="row-span-4 col-start-4 row-start-1 relative">
                    <Image src={cloudinaryLoader("mike/20220716_015500_wnzbjo.jpg", 600, 80, false)} alt={"A picture of Mike & Prado"} fill className={"w-full h-auto object-cover rounded-lg"} />
                </div>
                <div className="row-span-4 col-start-4 row-start-5 relative">
                    <Image src={cloudinaryLoader("mike/WhatsApp_Image_2023-10-08_at_14.42.05_2_qt2mvs.jpg", 600, 80, false)} alt={"A picture of Mike & Prado"} fill className={"w-full h-auto object-cover rounded-lg"} />
                </div>
                <div className="row-span-5 col-start-2 row-start-4 relative">
                    <Image src={cloudinaryLoader("mike/WhatsApp_Image_2023-10-08_at_14.42.05_4_lyf3my.jpg", 600, 80, false)} alt={"A picture of Mike & Prado"} fill className={"w-full h-auto object-cover rounded-lg"} />
                </div>
                <div className="row-span-5 col-start-3 row-start-4 relative">
                    <Image src={cloudinaryLoader("mike/IMG_9460_wdpkl9.jpg", 600, 80, false)} alt={"A picture of Mike & Prado"} fill className={"w-full h-auto object-cover rounded-lg"} />
                </div>
            </div>
        </div>
    )
}