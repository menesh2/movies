import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from "@react-navigation/stack";
import MoviesListScreen from "./src/MoviesListScreen";
import moviesReducer, {MoviesReducerState} from "./src/redux/MoviesReducer"
import MovieInfoScreen from "./src/MovieInfoScreen";

export interface AppState {
    moviesReducer: MoviesReducerState
}

const store = configureStore({
  reducer: {
      moviesReducer: moviesReducer
  },
});

export type RootStackParamList = {
    MoviesList: undefined;
    MovieInfo: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App(): React.ReactElement {
  return (
      <Provider store={store}>
          <NavigationContainer>
              <Stack.Navigator initialRouteName={"MoviesList"}>
                  <Stack.Screen name="MoviesList" component={MoviesListScreen} options={{
                      title: "Our Movies",
                      headerStyle: {
                          backgroundColor: '#fff',
                      }}} />
                  <Stack.Screen name="MovieInfo" component={MovieInfoScreen}/>
              </Stack.Navigator>
          </NavigationContainer>
      </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
