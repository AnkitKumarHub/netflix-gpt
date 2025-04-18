import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, TMDB_API_NOW_PLAYING } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  // Fetch Data from TMDB API and dispatch/update it to the store

  const dispatch = useDispatch();

  // Memoization function to fetch data from TMDB API
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );

  const getNowPlaying = async () => {
    const data = await fetch(TMDB_API_NOW_PLAYING, API_OPTIONS);
    const json = await data.json();
    // console.log(json.results);
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    // if (!nowPlayingMovies) getNowPlaying();  // or you can write the industry standard way
    !nowPlayingMovies && getNowPlaying();
  }, []);
};

export default useNowPlayingMovies;
