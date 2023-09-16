import React from "react";

type HeadingProps = {
    textAlign: string;
    content: string;
    level: string;
}

export const getTextAlign = (textAlign: string) => {
    switch(textAlign){
        case "center": {
            return "text-center";
        }
        case "right": {
            return "text-right";
        }
        default: {
            return "text-left";
        }
    }
}

export const getFontSize = (level: string) => {
    switch(level){
        case "1": {
            return "text-4xl";
        }
        case "2": {
            return "text-3xl";
        }
        case "3": {
            return "text-2xl";
        }
        case "4": {
            return "text-xl";
        }
        case "5": {
            return "text-lg";
        }
        case "6": {
            return "text-base";
        }
        default: {
            return "text-base";
        }
    }
}

const Heading = ({textAlign, content, level}: HeadingProps) => {
    const tag = React.createElement(
        `h${level || 6}`, 
        {className: `${getTextAlign(textAlign)} ${getFontSize(level)}`},
        content
    );
    return tag;
}

export default Heading;