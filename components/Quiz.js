import React, { Component } from 'react'
import { View , Text, TouchableOpacity, Platform, StyleSheet } from 'react-native'
import {blue,white} from '../utils/colors'
import { setLocalNotification,clearLocalNotification } from '../utils/helpers'

export class Quiz extends Component {
  state = {
    right: 0,
    wrong: 0,
    currentCard: 0,
    answer: false
  }

  static navigationOptions = ({navigation}) => {
    const {entryId}=navigation.state.params
    return {
      title: 'Quiz for '+entryId
    }
  }
    componentDidMount(){

    clearLocalNotification()
        .then(setLocalNotification)
      }

    render() {
      const {entryId}=this.props.navigation.state.params
      console.log('inside render deckview')
      if (this.props && this.props.screenProps===null) return (<View></View>)
      const decks = this.props.screenProps
      let thisdeck = this.props.screenProps[entryId]
      let thisQuestion = thisdeck.questions[this.state.currentCard]
      let totalQuestions = thisdeck.questions.length


      if (this.state.currentCard >= totalQuestions  )
        return (
          <View>
          <Text style={styles.title}>Results</Text>
          <Text style={styles.title}>{this.state.right}/{totalQuestions} correct, {((this.state.right/totalQuestions)*100).toFixed(1)}%</Text>
          <TouchableOpacity
              onPress={() => { this.setState({currentCard:0, right: 0, wrong:0,answer:false})}}
          >
          <View style={styles.button}>
            <Text style={styles.buttonText}>Restart Quiz</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={() => {     this.props.navigation.goBack() }}
          >
          <View style={styles.button}>
            <Text style={styles.buttonText}>Back To Deck</Text>
          </View>
          </TouchableOpacity>

          </View>
        )

    return (
        <View>
        <View style={styles.titleview}>
        <Text style={styles.title}>{this.state.currentCard+1}/{totalQuestions}</Text>
        { this.state.answer===true ? <Text style={styles.title}>{thisQuestion.answer}</Text>
        :<Text style={styles.title}>{thisQuestion.question}</Text>
      }
        </View>
        <TouchableOpacity
        onPress={() => this.setState({answer:!this.state.answer})}
        >
        <View style={styles.button}>
        { this.state.answer===true ? <Text style={styles.title}>show question</Text>
        :<Text style={styles.title}>show answer</Text>
      }
        </View>
        </TouchableOpacity>
        <TouchableOpacity
            onPress={() => { this.setState({currentCard:this.state.currentCard+1, right: this.state.right+1,answer:false})}}
        >
        <View style={styles.button}>
          <Text style={styles.buttonText}>Correct</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={() => { this.setState({currentCard:this.state.currentCard+1, right: this.state.wrong+1,answer:false})}}
        >
        <View style={styles.button}>
          <Text style={styles.buttonText}>Incorrect</Text>
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
