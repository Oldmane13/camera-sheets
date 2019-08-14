import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';


export default function SheetScreen() {
  return (
    <ScrollView style={styles.container}>
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
