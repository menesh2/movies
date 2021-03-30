
import React, {FC} from "react";
import {Movie} from "./components/MovieCard";
import {Image, Text, SafeAreaView, StyleSheet} from "react-native";
import commonStyles from "./utils/styles";
import {useSelector} from "react-redux";
import {AppState} from "../App";
import {findMovieByID} from "./utils/MoviesHelper";

const MovieInfoScreen: FC = () => {
    const { selectedMovieID, movies } = useSelector((state: AppState) => state.moviesReducer)
    const selectedMovie = findMovieByID(movies, selectedMovieID);

    return (
        <SafeAreaView>
            <Text>{selectedMovie?.title}</Text>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        borderRadius: 10,
        padding: 10,
        ...commonStyles.containerWithShadow
    },
    image: {
        height: 150,
        width: 100
    },
    title: {
        fontSize: 30
    }
});

export default MovieInfoScreen
