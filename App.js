import React from 'react';
import { StyleSheet, Text, View,Platform,StatusBar } from 'react-native';
import {createBottomTabNavigator, createStackNavigator} from 'react-navigation'
import {FontAwesome, Ionicons} from '@expo/vector-icons'
import {Constants} from 'expo'
import {NewDeck} from './components/NewDeck'
import {DeckList} from './components/DeckList'
import {DeckView} from './components/DeckView'
import {blue,white} from './utils/colors'
import {FlashcardStatusBar } from './components/FlashcardStatusBar'



const Tabs = createBottomTabNavigator ({

  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarLabel: 'New Deck',
      tabBarIcon:({tintColor})=><Ionicons name='ios-create' size={30} color={tintColor}/>
    }
  }
  }, {
    navigationOptions: {
      header:null
    },
    tabBarOptions: {
      activeTintColor: Platform.OS==='ios'?blue:white,
      style: {
        height: 56,
        backgroundColor: Platform.OS==='ios'?white:blue,
        shadowColor: 'rgba(0,0,0,0.24)',
        shadowOffset: {
          width:0,
          height:3
        },
        shadowRadius: 6,
        shadowOpacity: 1
      }
    }
  }
)


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
  }
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



  render() {




    return (
      <View style={{flex:1}}>
        <FlashcardStatusBar backgroundColor={blue} barStyle='light-content' />
        <MainNavigator />
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
  title: {
    fontSize: 20,
    textAlign: 'center',
  },

});
