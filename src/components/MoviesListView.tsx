import {FlatList, StyleSheet, View, Text, SafeAreaView, TouchableOpacity} from "react-native";
import React, {useEffect, useState} from 'react'
import MovieCard, {Movie} from "./MovieCard";

interface MoviesListViewProps {
    movies: Movie[]
    onMoviePress: (movie: Movie) => void
}

const MoviesListView = ({ movies, onMoviePress }: MoviesListViewProps) => {

    return (
            <FlatList style={styles.moviesList} data={movies} renderItem={(item) => {
                return(
                    <TouchableOpacity onPress={() => onMoviePress(item.item)} style={styles.itemContainer}>
                        <MovieCard movie={item.item}/>
                    </TouchableOpacity>
                )
            }} />
    )
};

const styles = StyleSheet.create({
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

export default MoviesListView;
