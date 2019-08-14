import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { MonoText } from '../components/StyledText';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.welcomeContainer}>
          <Image
            source={
              require('../assets/images/chibib.jpg')
            }
            style={styles.welcomeImage}
          />
        </View>

        <View style={styles.mainContainer}>
          <DevelopmentModeNotice />
          <Text style={styles.getStartedText}>Welcome to camera sheets!</Text>
        </View>

        <View style={styles.aboutContainer}>
          <TouchableOpacity onPress={handleProjectInfoPress} style={styles.aboutLink}>
            <Text style={styles.aboutLinkText}>
              What is this project about?
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.tabBarInfoContainer}>
        <Text style={styles.tabBarInfoText}>
          To do: Check styles for this tab bar down here v!
        </Text>
      </View>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

function DevelopmentModeNotice() {
  if (__DEV__) {
    return (
      <Text style={styles.developmentModeText}>
        Work in progress,
        come back later!
      </Text>
    );
  } 
}

function handleProjectInfoPress() {
  WebBrowser.openBrowserAsync(
    'https://github.com/Oldmane13'
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'white',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  mainContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'white',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'gray',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#2b2b2b',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'white',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  aboutContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  aboutLink: {
    paddingVertical: 15,
  },
  aboutLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
