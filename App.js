import React from 'react';
import { StyleSheet, Text, View,Platform,StatusBar } from 'react-native';
import {createBottomTabNavigator, createStackNavigator} from 'react-navigation'
import {FontAwesome, Ionicons} from '@expo/vector-icons'
import {Constants} from 'expo'
import {NewDeck} from './components/NewDeck'
import {DeckList} from './components/DeckList'
import {DeckView} from './components/DeckView'
import {AddCard} from './components/AddCard'
import {Quiz} from './components/Quiz'
import {blue,white} from './utils/colors'
import {FlashcardStatusBar } from './components/FlashcardStatusBar'
import {initDataStore} from './utils/storage'
import { setLocalNotification } from './utils/helpers'




const MainNavigator = createStackNavigator({
  Home : {
    screen: DeckList,
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: blue
      }
    }
  },
  DeckView: {
    screen: DeckView,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: blue
      }
    }
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: blue
      }
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: blue
      }
    }
  }},
  {
    //headerMode: 'none',
    navigationOptions: {
      headerStyle: {height: 0}
    },
})
//https://medium.com/handlebar-labs/replace-a-screen-using-react-navigation-a503eab207eb
const prevGetStateForActionHomeStack = MainNavigator.router.getStateForAction;
MainNavigator.router.getStateForAction = (action, state) => {
    if (state && action.type === 'ReplaceCurrentScreen') {
      const routes = state.routes.slice(0, state.routes.length - 1);
      routes.push(action);
      return {
        ...state,
        routes,
        index: routes.length - 1,
      };
    }
    return prevGetStateForActionHomeStack(action, state);
  }



export default class App extends React.Component {
state = {
  data : null
}

  dataChanged = (data)=>{
     console.log("dataChanged")
     console.log(data)
     this.setState({data:data})
   }
  componentDidMount(){
        initDataStore(this.dataChanged)
        setLocalNotification()

  }

  render() {


    console.log("render called in App")
    //https://github.com/react-navigation/react-navigation/issues/577
    const stateClone = Object.assign({}, this.state.data);

    return (
      <View style={{flex:1}}>
      <FlashcardStatusBar backgroundColor={blue} barStyle='light-content' />
        <MainNavigator  screenProps={stateClone}/>
      </View>
    )
  }
}
