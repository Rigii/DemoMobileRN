import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { createAppContainer, NavigationScreenProp } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import  MyDrawerNavigator  from '../../components/drawer_menu/draver_menu'
import { HomeScreen} from './home';
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
