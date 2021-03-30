
import React, {FC} from "react";
import {Movie} from "./components/MovieCard";
import {Image, Text, SafeAreaView, StyleSheet, ScrollView, View, useWindowDimensions} from "react-native";
import commonStyles from "./utils/styles";
import {useSelector} from "react-redux";
import {AppState} from "../App";
import {findMovieByID} from "./utils/MoviesHelper";
import HTML from "react-native-render-html";

const MovieInfoScreen: FC = () => {
    const { selectedMovieID, movies } = useSelector((state: AppState) => state.moviesReducer)
    const selectedMovie = findMovieByID(movies, selectedMovieID);

    function renderText(text: string): React.ReactElement {
        return <Text style={styles.text}>{text}</Text>
    }

    function renderMainDetailsView(): React.ReactElement {
        return (
            <View style={styles.mainDetailsView}>
                {selectedMovie?.rating !== '' && renderText(`${selectedMovie?.rating}/10`)}
                {renderText(`${selectedMovie?.title}`)}
                {renderText(`${selectedMovie?.runtime}`)}
            </View>
        )
    }

    function renderMovieExplanation(text: string = ''): React.ReactElement {
        return  <HTML allowFontScaling containerStyle={styles.movieExplanation} source={{ html: text }} />
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.contentView} style={styles.container}>
                <Image style={styles.image} source={{uri: selectedMovie?.largeimage }} />
                {renderMainDetailsView()}
                {renderMovieExplanation(selectedMovie?.synopsis)}
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
    },
    movieExplanation: {
        flex: 1,
        marginTop: 20,
        marginHorizontal: 3
    }

});

export default MovieInfoScreen
