type ParagraphProps = {
    content: string;
};

const Paragraph = ({ content }: ParagraphProps) => {
    return (
        <div className={"prose prose-slate lg:prose-lg mx-auto"}>
            <p dangerouslySetInnerHTML={{ __html: content }} />
        </div>
    );
};

export default Paragraph;
