import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GetMovieSuggetion = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gpt);
  if (!movieNames) return null;
  // console.log(MovieNames)

  return (
    <div className="bg-black/70 p-3 mt-5 mx-3">
      <div>
        {movieNames.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieResults[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GetMovieSuggetion;
