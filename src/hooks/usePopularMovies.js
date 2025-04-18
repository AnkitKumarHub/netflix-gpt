import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, TMDB_API_POPULAR } from "../utils/constants";
import { addPopularVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  // Fetch Data from TMDB API and dispatch/update it to the store

  const dispatch = useDispatch();

  const popularMovies = useSelector(
    (store) => store.movies.popularVideo
  );
  const getPopularMovies = async () => {
    const data = await fetch(TMDB_API_POPULAR, API_OPTIONS);
    const json = await data.json();
    // console.log(json.results);
    dispatch(addPopularVideo(json.results));
  };

  useEffect(() => {
    !popularMovies && getPopularMovies();
  }, []);
};

export default usePopularMovies;
