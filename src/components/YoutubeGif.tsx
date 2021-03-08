import React, { useRef, useState, useEffect } from "react";
import ReactPlayer from "react-player/youtube";
import useInViewPort from "./useInViewPort";
import "../styles/youtube_gif.scss";

const YoutubeGif = ({ url = "" }) => {
  const player = useRef(null);
  const [nodeRef, isVisible] = useInViewPort();
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setShowComponent(true);
    }
  }, [isVisible]);

  return (
    <div ref={nodeRef} className={`youtube-gif`}>
      {showComponent ? (
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
      ) : null}
      <div className="source_label">{url}</div>

      <div className="youtube-gif-overlay"></div>
    </div>
  );
};

export default YoutubeGif;
