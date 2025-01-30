import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  // console.log(movies);

  // Check if movies array is available and has elements
  if (!movies || movies.length === 0) {
    return <div>No movies available</div>;
  }

  return (
    <div className="p-6 text-white">
      <h1 className='md:text-3xl font-semibold py-5 text-3xl p-5'>{title}</h1>
      <div className="flex p-5 flex-row overflow-x-scroll no-scrollbar "> 
        <div className="flex flex-row">
          {movies?.map((movie) => (
            <MovieCard key={movie?.id} posterPath={movie?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
