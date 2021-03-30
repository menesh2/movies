import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {configureStore, createSlice} from "@reduxjs/toolkit";
import {Provider} from "react-redux";

const store = configureStore({
  reducer: {},
});

export default function App(): React.ReactElement {
  return (
      <Provider store={store}>
        <View style={styles.container}>
          <Text>Open up App.tsx to start working on your app!</Text>
          <StatusBar style="auto" />
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
