import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, TMDB_API_TOP_RATED } from "../utils/constants";
import { addTopRatedVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
  // Fetch Data from TMDB API and dispatch/update it to the store

  const dispatch = useDispatch();

  const topRatedMovies = useSelector((store) => store.movies.topRatedVideo);

  const getTopRatedMovies = async () => {
    const data = await fetch(TMDB_API_TOP_RATED, API_OPTIONS);
    const json = await data.json();
    // console.log(json.results);
    dispatch(addTopRatedVideo(json.results));
  };

  useEffect(() => {
    !topRatedMovies && getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
