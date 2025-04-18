import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, TMDB_API_UPCOMING } from "../utils/constants";
import { addUpComingVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {
  // Fetch Data from TMDB API and dispatch/update it to the store

  const dispatch = useDispatch();

  const upComingMovies = useSelector(
      (store) => store.movies.upComingVideo
    );
  const getUpComingMovies = async () => {
    const data = await fetch(TMDB_API_UPCOMING, API_OPTIONS);
    const json = await data.json();
    // console.log(json.results);
    dispatch(addUpComingVideo(json.results));
  };

  useEffect(() => {
    !upComingMovies && getUpComingMovies();
  }, []);
};

export default useUpcomingMovies;
