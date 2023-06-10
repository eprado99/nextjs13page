interface HeadingProps {
    style: React.CSSProperties;
    headingStyle?: React.CSSProperties;
    children: React.ReactNode;
};

export default function Heading({style, headingStyle, children}: HeadingProps) {
    return (
        <div style={style}>
            <h1 className={"text-[2.5rem] font-bold leading-[4rem] tracking-tight"}>{children}</h1>
        </div>
    )
}