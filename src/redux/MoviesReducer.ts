import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Movie} from "../components/MovieCard";
import * as API from "../Networking/Api"

export interface MoviesReducerState {
    movies: Movie[]
    selectedMovieID: string
}

const INITIAL_STATE: MoviesReducerState = {
    movies: [],
    selectedMovieID: ''
};

export const getMoviesFromRemote = createAsyncThunk('moviesList/getMoviesFromRemote', async () => {
    const movies = await API.getMoviesFromRemote();
    return movies
});

export const moviesSlice = createSlice({
    name: 'moviesList',
    initialState: INITIAL_STATE,
    reducers: {
        setMovies(state, action: PayloadAction<Movie[]>) {
            state.movies = action.payload
        },
        setSelectedMovieID(state, action: PayloadAction<string>) {
            state.selectedMovieID = action.payload
        }
    },
    extraReducers: builder => {
        builder.addCase(getMoviesFromRemote.fulfilled, (state, action) => {
            state.movies = action.payload
        })
    }
});

export const { setMovies, setSelectedMovieID } = moviesSlice.actions;
export default moviesSlice.reducer
