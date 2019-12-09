import React from 'react';
import { Button, Platform, Image, View, Text, TouchableOpacity } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

class MyHomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    // drawerIcon: ({ tintColor }) => (
    //   <Image
    //    // source={require('./chats-icon.png')}
    //     style={[styles.icon, { tintColor: tintColor }]}
    //   />
    // ),
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    );
  }
}

class MyNotificationsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Notifications',
    // drawerIcon: ({ tintColor }) => (
    //   <Image
    //     //source={require('./notif-icon.png')}
    //     style={[styles.icon, { tintColor: tintColor }]}
    //   />
    // ),
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.goBack()}
        title="Go back home"
      />
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

const MyDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: MyHomeScreen,
  },
  Notifications: {
    screen: MyNotificationsScreen,
  },
});

export default createAppContainer(MyDrawerNavigator);

 