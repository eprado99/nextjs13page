
import Icon from "../UI/Icon/Icon";
import Image from "next/image";

const Footer = () => {


    return (
        <footer className={"h-[40vh] mt-5 mb-10"}>
            <div className={"border-top"}></div>
            
            <div className={"grid grid-cols-2 h-[100%]"}>
                <h1 className="col-span-2 text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight font-manrope">
                            We are at the end!
                </h1>
                <div>
                    <div className={"flex gap-2"}>
                        {/* target="_blank" */}
                        <a href={"https://www.linkedin.com/in/emilio-prado-10b019218/"}><Image src="/SVGs/media/LI-Logo.png" width={75} height={75} alt={"Linkedin Logo"} /></a>
                    </div>
                    <div className={"flex"}>
                    {/* @ts-expect-error Server Component */}
                    <Icon name="switch_access_shortcut" />
                    <p className={"font-manrope text-xs justify-self-end self-end"}>Learn more about me professionally!</p>
                    </div>
                </div>
                <div></div>
                <div>
                    <div className={"flex gap-2"}>
                        <a href={"https://www.tiktok.com/@emilioprado99"}><Image src="/SVGs/media/TikTok-logo-RGB-Horizontal-Black.png" width={100} height={100} alt={"Linkedin Logo"} /></a>
                        <a href={"https://www.instagram.com/emiliofprado/"}><Image src="/SVGs/media/Instagram_Glyph_Gradient.svg" width={25} height={25} alt={"Linkedin Logo"} /></a>
                    </div>
                    <div className={"flex"}>
                    {/* @ts-expect-error Server Component */}
                    <Icon name="switch_access_shortcut" />
                    <p className={"font-manrope text-xs justify-self-end self-end"}>Or more about me personally!</p>
                    </div>
                </div>
                
            </div>
            <div className={"border-bottom"}></div>
        </footer>
    )
}

export default Footer;