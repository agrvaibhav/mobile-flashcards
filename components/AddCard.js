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
