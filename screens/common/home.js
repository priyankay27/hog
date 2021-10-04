import React, {useState, useEffect} from 'react';
import { View, StyleSheet, Platform, Text, SafeAreaView} from 'react-native';
import Constants from 'expo-constants';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import { ScrollView } from 'react-native-gesture-handler';
import firebase from "firebase/app";
import "firebase/auth";

export default function Home({ navigation }) {

  var a;

  console.log(Platform.OS);

  if(Platform.OS!=="web"){
  a = styles.container;
  }
  else{
  a = styles.containerWeb;
  };

  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  useEffect(() => {
    navigation.setOptions({ headerRight: props => <MenuIcon {...props} /> })
  }, []);

  const signout=()=>{
    firebase.auth().signOut().then(() => {
      console.log("signed out");
    }).catch((error) => {
      console.log(error);
    });
  }

  function MenuIcon() {
    return (
      <View style={{flexDirection:'row',marginRight:100,alignItems:'center'}}>
      <Ionicons name="menu-outline" size={32} color="black" style={{marginRight:10}} onPress={openMenu}  />
      <AntDesign name="logout" size={24} color="black" style={{marginRight:10}} onPress={signout}/>
      </View>
    );
  };

    return (
      <ScrollView>
      <SafeAreaView style={{flexDirection:'row'}}>

      <View style={{
        flex: 1,
        padding: 10,
        flexWrap: 'wrap',
      }}>

            <View style={{
                flex: 1,
                minWidth: 250,
                maxWidth: 500,
                alignSelf: 'flex-start',
                flexWrap: 'wrap',
                flexGrow: 1,
                flexShrink: 1,
                padding: 10,
              }}>
              <Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </Text>
            </View>

            <View style={{
                flex: 1,
                minWidth: 250,
                maxWidth: 500,
                alignSelf: 'flex-start',
                flexWrap: 'wrap',
                flexGrow: 1,
                flexShrink: 1,
                padding: 10,
              }}>
              <Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </Text>
            </View>

            <View style={{
                flex: 1,
                minWidth: 250,
                maxWidth: 500,
                alignSelf: 'flex-start',
                flexWrap: 'wrap',
                flexGrow: 1,
                flexShrink: 1,
                padding: 10,
              }}>
              <Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </Text>
            </View>

      </View>


      <View style={{
        flex: 1,
        padding: 10,
        flexWrap: 'wrap',
      }}>

            <View style={{
                flex: 1,
                minWidth: 250,
                maxWidth: 500,
                alignSelf: 'flex-start',
                flexWrap: 'wrap',
                flexGrow: 1,
                flexShrink: 1,
                padding: 10,
              }}>
              <Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </Text>
            </View>

            <View style={{
                flex: 1,
                minWidth: 250,
                maxWidth: 500,
                alignSelf: 'flex-start',
                flexWrap: 'wrap',
                flexGrow: 1,
                flexShrink: 1,
                padding: 10,
              }}>
              <Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </Text>
            </View>

            <View style={{
                flex: 1,
                minWidth: 250,
                maxWidth: 500,
                alignSelf: 'flex-start',
                flexWrap: 'wrap',
                flexGrow: 1,
                flexShrink: 1,
                padding: 10,
              }}>
              <Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </Text>
            </View>

      </View>
      </SafeAreaView>
      </ScrollView>
    );
  };
  
const styles = StyleSheet.create({
  container: {
    display:'flex',
    paddingTop: Constants.statusBarHeight,
    padding: 8,
    backgroundColor: '#ffffff',
    overflow:'scroll',
  },

  content:{
    flex:1,
    flexDirection: 'row', 
    flexWrap: 'wrap',
    justifyContent:'flex-start'
  },

  course: {
    backgroundColor: '#e1f1f7',
    borderRadius: 10,
    display: 'flex',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 15,
    marginBottom: 10,
    overflow: 'hidden',
    padding: 25,
    maxWidth:400,
    minWidth:320,
    height:140,
    shadowOffset:{
       height:3,
       width:3
    },
    shadowOpacity:0.1,
    shadowColor:'black',
  },

});