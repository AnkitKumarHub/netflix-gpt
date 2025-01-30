import { useSelector } from "react-redux";
import useFetchTrailer from "../hooks/useFetchTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useFetchTrailer(movieId); 

  return (
    <div className="w-screen no-scrollbar ">
      <iframe
        className="w-screen aspect-video no-scrollbar"
        src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?autoplay=1&mute=1&loop=1&playlist=" + trailerVideo?.key}
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
