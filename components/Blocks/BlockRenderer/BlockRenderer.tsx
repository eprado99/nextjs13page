import { Cover } from "./Core/Cover/Cover";

// TODO: Add types (need JSON from WP)
export const BlockRenderer = ({ blocks }: any) => {
    return blocks.map((block:any) => {
        switch(block.name){
            case 'core/cover': {
                return <Cover key={block.id} {...block.attributes} />;
            }
            case 'core/paragraph': {
                return <p key={block.id}>core/paragraph</p>;
            }
            default: 
                return null;
        }
    });
};