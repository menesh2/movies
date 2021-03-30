import {FlatList, StyleSheet, View, Text, SafeAreaView, TouchableOpacity} from "react-native";
import React, {useEffect, useState} from 'react'
import MovieCard, {Movie} from "./components/MovieCard";
import {StackNavigationProp} from "@react-navigation/stack/lib/typescript/src/types";
import {AppState, RootStackParamList} from "../App";
import { RouteProp } from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import { Searchbar } from 'react-native-paper';
import { searchMoviesForName } from "./utils/MoviesHelper";
import { setSelectedMovieID } from "./redux/MoviesReducer"

type MoviesListScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'MoviesList'
    >;

type MoviesListScreenRouteProp = RouteProp<RootStackParamList, 'MoviesList'>

type Props = {
    route: MoviesListScreenRouteProp;
    navigation: MoviesListScreenNavigationProp;
};

const MoviesListScreen = ({ navigation }: Props) => {

    const movies = useSelector((state: AppState) => state.moviesReducer.movies );
    const [searchText, setSearchText] = useState('');
    const [moviesToShow, setMoviesToShow] = useState(movies);
    const dispatch = useDispatch();

    useEffect(() => {
        let matchingMovies = searchMoviesForName(movies, searchText);
        setMoviesToShow(matchingMovies)

    }, [searchText]);

    const onMoviePress = (movie: Movie) => {
        dispatch(setSelectedMovieID(movie.id));
        navigation.navigate("MovieInfo")
    };

    return (
        <SafeAreaView style={styles.container}>
            <Searchbar value={ searchText} placeholder="find a movie" onChangeText={(newSearchText) => setSearchText(newSearchText)}/>
            <FlatList style={styles.moviesList} data={moviesToShow} renderItem={(item) => {
                return(
                    <TouchableOpacity onPress={() => onMoviePress(item.item)} style={styles.itemContainer}>
                        <MovieCard movie={item.item}/>
                    </TouchableOpacity>
                )
            }} />
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    moviesList: {
        flex: 1,
        paddingTop: 10
    },
    itemContainer: {
        flex: 1,
        marginBottom: 20,
        marginHorizontal: 20,
    }
});

export default MoviesListScreen;
