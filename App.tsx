import React from 'react';
import { StyleSheet, View } from 'react-native';
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import MoviesList from "./src/MoviesListScreen"

const store = configureStore({
  reducer: {},
});

export default function App(): React.ReactElement {
  return (
      <Provider store={store}>
        <View style={styles.container}>
          <MoviesList />
        </View>
      </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
