import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  // console.log(movies?.nowPlayingMovies);
  return (
    movies && (
      <div className="bg-black">
        <div className='md:-mt-95 pl-10  mt-0 relative z-20'>
          <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
          <MovieList title="Trending" movies={movies.topRatedVideo} />
          <MovieList title="Popular" movies={movies.popularVideo} />
          <MovieList title="Upcoming Movies" movies={movies.upComingVideo} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
