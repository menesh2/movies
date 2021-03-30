import {FlatList, StyleSheet, View, Text, SafeAreaView} from "react-native";
import React from 'react'
import MovieCard, {Movie} from "./components/MovieCard";
import {StackNavigationProp} from "@react-navigation/stack/lib/typescript/src/types";
import {RootStackParamList} from "../App";
import { RouteProp } from '@react-navigation/native';
import { useSelector } from 'react-redux';

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

    let movies = useSelector((state : {movies: Movie[]}) => state.movies )

    return (
        <SafeAreaView style={styles.container}>
            <FlatList style={styles.moviesList} data={movies} renderItem={(item) => {
                return(
                    <View style={styles.itemContainer}>
                        <MovieCard movie={item.item}/>
                    </View>
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
