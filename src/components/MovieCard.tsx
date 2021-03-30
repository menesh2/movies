import React from "react";
import {StyleSheet, Text, View} from "react-native";

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
            <Text>${props.movie.id}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "red"
    },
});

export default MovieCard
