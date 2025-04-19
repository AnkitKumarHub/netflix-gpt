"Reading Documentation is a superpower of a developer"
# Netflix GPT

- using vite configured react
- configured tailwindCSS
- Header
- Routing of App
- Login Form
- Sign up form (using same form)
- Form validation => use formik library for the validation in react
- useRef hook

    //How to take input data(email password ) from the form 
    1. you can use state varibale and bind that varibale along with the input box as soon as type on the input box the state variable will change => create state variable for email name password 
    2. you can use the reference of those input boxes => useRef
- FireBase Setup
- Autentication (using firebase for the authentication) 
configured the project on the FireBase and you can also deploy the project on the firebase 
- create SignUp User account 
- verify SignIn User
- Pushing the user info to the redux store => so we can use it anywhere
- SetUp ReDux Store

=> created a store
=> created a slice
=> and then added the sliceReducer onto the store
=> then providing my store
    appStore.js  
    userSlice.js 
    and then wrap the body inside the <Provider> <Body> <Provider/> in app.js(root)

- As sooon as user signIn/signUp i want to update the Store/userSlice with that user information => we have to write the dipatch action in signIn & SignUp & signOut also => so we are going to use the utility provided by the firebase which is known as "onAuthStateChanged" API => this is called whenever the authentication state is changed (signIn signOut => this will called automatically )

- SignOut functionality
- updated Profile
- BugFix: Sign Up user displayName and profile picture update

# Day-2
- BugFix (routing Bugs => if the user is not logged in Redirect /browse to Login Page and vice-versa  => if i am login already then if i access /login it should redirect to /browse and same without login i should not acces /browse )
- unsubscribed to the onAuthStateChanged callback
- Adding hardcoded value to the constant file 
- Register TMDB Api & create an app & get access token 
- Get data from TMDB now playing movies list API
- Adding movie data to the store (movieSlice)
- Created custom Hooks for the NowPlaying Movies
- create movieSlice
- update store with the movies data
- planning for the mainContainer & secondary container 
- fetch data for trailer vides
- update Store with Trailer video data
- Embeded the Youtube video and make it autoPlay and mute and on loop

Creating Movie Suggestions List
- Build secondary component

Showing Popular Movies List on Browse Page
- build Movie List 
- Build Movie Card 
- TMDB Image CDN url
- custom Hooks for different types of movies

 


- BUILLDING BROWSE PAGES UI
<!-- 
    maincontainer 
        - VideBackground 
        - VideoTitle 
    SecondaryConatiner
        - MoviesList * n
        - cards * n 
-->


- Builing secondary container 
<!-- 
    moviesList - popular
    moviesList - Now Playing
    moviesList - Trending
    moviesList - Horror 

 -->




**Features**
- Login/Sign Up
    - Sign In/ SignUp form
    - redirects to Browse Page

- Browse(after authentication)
    - Header
    - Main Movie
        - Trailer in Background
        - Title & Description
        - Movie Suggestion
            - MoviesList

- NetflixGpt
    - search Bar
    - Movie Suggestions



* Componets & utils Folder


setup of routing 
npm i -D react-router-dom

Ques=> why my API were called 2 times?
this basically happens because of React App Strict Mode if you remove strict mode it will be called once => and in strict it happens only for your localProject  

ANS => React does extra rendering of your component to check for some inconsisitency b/w your calls and this happens in development mode only and it will throw an error if any inconsistency is found.


# Day-3 
- GPT search feature 

Memoization - every times it makes an API call 

- if the useNowPlayingMovies (now playing movies) is already present in the store then i will not fetch the data again and make another API call  => it will save lot of api