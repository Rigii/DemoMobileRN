import React from 'react';
import { Button, Platform, Image, View, Text, TouchableOpacity } from 'react-native';
import { createAppContainer, NavigationInjectedProps, NavigationScreenProp } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// import { createDrawerNavigator } from 'react-navigation-drawer';
import { ROUTES } from '../../constants/routes'


export class HomeScreen extends React.Component<NavigationInjectedProps> {

  state = {
    count: 0,
  };

  static navigationOptions = () => {
    return {
      headerTitle: () => (
        <TouchableOpacity style={{ padding: 6, backgroundColor: '#fff' }}>
          <Text>Login</Text>
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity style={{ padding: 6, backgroundColor: '#fff' }}>
          <Text>+1</Text>
        </TouchableOpacity>
      ),
    }
  };

  componentDidMount() {
    this.props.navigation.setParams({ increaseCount: this._increaseCount });
  }

  _increaseCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => {
            this.props.navigation.navigate(ROUTES.Drawer, {
              itemId: 86,
              otherParam: { name: 'Vasia', lastName: 'Bobrov' },
            });
          }}
        />
      </View>
    );
  }
}

