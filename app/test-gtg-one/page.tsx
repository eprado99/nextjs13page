import Heading from "@/components/UI/Heading/Heading";
import YoutubePlayer from "@/components/YoutubePlayer/YoutubePlayer";

export default function Page(){

    return (
        <div className={"my-4"}>
            <Heading style={{marginBottom: '1rem'}}>Test-gtg-two</Heading>
            <YoutubePlayer videoId={"_tV5LEBDs7w"} title={"Test-gtg-one"} />
        </div>
    )
}