import React from 'react';
import { Button, Platform, Image, View, Text, TouchableOpacity } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { StyleSheet } from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer';
import MapTest from '../map/mapTest'
import ExampleCamera from '../camera/example_camera'


class MyHomeScreen extends React.Component {

  render() {
    return (
      <View style={{flex: 1}}>
        <MapTest/>
        {/* <Button
        onPress={() => this.props.navigation.navigate('Notifications')}
        title="Go to notifications"
        color="red"
      /> */}
      </View>
    );
  }
}

class MyNotificationsScreen extends React.Component {

  render() {
    return (
      <View style={{flex: 1}}>
        <ExampleCamera/>
        {/* <Button
        onPress={() => this.props.navigation.navigate('Home')}
        title="Go to home"
        color="red"
      /> */}
      </View>
    );
  }
}

const MyDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: MyHomeScreen,
  },
  Notifications: {
    screen: MyNotificationsScreen,
  }},
  {
    initialRouteName: 'Home'
  }
  );


export default createAppContainer(MyDrawerNavigator);

 