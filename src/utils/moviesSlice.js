import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
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
  },
});

export const {
  addNowPlayingMovies,
  addTrailerVideo,
  addPopularVideo,
  addTopRatedVideo,
  addUpComingVideo,
} = moviesSlice.actions;

export default moviesSlice.reducer;
