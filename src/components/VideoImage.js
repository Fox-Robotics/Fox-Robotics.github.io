import React from "react";

export default function VideoImage({ media }) {
  if (media[1] === "image") {
    return <img src={media[0]} />;
  } else {
    return <video src={media[0]} autoPlay loop muted></video>;
  }
}
