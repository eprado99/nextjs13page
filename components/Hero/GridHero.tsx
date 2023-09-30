

const GridHero = () => {
    return (
        <div className="h-[90vh] grid grid-cols-4 md:grid-cols-6 grid-rows-6 gap-3 mt-4 mb-2">
            <div className="border-2 border-black order-3 md:order-none rounded-lg">1 image 1, 5, 3 and 6 together on mobile under 2 and 7</div>
            <div className="border-2 border-black order-1 col-span-4 md:order-none md:col-span-3 row-span-1 md:row-span-2 rounded-lg">2 Big title or long text? 2 and 7 full span on mobile</div>
            <div className="border-2 border-black order-5 md:order-none rounded-lg">3 text</div>
            <div className="hidden md:block border-2 border-black row-span-3 rounded-lg">4 could be latest project or post, even a long vertical image (hide on mobile?)</div>
            <div className="border-2 border-black order-4 md:order-none rounded-lg">5 text</div>
            <div className="border-2 border-black order-6 md:order-none rounded-lg">6 image</div>
            <div className="border-2 border-black order-2 col-span-4 md:col-span-5 md:order-none row-span-2 rounded-lg">7 long text?</div>
            <div className="hidden md:block border-2 border-black rounded-lg">8 link to more about me? hide on mobile</div>
            <div className="border-2 border-black order-7 md:order-none col-span-4 md:col-span-5 rounded-lg">9 join with 11? second marquee</div>
            <div className="hidden md:block border-2 border-black rounded-lg">10 explore adding a real time spotify widget or ig widget? hide on mobile</div>
            <div className="border-2 border-black order-8 md:order-none col-span-4 md:col-span-6 rounded-lg">11 marquee here</div>
        </div>
    )
}

export default GridHero;