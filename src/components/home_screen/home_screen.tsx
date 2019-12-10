import React from 'react';
import { Button, Platform, Image, View, Text, TouchableOpacity } from 'react-native';
import { createAppContainer, NavigationInjectedProps, NavigationScreenProp } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import  MyDrawerNavigator  from '../drawer_menu/draver_menu'
// import { createDrawerNavigator } from 'react-navigation-drawer';
import { ROUTES } from '../../constants/routes'

const navigationOptionsHeader = ({ navigation }: { navigation: NavigationScreenProp<any>}) => {
  return {
    headerLeft: (
      <TouchableOpacity
        style={{ backgroundColor: 'yellow', padding: 15 }}
        onPress={() => navigation.toggleDrawer()}
      >
        <Text style={{ color: 'blue' }}>MENU</Text>
      </TouchableOpacity>
    )
  };
};

class HomeScreen extends React.Component<NavigationInjectedProps> {

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

const AppNavigator = createStackNavigator(
  {
    [ROUTES.Home]: HomeScreen,
    [ROUTES.Drawer]: {
      screen: MyDrawerNavigator,
      navigationOptions: navigationOptionsHeader
    },
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

export default createAppContainer(AppNavigator);

// class DraverModules extends React.Component {
//   static navigationOptions = (params: any) => {
//     return {
//       headerLeft: () => {
//         const onPress = () => params.navigation.toggleDrawer();
//         return (
//         <TouchableOpacity style={{ backgroundColor: 'yellow', padding: 15 }} onPress={onPress}>
//           <Text>TOGGLE DRAWER</Text>
//           </TouchableOpacity>)
//       }
//     }
//   }
  
//   static router = MyDrawerNavigator.router;

//   render() {
//     const { navigation } = this.props;
//     return <MyDrawerNavigator navigation={navigation} />;
//   }
// }