import React from 'react';
import { Text, View, StyleSheet, Platform, Button} from 'react-native';
import Constants from 'expo-constants';

export default function Admin({ navigation }) {

    var a;
    console.log(Platform.OS);
    if(Platform.OS!=="web"){
    a = styles.container;
    }
    else{
    a = styles.containerWeb;
    };
    
    return (
      <View style={a}>
        <Text style={styles.labelSignup}>Hi Admin</Text>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Feed Screen</Text>
                <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
                <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />
            </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
  labelSignup: {
    margin: 20,
    marginLeft: 0,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '500'
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: Constants.statusBarHeight,
    padding: 8,
    backgroundColor: '#ffffff',
  },
  containerWeb: {
    flex: 1,
    justifyContent: 'flex-start',
    alignSelf:'center',
    paddingTop: Constants.statusBarHeight,
    marginTop: '2em',
    width: '30em',
    padding:'5em'
  },
});