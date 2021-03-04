import React, { useCallback, useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";

import "../styles/youtube_player.scss";

const YoutubePlayer = ({
  url = "",
  muted = false,
  loop = false,
  start = "0",
  end = "0",
  label = "",
}) => {
  const player = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [isOverlay, setOverlay] = useState(true);

  const play = useCallback(() => {
    setOverlay(false);
    player.current.seekTo(+start);
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

  // useEffect(() => {
  //   console.log("1")
  //   if (player && !!player.current) {
  //     console.log("2")
  //     try {
  //       setTimeout(() => {
  //         player.current.seekTo(+start);
  //         console.log("3", start)
  //       }, 100);
  //     } catch {
  //       console.log(player.current, "player.current");
  //     }
  //   }
  // }, [player.current]);

  return (
    <div className={`youtube-player`}>
      <div className="disableTop" />
      <div className="disableBottom" />

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
          youtube: {
            playerVars: {
              showinfo: 0,
              modestbranding: 1,
              disablekb: 1,
              controls: 0,
              fs: 0,
              rel: 0,
              iv_load_policy: 3,
              theme: "light",
              color: "white",
              vq: "hd1080",
            },
          },
        }}
      />
      <div className="source_label">{url}</div>

      {isOverlay && (
        <div className="youtube-overlay" onClick={play}>
          <div className="play_button">
            <div className="play_button_arrow"></div>
          </div>
          {label && <div className="label">{label}</div>}
        </div>
      )}
    </div>
  );
};

export default YoutubePlayer;
