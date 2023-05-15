import Image from "next/image"
import { SvgItem } from "@/types"
import Heading from "../UI/Heading/Heading"

interface ScrollingTechProps {
    programmingSvgItems: SvgItem[]
    frameworkSvgItems: SvgItem[]
    cloudSvgItems: SvgItem[]
}
export default function ScrollingTechCards({programmingSvgItems, frameworkSvgItems, cloudSvgItems}: ScrollingTechProps) {
    
    return (
        <div className={""}>
            <article className="wrapper h-screen">
            <Heading style={{marginTop: '2rem'}}>Programming Languages</Heading>
            <div className="logo">
                <div className="logo__group">
                    {
                        programmingSvgItems.map((item, idx) => {
                            return (
                                <div className="svg-container" style={{ width: '250px', height: '250px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} key={idx}>
                                    <Image
                                    src={item.fileName}
                                    alt={item.altText}
                                    width={250}
                                    height={250}
                                    />
                                </div>
                            )
                        })
                    }
                </div>

                <div aria-hidden="true" className="logo__group">
                
                    {
                        programmingSvgItems.map((item, idx) => {
                            return ( 
                                <div className="svg-container" style={{ width: '250px', height: '250px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} key={idx}>
                                    <Image
                                    src={item.fileName}
                                    alt={item.altText}
                                    width={250}
                                    height={250}
                                    // fill
                                    // style={{ objectFit: "contain" }}
                                    //  
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <Heading style={{marginTop: '2rem'}}>Frameworks</Heading>
            <div className="logo logo--reverse">
                <div className="logo__group">
                    {
                        frameworkSvgItems.map((item, idx) => {
                            return (
                                <div className="svg-container" style={{ width: '250px', height: '250px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} key={idx}>
                                    <Image
                                    src={item.fileName}
                                    alt={item.altText}
                                    width={250}
                                    height={250}
                                    />
                                </div>
                            )
                        })
                    }
                </div>

                <div aria-hidden="true" className="logo__group">
                    {
                        frameworkSvgItems.map((item, idx) => {
                            return (
                                <div className="svg-container" style={{ width: '250px', height: '250px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} key={idx}>
                                    <Image
                                    src={item.fileName}
                                    alt={item.altText}
                                    width={250}
                                    height={250}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <Heading style={{marginTop: '2rem'}}>Cloud</Heading>
            <div className="logo">
                <div className="logo__group">
                    {
                        cloudSvgItems.map((item, idx) => {
                            return (
                                <div className="svg-container" style={{ width: '250px', height: '250px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} key={idx}>
                                    <Image
                                    src={item.fileName}
                                    alt={item.altText}
                                    width={250}
                                    height={250}
                                    />
                                </div>
                            )
                        })
                    }
                </div>

                <div aria-hidden="true" className="logo__group">
                
                    {
                        cloudSvgItems.map((item, idx) => {
                            return ( 
                                <div className="svg-container" style={{ width: '250px', height: '250px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} key={idx}>
                                    <Image
                                    src={item.fileName}
                                    alt={item.altText}
                                    width={250}
                                    height={250}
                                    // fill
                                    // style={{ objectFit: "contain" }}
                                    //  
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            </article>

            
        </div>
    )
}