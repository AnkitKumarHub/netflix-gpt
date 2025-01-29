import Header from "./Header";
import { useRef, useState } from "react";
import { checkvalidData } from "../utils/valid";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { USER_AVATAR, Netflix_Background } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    //valid the form data here
    // console.log(email.current.value);
    // console.log(password.current.value);

    const message = isSignInForm
      ? checkvalidData(email.current.value, password.current.value)
      : checkvalidData(
          email.current.value,
          password.current.value,
          name.current.value
        );
    setErrorMessage(message);

    //if there is invalid entry, return
    if (message) {
      return;
    }

    //SignIn / SignUp logic
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
            });
          // console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " : " + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " : " + errorMessage);
        });
    }
  };

  return (
    <div className="relative h-screen overflow-hidden">
      <Header />
      <div className="absolute inset-0 ">
        <img
          className="w-full h-full object-cover"
          src={Netflix_Background}
          alt="Logo"
        />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="w-3/12 absolute p-12 bg-black my-50 mx-auto right-0 left-0 text-white rounded-lg opacity-80"
      >
        <h1 className="font-bold text-4xl py-6">
          {isSignInForm ? " Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="my-4 p-4  w-full bg-gray-800"
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="Email Address"
          className="my-4 p-4  w-full bg-gray-800"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="my-4 p-4 w-full bg-gray-800"
        />
        <p className="text-red-600 font-semibold text-lg py-2">
          {errorMessage}
        </p>
        <button
          className="p-4 my-6 bg-red-600 w-full rounded-lg cursor-pointer"
          onClick={handleButtonClick}
        >
          {isSignInForm ? " Sign In" : "Sign Up"}{" "}
        </button>
        <p className="py-6 cursor-pointer" onClick={toggleSignInForm}>
          {" "}
          {isSignInForm
            ? "New to Netflix? Sign up now."
            : "Already registered? Sign In Now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
