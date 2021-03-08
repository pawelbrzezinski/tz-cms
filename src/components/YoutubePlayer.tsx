import React, { useCallback, useRef,useEffect, useState } from "react";
import ReactPlayer from "react-player/youtube";
import { graphql, StaticQuery } from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";

import useInViewPort from "./useInViewPort";

import "../styles/youtube_player.scss";

const YoutubePlayer = ({
  url = "",
  muted = false,
  loop = false,
  start = "0",
  end = "0",
  label = "",
  graph,
}) => {
  const [nodeRef, isVisible] = useInViewPort();
  const [showComponent, setShowComponent] = useState(false);
  const player = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [isOverlay, setOverlay] = useState(true);

  

  useEffect(() => {
    if (isVisible) {
      setShowComponent(true);
    }
  }, [isVisible]);

  const play = useCallback(() => {
    setOverlay(false);
    player.current.seekTo(+start);
    setPlaying(!playing);
  }, [playing, setPlaying]);

  const togglePlay = useCallback(() => {
    setPlaying(!playing);
  }, [playing, setPlaying]);

  const handleProgress = useCallback(
    (progress) => {
      if (
        +end &&
        progress.playedSeconds >= +end &&
        player &&
        !!player.current
      ) {
        setPlaying(false);
        setOverlay(true);
        try {
          setTimeout(() => {
            player.current.seekTo(+start);
          }, 100);
        } catch {
          console.log(player.current, "player.current");
        }
      }
    },
    [end, player, setPlaying, setOverlay]
  );

  return (
    <div ref={nodeRef} className={`youtube-player`}>
      <div className="disableYoutube" onClick={togglePlay} />

      {showComponent ? (
        <ReactPlayer
          url={url}
          ref={player}
          playing={playing}
          className="react-player"
          width="100%"
          height="100%"
          muted={muted}
          loop={loop}
          onProgress={handleProgress}
          config={{
            playerVars: {
              showinfo: 0,
              modestbranding: 1,
              disablekb: 1,
              controls: 0,
              fs: 0,
              rel: 0,
              cc_load_policy: 0,
              iv_load_policy: 3,
              theme: "light",
              color: "white",
              vq: "hd1080",
            },
          }}
        />
      ) : null}
      <div className="source_label">{url}</div>

      {isOverlay && (
        <div className="youtube-overlay" onClick={play}>
          <div className="play_button">
            <div className="play_button_arrow"></div>
          </div>
          {label && <div className="label">{label}</div>}
          <PreviewCompatibleImage
            imageInfo={{
              image: graph.Image,
              alt: label,
              title: label,
            }}
            styles={{
              minWidth: "350px",
              width: "100%",
              height: "100%",
              position: "absolute",
            }}
          />
        </div>
      )}
    </div>
  );
};

export default (props) => (
  <StaticQuery
    query={graphql`
      query {
        Image: allFile(
          filter: { relativePath: { regex: "/youtube_overlay.png/" } }
        ) {
          nodes {
            childImageSharp {
              fluid(maxWidth: 500, maxHeight: 260, quality: 25) {
                originalName
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    `}
    render={(data) => (
      <YoutubePlayer
        graph={{
          Image: data.Image.nodes[0],
        }}
        {...props}
      />
    )}
  />
);
