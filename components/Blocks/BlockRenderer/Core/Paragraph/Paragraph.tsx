type ParagraphProps = {
    content: string;
};

const Paragraph = ({ content }: ParagraphProps) => {
    return (
        <div className={"prose prose-slate lg:prose-lg mx-auto"}>
            <p>{ content }</p>
        </div>
    );
};

export default Paragraph;
