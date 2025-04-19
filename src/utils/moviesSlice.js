import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
    popularVideo: null,
    topRatedVideo: null,
    upComingVideo: null,
    BriefMovie: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addPopularVideo: (state, action) => {
      state.popularVideo = action.payload;
    },
    addTopRatedVideo: (state, action) => {
      state.topRatedVideo = action.payload;
    },
    addUpComingVideo: (state, action) => {
      state.upComingVideo = action.payload;
    },
    addBriefMovie : (state, action) => {
      state.BriefMovie = action.payload;
  },
  },
});

export const {
  addNowPlayingMovies,
  addTrailerVideo,
  addPopularVideo,
  addTopRatedVideo,
  addUpComingVideo,
  addBriefMovie
} = moviesSlice.actions;

export default moviesSlice.reducer;
