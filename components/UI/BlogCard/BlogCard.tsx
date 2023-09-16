const BlogCard = () => {
    return (
        <div className="my-4 flex-none w-1/3 h-[66vh] py-1.5 bg-white rounded-md">
            <div className={"block relative h-[33%] max-w-[100%] rounded-md"}>
                <div className={"relative flex flex-col h-[33%] p-6"}>
                    <h2 className={"text-black"}>Title</h2>
                    {/* p tag with lorem ipsum text of 4 paragraphs */}
                    <p className={"whitespace-pre-wrap max-w-[95%] mt-20 mb-5"}>
                        {
                            [...Array(8)].map((_, i) => {
                                return (
                                    <span key={i}>
                                        Lorem ipsum dol Lorem ipsum dol
                                        Lorem ipsum dol Lorem ipsum dol
                                        Lorem ipsum dol Lorem ipsum dol
                                        Lorem ipsum dol Lorem ipsum dol
                                    </span>
                                )
                            })
                        }
                    </p>
                </div>
            </div>
        </div>
    )
}

export default BlogCard;