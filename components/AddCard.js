import React, { Component } from 'react'
import { View , Text, TouchableOpacity, TextInput,Platform, StyleSheet } from 'react-native'
import {blue,white} from '../utils/colors'
import {addCardToDeck} from '../utils/storage'

export class AddCard extends Component {
  state = {
    question: '',
    answer: ''
  }

  static navigationOptions = ({navigation}) => {
    const {entryId}=navigation.state.params
    return {
      title: 'Add card to '+entryId
    }
  }

  toDeck = (deck) => {

    this.props.navigation.goBack()

   }


  saveCard(){
    const {entryId}=this.props.navigation.state.params
    let question = {question:this.state.question,answer:this.state.answer}
    addCardToDeck(entryId,question)
    this.toDeck(entryId)
  }


    render() {
      const {entryId}=this.props.navigation.state.params
      console.log('inside render deckview')
      if (this.props && this.props.screenProps===null) return (<View></View>)
      const decks = this.props.screenProps
      let thisdeck = this.props.screenProps[entryId]

    return (
      <View>
      <Text>Question:</Text>
      <TextInput
             style={{height: 40, borderColor: 'gray', borderWidth: 1}}
             onChangeText={(question) => this.setState({question})}
             value={this.state.question}
           />
           <Text>Answer:</Text>
           <TextInput
                  style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                  onChangeText={(answer) => this.setState({answer})}
                  value={this.state.answer}
                />
           <TouchableOpacity
           onPress={() => {
           this.saveCard();
           }}>
           <View style={styles.button}>
             <Text style={styles.buttonText}>Submit</Text>
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

});
