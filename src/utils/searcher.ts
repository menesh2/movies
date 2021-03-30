import {Movie} from "../components/MovieCard";

const searchMoviesForName = (movies: Movie[], searchText: string): Movie[] => {
    if ( searchText === '' ) {
        return movies
    }

    let matchingMovies = movies.filter((movie) => {
        return movie.title.includes(searchText)
    });

    return matchingMovies
};

export default searchMoviesForName
