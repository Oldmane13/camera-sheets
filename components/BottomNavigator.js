import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

import HomeScreen from '../screens/HomeScreen';
import SheetScreen from '../screens/SheetScreen';
import SettingsScreen from '../screens/SettingsScreen';

export default class BottomNavigator extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'home', title: 'Home', icon: 'home' },
      { key: 'sheets', title: 'Sheets', icon: 'assignment' },
      { key: 'settings', title: 'Settings', icon: 'tune'},
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    home: HomeScreen,
    sheets: SheetScreen,
    settings: SettingsScreen,
  });

  render() {
    return (
      <BottomNavigation
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
        activeColor='gold'
        barStyle={{backgroundColor:'black'}}
      />
    );
  }
}