import { v4 as uuidv4 } from 'uuid';

export const block_preprocessor = (blocksJSON: any) => {
    const blocks = JSON.parse(JSON.stringify(blocksJSON));

    const assignId = (block: any) => {
        block.forEach((item: any) => {
            block.id = uuidv4();
            if (item.innerBlocks?.length > 0) {
                assignId(item.innerBlocks);
            }                
        });
    }

    assignId(blocks);
    return blocks;    
}