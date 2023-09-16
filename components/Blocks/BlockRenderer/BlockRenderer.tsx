import { Cover } from "./Core/Cover/Cover";
import Heading from "./Core/Heading/Heading";

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
                return <p key={block.id}>core/paragraph</p>;
            }
            default: 
                return null;
        }
    });
};