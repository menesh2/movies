import {FlatList, StyleSheet, View, Text, SafeAreaView, TouchableOpacity} from "react-native";
import React, {useEffect, useState} from 'react'
import MovieCard, {Movie} from "./components/MovieCard";
import {StackNavigationProp} from "@react-navigation/stack/lib/typescript/src/types";
import {AppState, RootStackParamList} from "../App";
import { RouteProp } from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import { Searchbar } from 'react-native-paper';
import { searchMoviesForName } from "./utils/MoviesHelper";
import {getMoviesFromRemote, setSelectedMovieID} from "./redux/MoviesReducer"
import MoviesListView from "./components/MoviesListView";

type MoviesContainerNavigationProp = StackNavigationProp<
    RootStackParamList,
    'MoviesContainer'
    >;

type MoviesContainerScreenRouteProp = RouteProp<RootStackParamList, 'MoviesContainer'>

type Props = {
    route: MoviesContainerScreenRouteProp;
    navigation: MoviesContainerNavigationProp;
};

const MoviesContainer = ({ navigation }: Props) => {

    const movies = useSelector((state: AppState) => state.moviesReducer.movies );
    const [searchText, setSearchText] = useState('');
    const [moviesToShow, setMoviesToShow] = useState(movies);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMoviesFromRemote())
    }, []);

    useEffect(() => {
        let matchingMovies = searchMoviesForName(movies, searchText);
        setMoviesToShow(matchingMovies)

    }, [searchText]);

    useEffect(() => {
        setSearchText('');
        setMoviesToShow(movies)
    }, [movies]);

    const onMoviePress = (movie: Movie) => {
        dispatch(setSelectedMovieID(movie.id));
        navigation.navigate("MovieInfo")
    };

    return (
        <SafeAreaView style={styles.container}>
            <Searchbar value={ searchText} placeholder="find a movie" onChangeText={(newSearchText) => setSearchText(newSearchText)}/>
            <MoviesListView movies={moviesToShow} onMoviePress={(movie) => onMoviePress(movie)} />
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

export default MoviesContainer;
