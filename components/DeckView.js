import React, { Component } from 'react'
import { View , Text, TouchableOpacity, Platform, StyleSheet } from 'react-native'
import {blue,white} from '../utils/colors'

export class DeckView extends Component {
  state = {
    entryData: null,
  }

  static navigationOptions = ({navigation}) => {
    const {entryId}=navigation.state.params
    return {
      title: entryId,
    }
  }



    render() {
      const {entryId}=this.props.navigation.state.params
      //console.log('inside render deckview')
      if (this.props && this.props.screenProps===null) return (<View></View>)
      const decks = this.props.screenProps
      let thisdeck = this.props.screenProps[entryId]

    return (
        <View>
        <View style={styles.titleview}>
        <Text style={styles.title}>{entryId}</Text>
        <Text style={styles.title}>{thisdeck.questions.length} cards</Text>
        </View>
        <TouchableOpacity
        onPress={() => this.props.navigation.navigate('AddCard',{entryId: entryId})}
        >
        <View style={styles.button}>
          <Text style={styles.buttonText}>Add Card</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Quiz',{entryId: entryId})}
        >
        <View style={styles.button}>
          <Text style={styles.buttonText}>Start Quiz</Text>
        </View>
        </TouchableOpacity>
        </View>
    )
    }

}


const styles = StyleSheet.create({
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
  titleview: {
    padding: 10,
    alignSelf: 'center',
    margin: 20,
  },

  title: {
    fontSize: 20,
    textAlign: 'center',
  },

});
