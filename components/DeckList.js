import React, { Component } from 'react'
import { View , Text, TouchableOpacity, TouchableHighlight, Platform, StyleSheet, FlatList } from 'react-native'
import {blue,white} from '../utils/colors'
import {NewDeck} from './NewDeck'
import {getDecks} from '../utils/storage'


export class DeckList extends Component {
    render() {

      if (this.props && this.props.screenProps===null) return (<View></View>)
      const decks = this.props.screenProps
      let dataarray = Object.keys(decks).map(function(val){
        return {'key': val, ...decks[val]}
      })

/*
      console.log("DeckList Render")
      console.log("====")
      console.log(this.props.data)
      console.log(this.props.screenProps)
      console.log("====")
*/

    return (



      <View style={styles.container}>
      <View style={styles.headerContainer}>
      <View style={styles.titleview}>
        <Text style={styles.title}> Deck List </Text>
        </View>
        <TouchableHighlight
  //onPress={() => {    this.setModalVisible(true);}}

  onPress={() => this.props.navigation.navigate('NewDeck')}

  >

        <View style={styles.button}>

          <Text style={styles.buttonText}>Add</Text>
        </View>
        </TouchableHighlight>
      </View>
      <FlatList
  data={dataarray}
  renderItem={({item}) => <TouchableOpacity
      onPress={() => this.props.navigation.navigate('DeckView',{entryId: item.key})}
    >
    <View><Text>{item.key}</Text><Text>{item.questions.length} Cards</Text></View></TouchableOpacity>}
  ItemSeparatorComponent= {()=><View style={styles.separator}/>}
/>
      </View>
    )
    }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    padding: 10,
    backgroundColor: blue,
    alignSelf: 'center',
    borderRadius: 5,
    margin: 20,
  },
  buttonText :{
    color: white,
    fontSize: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  titleview: {
    padding: 10,
    alignSelf: 'center',
    margin: 20,
  },

  title: {
    fontSize: 20,
    textAlign: 'center',
  },
  rowcontainer: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowtext: {
    marginLeft: 12,
    fontSize: 16,
  },
  separator: {
  flex: 1,
  height: StyleSheet.hairlineWidth,
  backgroundColor: '#8E8E8E',
},

});
