import React from 'react';
import { StyleSheet, Text, View,Platform,StatusBar } from 'react-native';
import {Constants} from 'expo'


export function FlashcardStatusBar({backgroundColor,...props}){
  return(
    <View style={{backgroundColor,height:Constants.statusBarHeight}}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props}/>
    </View>
  )
}
