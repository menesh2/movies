import {Movie} from "../components/MovieCard";

export const searchMoviesForName = (movies: Movie[], searchText: string): Movie[] => {
    if ( searchText === '' ) {
        return movies
    }

    let matchingMovies = movies.filter((movie) => {
        return movie.title.includes(searchText)
    });

    return matchingMovies
};

export const findMovieByID = (movies: Movie[], movieID: string): Movie | undefined => {
    let movie = movies.find((movie) => {
        return movie.id === movieID
    });

    return movie
}
