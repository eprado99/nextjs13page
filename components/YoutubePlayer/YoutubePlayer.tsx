import React from 'react';

{/* <YoutubePlayer videoId={"_tV5LEBDs7w"} title={"Test-gtg-one"} /> */}


interface YoutubePlayerProps {
    videoId: string;
    title: string;
}

const YoutubePlayer = (props: YoutubePlayerProps) => {

    return (
        <div className="w-full aspect-w-16 aspect-h-9">
            <iframe 
                src={`https://www.youtube.com/embed/${props.videoId}?enablejsapi=1`} 
                title={props.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </div>
    )
}

export default YoutubePlayer;