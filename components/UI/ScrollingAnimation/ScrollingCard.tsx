

interface CardElementProps {
    id: string;
    currentId: string;
}

interface ScrollingCardProps extends CardElementProps {
    gradient: string;
    children: React.ReactNode;
}

const ScrollingCard = (
    { gradient, children, id, currentId }: ScrollingCardProps
) => {
    return (
        <div className={`
            absolute inset-0 h-full w-full rounded-2xl 
            bg-gradient-to-br ${gradient} 
            transition-opacity ${id === currentId ? "opacity-100" : "opacity-0"}
        `}>
            {children}
        </div>
    )
}

export const FirstCard = ({id, currentId}: CardElementProps) => {
    return (
        <ScrollingCard id={id} currentId={currentId} gradient="from-blue-500 to-blue-300">
            <h1 className="text-5xl font-mono text-white">First card</h1>
        </ScrollingCard>
    )
}

export const SecondCard = ({id, currentId}: CardElementProps) => {
    return (
        <ScrollingCard id={id} currentId={currentId} gradient="from-green-500 to-green-300">
            <h1 className="text-5xl font-mono text-white">Second card</h1>
        </ScrollingCard>
    )
}

export const ThirdCard = ({id, currentId}: CardElementProps) => {
    return (
        <ScrollingCard id={id} currentId={currentId} gradient="from-yellow-500 to-yellow-300">
            <h1 className="text-5xl font-mono text-white">Third card</h1>
        </ScrollingCard>
    )
}

export const FourthCard = ({id, currentId}: CardElementProps) => {
    return (
        <ScrollingCard id={id} currentId={currentId} gradient="from-red-500 to-red-300">
            <h1 className="text-5xl font-mono text-white">Fourth card</h1>
        </ScrollingCard>
    )
}

export const FifthCard = ({id, currentId}: CardElementProps) => {
    return (
        <ScrollingCard id={id} currentId={currentId} gradient="from-purple-500 to-purple-300">
            <h1 className="text-5xl font-mono text-white">Fifth card</h1>
        </ScrollingCard>
    )
}