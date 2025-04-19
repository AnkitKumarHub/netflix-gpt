import { useState } from "react";
import { Play, Info } from "lucide-react"; // Import minimalist icons

const VideoTitle = ({ title, overview }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const wordLimit = 15; // Limit words

  const getShortText = (text, limit) => {
    const words = text.split(" ");
    if (words.length <= limit) return text;
    return words.slice(0, limit).join(" ") + "...";
  };

  return (
    <div className="aspect-video absolute w-screen text-white bg-gradient-to-r from-slate-950 p-8 transition-all duration-500 ease-in-out ">
      <h1 className="text-2xl mt-16 md:mt-52 md:text-5xl md:mx-32 mx-4 font-bold">
        {title}
      </h1>

      {/* Overview Text */}
      <div className="hidden md:inline-block relative md:mx-32 mx-8 mt-4">
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isExpanded ? "max-h-[400px]" : "max-h-[60px]"
          }`}
        >
          <p className="text-xl font-mono w-1/3">
            {isExpanded ? overview : getShortText(overview, wordLimit)}
          </p>
        </div>

        {/* Read More / Show Less Button */}
        {overview.split(" ").length > wordLimit && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-sm text-gray-300 hover:text-white transition-all mt-2 block"
          >
            {isExpanded ? "Show Less" : "Read More"}
          </button>
        )}
      </div>

      {/* 🔥 Updated Buttons */}
      <div className="md:mx-32 mx-4 mt-4 md:mt-10 text-sm md:text-lg text-white flex gap-4">
        {/* Play Button */}
        <button className=" flex items-center gap-2 bg-white text-black px-4 md:px-6 py-2 md:py-3 rounded-lg backdrop-blur-lg transition-all duration-300 hover:bg-white/60 hover:scale-105 text-lg">
          {/* <Play size={18} /> */}
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA6klEQVR4nO3WMQrCMBQG4IAguih0sP1fUgLVqYsX8AQu3sIruDp6Ba/g6ugkIs5Cb+CouIiLoJHahrq56Itif/jnrzzS5AlRxmUArAFsAQxYYSIytgA2AHrsMBUfMFdKddhhyvALEU1932+xwlT0BGCslKpzwyafwA7AUAhRYYWpaCKl7LuATT6BhZSyyw5T1iuAWRAEmhs2ec9ENImiqMkN2/EfAIziOK6ywk9d/g285x7143B5ntd4Cf7s7wQHF0jCemWC+5EAcExPqta69hbQ5psWgVt6UsMwbH8EtHG57K2crLdlxAdyB7Tsg1utCTjAAAAAAElFTkSuQmCC"
            alt="play--v1"
          ></img>
          Play
        </button>

        {/* More Info Button */}
        <button className="  hidden md:flex items-center gap-2 bg-white/10 text-white px-6 py-3 rounded-lg backdrop-blur-lg transition-all duration-300 hover:bg-white/20 hover:scale-105">
          <Info size={18} />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
