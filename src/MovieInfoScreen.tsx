
import React, {FC} from "react";
import {Movie} from "./components/MovieCard";
import {Image, Text, SafeAreaView, StyleSheet, ScrollView, View} from "react-native";
import commonStyles from "./utils/styles";
import {useSelector} from "react-redux";
import {AppState} from "../App";
import {findMovieByID} from "./utils/MoviesHelper";

const MovieInfoScreen: FC = () => {
    const { selectedMovieID, movies } = useSelector((state: AppState) => state.moviesReducer)
    const selectedMovie = findMovieByID(movies, selectedMovieID);

    function renderText(text: string): React.ReactElement {
        return <Text style={styles.text}>{text}</Text>
    }

    function renderMainDetailsView(): React.ReactElement {
        return (
            <View style={styles.mainDetailsView}>
                {renderText(`${selectedMovie?.rating}/10`)}
                {renderText(`${selectedMovie?.title}`)}
                {renderText(`${selectedMovie?.runtime}`)}
            </View>
        )
    }
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.contentView} style={styles.container}>
                <Image style={styles.image} source={{uri: selectedMovie?.largeimage }} />
                {renderMainDetailsView()}
                <Text>{selectedMovie?.synopsis}</Text>
            </ScrollView>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    contentView: {
        alignItems: 'center'
    },
    image: {
        height: 500,
        width: "100%"
    },
    mainDetailsView: {
        flexDirection: "row",
        width: '100%',
        justifyContent: "space-between",
        paddingHorizontal: 10
    },
    text: {
        fontSize: 15
    }

});

export default MovieInfoScreen
