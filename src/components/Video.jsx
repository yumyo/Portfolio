import React from "react"
const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  <div className="relative w-full pb-[56.25%] h-0 overflow-hidden">
  <iframe
    className="absolute top-0 left-0 w-full h-full"
      src={videoSrcURL}
      title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    />
  </div>
)

export default Video


