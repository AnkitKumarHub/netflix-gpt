import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";
import { Netflix_Background } from "../utils/constants";

const GptSearch = () => {
  return (
    <>
      <div className="fixed bg-black min-h-f min-w-fit -z-10 box-border">
        <img
          className=" h-screen object-cover md:w-screen"
          src={Netflix_Background}
          alt="logo"
        />
        <div className="fixed inset-0 bg-black opacity-50"></div>
      </div>
      <div className="">
        <GptSearchBar />
        <GptMovieSuggestion />
      </div>
    </>
  );
};

export default GptSearch;
