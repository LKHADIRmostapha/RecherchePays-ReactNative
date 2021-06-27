import React, { Component } from 'react'
import {
 StyleSheet,
 Image,
 View,
 TouchableHighlight,
 FlatList,
 Text,
 ListItem
} from 'react-native';

type Props = {};
export default class ResultatsDeRecherche extends Component<Props> {
 _extracteurClef = (item, index) => index.toString();

_rendreItem = ({item, index}) => (
 <ListItem
 item={item}
 index={index}
 onPressItem={this._itemAppuye}
 />
 
);

_itemAppuye = (index) => {
 console.log('Ligne appuyée : '+index);
}; 




 render() {
 console.log(this.props.route.params);
 const { listings } = this.props.route.params;
 return (
 <FlatList
 data={listings}
 keyExtractor={this._extracteurClef}
 renderItem={this._rendreItem}
 />
 );
 }
}
const styles = StyleSheet.create({
 conteneurTexte: {
 flex: 1
 },
 separateur: {
 height: 1,
 backgroundColor: '#eedded'
 },
 nom: {
 fontSize: 25,
 fontWeight: 'bold',
 color: '#58BEEC'
 },
 region: {
 fontSize: 20,
 color: '#656565'
 },
 conteneurLigne: {
 flexDirection: 'row',
 padding: 10
 },
});

