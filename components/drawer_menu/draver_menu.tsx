import React from 'react';
import { Button, Platform, Image, View, Text, TouchableOpacity } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { StyleSheet } from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer';
// import { createStackNavigator } from 'react-navigation-stack';

let butColor = Platform.OS === 'ios' ? '#fff' : null;

// const navigationOptionsHeader = ({ navigation }) => {
//   function toggleDrawer() {
//     navigation.navigate('DrawerToggle')
//   }
//   return {
//     headerRight: (
//     <TouchableOpacity 
//     style={{ paddingLeft: 6, backgroundColor: butColor }}
//     onPress={toggleDrawer}
//     >
//           <Text>MENU</Text>
//         </TouchableOpacity>
//     )
//   };
// };

class MyHomeScreen extends React.Component {

  render() {
    return (
      <View style={{flex: 1,alignItems: 'center', justifyContent:'center'}}>
        <Button
        onPress={() => this.props.navigation.navigate('Notifications')}
        title="Go to notifications"
        color="red"
      />
      </View>
    );
  }
}

class MyNotificationsScreen extends React.Component {

  render() {
    return (
      <View style={{flex: 1,alignItems: 'center', justifyContent:'center'}}>
        <Button
        onPress={() => this.props.navigation.navigate('Home')}
        title="Go to home"
        color="red"
      />
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
    initialRouteName: 'Home',
   // navigationOptions: navigationOptionsHeader
  }
  );


export default createAppContainer(MyDrawerNavigator);

 