import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from "@react-navigation/stack";
import MoviesListScreen from "./src/MoviesListScreen";

const store = configureStore({
  reducer: {},
});

export type RootStackParamList = {
    MoviesList: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App(): React.ReactElement {
  return (
      <Provider store={store}>
          <NavigationContainer>
              <Stack.Navigator>
                  <Stack.Screen name="MoviesList" component={MoviesListScreen} options={{title: "Our Movies"}} />
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
