import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";

const useFetchTrailer = (movieId) => {
  const dispatch = useDispatch();

  //fetch trailer movies from the API && updating the store with the trailer video
  const getMovies = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json);

    const filterData = json.results.filter((movie) => movie.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    // console.log(trailer); // this will log the trailer object

    //updating the state with the trailer video
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovies();
  }, []);
};

export default useFetchTrailer;
