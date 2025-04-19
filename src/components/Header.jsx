import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { Netflix_Logo } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changelanguage } from "../utils/configSlice";
import { useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const [isdropdownOpen, setIsdropdownOpen] = useState(false)


  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful. onAuthStateChanged is handling the routing
      })
      .catch(() => {
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Cleanup subscription on unmount / Unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    //Toggle GPT search
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    // console.log(e.target.value);
    dispatch(changelanguage(e.target.value));
  };

  return (
    <div className={`absolute w-screen  px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between md:items-center `}>
      <img className="w-44 justify-center mx-auto md:mx-0" src={Netflix_Logo} alt="Netflix_Logo" />
      {user && (
        <div className="flex justify-between py-2 md:gap-3 ">
          {showGptSearch && (
            <select
              className="text-white bg-gray-900 m-2 px-3  rounded-lg mx-1.5 "
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="bg-purple-700 text-white px-3 py-0.5 m-2 md:mt-4 rounded-md cursor-pointer hover:bg-purple-800"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Home" : "Search"}
          </button>
          <div className="flex-col w-fit"> 
          <div className="flex space-x-6">
          <img className="w-[43px] h-fit md:mt-3 " src={user.photoURL} alt="usericon" />
          <span className="mt-5 -ml-4 scale-110 cursor-pointer" onClick={() => setIsdropdownOpen(!isdropdownOpen)}> 🔻 </span>
          </div>
          {isdropdownOpen && 
          <div className="absolute">
          <button
            onClick={handleSignOut}
            className="mt-2 cursor-pointer text-white font-[20px] px-2 py-1 bg-gray-900 border border-white rounded"
          >
            Sign Out
          </button>
          </div>
          }
        </div>
      </div>)}
    </div>
  )
}

export default Header;
