import React, { Component } from 'react'
import { View , Text, TouchableOpacity, Platform, StyleSheet, FlatList } from 'react-native'
import {blue,white} from '../utils/colors'

export class DeckView extends Component {

  static navigationOptions = ({navigation}) => {
    return {
      title: 'Deck List'
    }
  }



    render() {
      const {entryId}=this.props.navigation.state.params

    return (
        <View>
        <Text>NO TEXT? {entryId}</Text>
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
