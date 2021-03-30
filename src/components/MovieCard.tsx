import React from "react";
import {Image, StyleSheet, Text, View} from "react-native";
import commonStyles from "../utils/styles";

export interface Movie {
    id: string,
    title: string,
    image: string,
    synopsis: string,
    rating: string,
    type: string,
    released: string,
    runtime: string,
    largeimage: string,
    unogsdate: string,
    imdbid: string,
    download: string
}

interface MovieCardProps {
    movie: Movie
}

const MovieCard: React.FC<MovieCardProps> = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.movie.title}</Text>
            <Image resizeMode={"contain"} style={styles.image} source={{uri: props.movie.image}} />
        </View>
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

export default MovieCard
