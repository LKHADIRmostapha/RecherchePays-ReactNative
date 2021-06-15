/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import type {Node} from 'react';
import React, { Component } from 'react'; 
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



class PageDeRecherche extends Component<Props>
{
render() {
return <Text style={styles.description}>Rechercher des pays du monde entier! </Text>;
 }

}

const Pile = createStackNavigator();
function MaPile() {
 return (
 <Pile.Navigator>
 <Pile.Screen name="Accueil" component={PageDeRecherche} />
 </Pile.Navigator>
 );
}
export default class App extends Component<Props> {

render()
 {
return (
<NavigationContainer>
 <MaPile />
</NavigationContainer>
 );
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

