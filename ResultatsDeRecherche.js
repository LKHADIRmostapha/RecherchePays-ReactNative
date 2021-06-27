import React, { Component } from 'react'
import {
 StyleSheet,
 Image,
 View,
 TouchableHighlight,
 FlatList,
 Text,
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
 backgroundColor: '#eedded',
 color: "#050505"
 },
 nom: {
 fontSize: 25,
fontWeight : "bold",
 color: '#050505'
 },
 region: {
 fontSize: 22,
 color: '#224' 
 },
 conteneurLigne: {
 flexDirection: 'row',
 padding: 18
 },
 subregion:{
     fontSize: 18,
     color : "#806624"
 },
 capital:{
    color : "#806624",
    fontSize: 18

 },
 population:{
        color : "#806624",
    fontSize: 18


 }

});

class ListItem extends React.PureComponent {
 _itemAppuye = () => {
 this.props.onPressItem(this.props.index);
 }
 render() {
 const item = this.props.item;
 return (
 <TouchableHighlight
 onPress={this._itemAppuye}
 underlayColor='#eedddd'>
 <View>
 <View style={styles.conteneurLigne}>
 <View style={styles.conteneurTexte}>
 <Text style={styles.nom}>{item.name}</Text>
 <Text style={styles.region}>{item.region}</Text>
 <Text style={styles.subregion}>{item.subregion}</Text>
 <Text style={styles.capital}>{item.capital}</Text>
 <Text style={styles.population}>{item.population}</Text>
 <Text style={styles.population}> {item.demonym}</Text>
 <Text style={styles.population}> {item.demonym}</Text>
  

 </View>
 </View>
 <View style={styles.separator}/>
 </View>
 </TouchableHighlight>
 );
 }
}

