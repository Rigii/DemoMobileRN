import React from 'react';
import { View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import MapTest from '../map/mapTest'
import ExampleCamera from '../camera/example_camera'
import PlayerTest from '../player/player'


let MyMaps = () => {
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

let MyCamera = () => {

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

class MyPlayer extends React.Component {

  render() {
    return (
      <View style={{flex: 1}}>
        <PlayerTest/>
      </View>
    );
  }
}

const MyDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: MyMaps,
  },
  Notifications: {
    screen: MyCamera,
  },
  Player: {
    screen: MyPlayer,
  }
},
  {
    initialRouteName: 'Home'
  }
  );


export default createAppContainer(MyDrawerNavigator);

 