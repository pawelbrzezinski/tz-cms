import React, { useRef } from "react";
import ReactPlayer from "react-player/youtube";

import "../styles/youtube_gif.scss";

const YoutubeGif = ({ url = "" }) => {
  const player = useRef(null);

  return (
    <div className={`youtube-gif`}>
      <ReactPlayer
        url={url}
        ref={player}
        playing={true}
        className="react-player"
        width="100%"
        height="100%"
        muted={true}
        loop={true}
        config={{
          playerVars: {
            showinfo: 1,
            modestbranding: 1,
            controls: 0,
            rel: 0,
            iv_load_policy: 3,
            theme: "light",
            color: "white",
            vq: "hd1080",
          },
        }}
      />
      <div className="source_label">{url}</div>

      <div className="youtube-gif-overlay"></div>
    </div>
  );
};

export default YoutubeGif;
