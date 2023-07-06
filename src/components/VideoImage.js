import React, { useState } from "react";

export default function VideoImage({ media, height }) {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const mystyle = {
    maxHeight: height,
  };

  if (media[1] === "image") {
    return (
      <div className={`image-container ${isFullscreen ? "fullscreen" : ""}`}>
        <img src={media[0]} height={height} onClick={toggleFullscreen} />
      </div>
    );
  } else {
    return (
      <div className={`image-container ${isFullscreen ? "fullscreen" : ""}`}>
        <video
          src={media[0]}
          autoPlay
          loop
          muted
          style={isFullscreen ? {} : mystyle}
          onClick={toggleFullscreen}
        ></video>
      </div>
    );
  }
}
