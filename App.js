import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import FacebookScreen from './screens/fb';
import InstagramScreen from './screens/in';
import AppHeader from './AppHeader';

export default class App extends React.Component {
  render() {
    return(
      //<View>
       //<AppHeader/>
        <AppContainer/>
      //</View>
    )
  }
}

const TabNavigator = createBottomTabNavigator({
  Facebook: {screen: FacebookScreen},
  Instagram: {screen: InstagramScreen}
});

const AppContainer = createAppContainer(TabNavigator);