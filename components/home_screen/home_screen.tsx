import React from 'react';
import { Button, Platform, Image, View, Text, TouchableOpacity } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

class HomeScreen extends React.Component {

  state = {
    count: 0,
  };

  static navigationOptions = ({ navigation }) => {
    let butColor = Platform.OS === 'ios' ? '#fff' : null;
    return {
      headerTitle: () => (
        <TouchableOpacity style={{ padding: 6, backgroundColor: butColor }}>
        <Text>Login</Text>
      </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity style={{ padding: 6, backgroundColor: butColor }}>
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
            this.props.navigation.navigate('Details', {
              itemId: 86,
              otherParam: { name: 'Vasia', lastName: 'Bobrov' },
            });
          }}
        />
      </View>
    );
  }
}




class DetailsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    let title = navigation.getParam('otherParam', '').name;
    return {
      title: title,
      headerStyle: {
        backgroundColor: 'green',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  };

  render() {
    const { navigation } = this.props;
    let otherParam = navigation.getParam('otherParam', {});
    let name = JSON.stringify(otherParam.name) || ' ';
    let lastName = JSON.stringify(otherParam.lastName) || ' ';
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(navigation.getParam('itemId', 'NO-ID'))}</Text>
        <Text> Name: {name} </Text>
        <Text> Lastname: {lastName} </Text>

        <TouchableOpacity
          style={{margin: 3, padding: 6, backgroundColor: '#6699cc' }}
          onPress={() => {
            this.props.navigation.navigate('Details', {
              itemId: Math.floor(Math.random()) * 100,
              otherParam: { name: 'Vasia', lastName: 'Bobrov' },
            });
          }}>
          <Text>"Go to Details... again"</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{margin: 3, padding: 6, backgroundColor: '#6699cc' }}
          onPress={() => this.props.navigation.navigate('Home')}
          >
          <Text>"Go to Home"</Text>
        </TouchableOpacity>
      </View>
    );
  }
}


const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
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

