import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import {Netflix_Logo} from "../utils/constants";


const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

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
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL })); 
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

  return (
    <div className="absolute w-screen  px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between items-center">
      <img
        className="w-44"
        src={Netflix_Logo}
        alt="Netflix_Logo"
      />
      {user && (
        <div className="flex space-x-3  ">
          <img
            className="w-10 h-10"
            src={user.photoURL}
            alt="usericon"
          />
          <button
            onClick={handleSignOut}
            className="font-semibold text-xl cursor-pointer"
          >
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
