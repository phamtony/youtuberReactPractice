import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({videos, chooseSelectedVideo}) => {
    const renderVideoList = videos.map((video) => {
        return <VideoItem video={video} chooseSelectedVideo={chooseSelectedVideo} />
    });

    return <div className="ui relaxed divided list">{renderVideoList}</div>;
}

export default VideoList;






























// import React from "react";
// import VideoItem from "./VideoItem";
//
// const VideoList = ({videos, onSelectedVideo}) => {
//     const renderedList = videos.map((video) => {
//         return <VideoItem
//             video={video}
//             onSelectedVideo={onSelectedVideo}
//         />;
//     });
//
//     return <div className="ui relaxed divided list">{renderedList}</div>;
// };
//
// export default VideoList;