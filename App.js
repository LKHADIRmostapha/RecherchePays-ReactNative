/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import type {Node} from 'react';
import React, { Component } from 'react'; 

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';



export default class App extends Component<Props>
{
render() {
return <Text style={styles.description}>Rechercher des pays du monde entier! </Text>;
 }

}


const styles = StyleSheet.create({
 description: {
 fontSize: 18,
 textAlign: 'center',
 color: '#656565',
 marginTop: 65,
 },
});

