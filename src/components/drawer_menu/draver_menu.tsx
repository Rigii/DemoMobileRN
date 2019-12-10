import React from 'react';
import { View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import MapTest from '../map/mapTest'
import ExampleCamera from '../camera/example_camera'
import PlayerTest from '../player/player'

const MyDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: MapTest,
  },
  Notifications: {
    screen: ExampleCamera,
  },
  Player: {
    screen: PlayerTest,
  }
},
  {
    initialRouteName: 'Home'
  }
  );


export default createAppContainer(MyDrawerNavigator);

 