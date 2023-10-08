import { Cover } from "./Core/Cover/Cover";
import Heading from "./Core/Heading/Heading";
import Paragraph from "./Core/Paragraph/Paragraph";
import Image from "next/image";

// TODO: Add types (need JSON from WP)
export const BlockRenderer = ({ blocks }: any) => {
    return blocks.map((block:any) => {
        switch(block.name){
            case 'core/cover': {
                return (
                    <Cover key={block.id} {...block.attributes}>
                        <BlockRenderer blocks={block.innerBlocks}/>
                    </Cover>
                );
            }
            case 'core/heading': {
                return <Heading key={block.id} {...block.attributes} />;
            }
            case 'core/paragraph': {
                return <Paragraph key={block.id} {...block.attributes} />;
            }
            case "core/image": {
                return (
                  <Image
                    key={block.id}
                    src={block.attributes.url}
                    height={block.attributes.height}
                    width={block.attributes.width}
                    alt={block.attributes.alt || ""}
                  />
                );
              }
            default: 
                return null;
        }
    });
};