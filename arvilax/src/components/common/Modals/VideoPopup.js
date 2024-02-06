import React from "react";
import ModalVideo from "react-modal-video";

const VideoPopup = ({
  isVideoOpen,
  setIsVideoOpen,
  videoId = "HXgWqv9x7I0",
}) => {
  return (
    <ModalVideo
      channel="youtube"
      autoplay
      isOpen={isVideoOpen}
      videoId={videoId}
      onClose={() => setIsVideoOpen(false)}
    />
  );
};

export default VideoPopup;
