import MovieCard from "./MovieCard";
import { useSelector } from "react-redux";
import BriefMovieCard from "./BriefMovieCard";

const MovieList = ({ title, movies }) => {
  // console.log(movies);

  const BriefMovieDetail = useSelector((store) => store.movies.BriefMovie);

  // Check if movies array is available and has elements
  if (!movies || movies.length === 0) {
    return <div>No movies available</div>;
  }

  return (
    <div className="px-0 md:px-6 py-1">
      <h1 className="m-2 font-bold text-xl text-gray-400">{title}</h1>
      <div className="flex p-5 flex-row overflow-x-scroll no-scrollbar">
        <div className="flex flex-row">
          {movies &&
            movies.map((movie) => (
              <MovieCard
                key={movie.id}
                posterPath={movie.poster_path}
                movie={movie}
              />
            ))}
        </div>
        {BriefMovieDetail && (
          <div className="fixed md:h-[79vh] h-[50vh] w-[65vw] md:top-[18%] top-[25%] left-[18%]">
            <BriefMovieCard movieDetail={BriefMovieDetail} />
          </div>
        )}
      </div>
    </div>
  );
};
export default MovieList;
