import { useDispatch } from "react-redux";
import { API_OPTIONS, TMDB_API_POPULAR } from "../utils/constants";
import { addPopularVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  // Fetch Data from TMDB API and dispatch/update it to the store

  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    const data = await fetch(TMDB_API_POPULAR, API_OPTIONS);
    const json = await data.json();
    // console.log(json.results);
    dispatch(addPopularVideo(json.results));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
