import React, { Component } from 'react'
import { View , Text, Modal, TouchableOpacity, TouchableHighlight, Platform, StyleSheet, FlatList } from 'react-native'
import {blue,white} from '../utils/colors'
import {NewDeck} from './NewDeck'

const myjs={
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}


export class DeckList extends Component {
  state = {
    listdata: null,
    modalVisible: false,

  }
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  componentDidMount(){
    let {dataSource} = this.state

    //let myarray = Object.keys(myjs)
let working = [{key: 'a'}, {key: 'b'},{key: 'c'}]

let dataarray = Object.keys(myjs).map(function(val){
  return {'key': val, ...myjs[val]}
})
console.log(dataarray)
this.setState({listdata: dataarray})


    //this.setState({listdata: [{key: 'a'}, {key: 'b'},{key: 'c'}]})
    //this.setState({listdata: myarray})
    //this.setState({listdata: myjs})
  //  console.log(myarray)
  }
    renderFooter = () => {
      return (
        <View style={styles.button}>
          <Text style={styles.buttonText}>Footer Button</Text>
        </View>
      )
    }
    render() {

    return (



      <View style={styles.container}>
      <Modal
                animationType="slide"
                transparent={false}
                visible={this.state.modalVisible}
                onRequestClose={() => {
                  alert('Modal has been closed.');
                }}>
                <View style={{marginTop: 22}}>
                  <View>
                    <NewDeck/>

                    <TouchableHighlight
                      onPress={() => {
                        this.setModalVisible(!this.state.modalVisible);
                      }}>
                      <Text>Hide Modal</Text>
                    </TouchableHighlight>
                  </View>
                </View>
              </Modal>

       <View style={styles.headerContainer}>

      <View style={styles.titleview}>
        <Text style={styles.title}> Deck List </Text>
        </View>
        <TouchableHighlight
  onPress={() => {
    this.setModalVisible(true);
  }}>

        <View style={styles.button}>

          <Text style={styles.buttonText}>Add</Text>
        </View>
        </TouchableHighlight>
      </View>
      <FlatList
  data={this.state.listdata}
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
