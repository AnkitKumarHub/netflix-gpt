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
    <div className="relative w-full text-white bg-gradient-to-r from-slate-950 p-8 transition-all duration-500 ease-in-out">
      <h1 className="text-2xl mt-16 md:mt-52 md:text-5xl md:mx-32 mx-8 font-bold">
        {title}
      </h1>

      {/* Overview Text */}
      <div className="relative md:mx-32 mx-8 mt-4">
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isExpanded ? "max-h-[400px]" : "max-h-[60px]"
          }`}
        >
          <p className="text-xl font-mono">{isExpanded ? overview : getShortText(overview, wordLimit)}</p>
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
      <div className="md:mx-32 mx-8 mt-6 md:mt-10 text-sm md:text-lg text-white flex gap-4">
        {/* Play Button */}
        <button className="flex items-center gap-2 bg-white/10 text-white px-6 py-3 rounded-lg backdrop-blur-lg transition-all duration-300 hover:bg-white/20 hover:scale-105">
          <Play size={18} />
          Play
        </button>

        {/* More Info Button */}
        <button className="flex items-center gap-2 bg-white/10 text-white px-6 py-3 rounded-lg backdrop-blur-lg transition-all duration-300 hover:bg-white/20 hover:scale-105">
          <Info size={18} />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
