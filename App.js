
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
// import type { Node } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Quiz from './src/Quiz';
import Result from './src/Result';
import Welcome from './src/Welcome';
import { Navigation } from '@react-navigation/native';

import MyStack from './Navigation/Index'

const App = () => {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
    // <View style={styles.Container}>
    //   {/* <Quiz /> */}
    //   <Welcome />
    // </View>



  );
};


const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    paddingHorizontal: 16
  }
});

export default App;

// <View style={styles.Container}>

// <Welcome />
{/* <Quiz /> */ }
{/* <Result /> */ }
    // </View>
