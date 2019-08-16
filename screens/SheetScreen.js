import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import AppBar from '../components/AppBar';
import { ExpoConfigView } from '@expo/samples';


export default function SheetScreen() {
  return (
    
    <ScrollView style={styles.container}>
      <AppBar title="Sheets" dark = {true} style={{backgroundColor: 'black', borderStyle:'solid', borderColor: 'gold ', borderBottomWidth: 5}}></AppBar>
      {
      }
    </ScrollView>
  );
}

SheetScreen.navigationOptions = {
  title: 'Sheet',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: 'black',
  },
});
