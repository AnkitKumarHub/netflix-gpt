import { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import ai from "../utils/geminiAI";
import { addGptMovieResults } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  //Search movies in TMDB API
  const searchMoviesTMDB = async (movies) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movies +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    // const OriginalMovie = json.results.filter((movie) => movie.title === movies);
    return json.results;
  };

  //   const handleGPTsearchClick = async () => {
  //     console.log(searchText.current.value);
  //     //Make an API call to get Movie Results
  //     const gptQuery = "Act as a movie recomendation system and suggest some movies for the query" + searchText.current.value + ". Only give me names of 10 movies, comma separated like the example given ahead. Example Result: Bhool bhulaiya,Shaadi mai jaroor aana,Koi mill gaya,Kabhi khushi kabhi gum,Andhadhun. Also give the results without any leading space"
  //     const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GENAI_API_KEY);
  //     const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  //     const prompt = searchText.current.value;
  //     const result = await ai.models.generateContent(gptQuery);
  //     console.log(result.response.text());
  //     if (!result.response){
  //       // TODO: Writing Error Handling
  //     }
  //     const GenMovies = result.response.text().split(",")
  //     // console.log(GenMovies);

  //     const PromiseArray = GenMovies.map((movies) => searchMoviesTMDB(movies));
  //     const TmdbResults = await Promise.all(PromiseArray);       //Promise.all() take the array of promises
  //     console.log(TmdbResults);

  //     // dispatch(addGenMovieResults({MovieNames: GenMovies, MovieResults: TmdbResults}));
  //   };

  const handleGPTsearchClick = async () => {
    // console.log(searchText.current.value);
    //Make an API call to get Movie Results

    const gptQuery =
      "Act as a movie recomendation system and suggest some movies for the query" +
      searchText.current.value +
      ". Only give me names of 10 movies, comma separated like the example given ahead. Example Result: Bhool bhulaiya,Shaadi mai jaroor aana,Koi mill gaya,Kabhi khushi kabhi gum,Andhadhun. Also give the results without any leading space";

    const getResult = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: gptQuery,
    });
    console.log(getResult.text);

    if (!getResult.text) {
      // TODO: Writing Error Handling
    }
    const gptMovies = getResult.text.split(",");

    //for each movie in gptMovies, search in TMDB API
    const promiseArray = gptMovies.map((movies) => searchMoviesTMDB(movies));
    //[promise1, promise2, promise3, promise4, promise5, promise6, promise7, promise8, promise9, promise10]

    const tmdbResults = await Promise.all(promiseArray); //Promise.all() take the array of promises
    console.log(tmdbResults);

    dispatch(
      addGptMovieResults({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };

  return (
    <div className=" pt-[47%] md:pt-[10%] flex justify-center">
      <form
        className="bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 col-span-8 md:col-span-10 m-3 bg-white"
          placeholder={lang[langKey].placeholder}
        />
        <button
          className="py-2 px-4 col-span-4 md:col-span-2 cursor-pointer hover:bg-red-700 m-4 bg-red-600 font-semibold text-white rounded-lg"
          onClick={handleGPTsearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
