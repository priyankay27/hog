import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Button, Platform, TouchableOpacity} from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import Constants from 'expo-constants';
import * as WebBrowser from 'expo-web-browser';
import firebase from "firebase/app";
import "firebase/auth";

export default function Login({ navigation }) {
  const { register, setValue, handleSubmit, control, reset, formState: { errors } } = useForm();
  const [verificationId,setVerificationId] = useState('');

  var a;
  console.log(Platform.OS);
  if(Platform.OS!=="web"){
    a = styles.container;
  }
  else{
    a = styles.containerWeb;
  }
  
  setTimeout(function(){ 
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('idid', {
      'size': 'invisible',
      'callback': (response) => {
        console.log(response);
      }
    });
    const recaptchaVerifier = window.recaptchaVerifier;
  
    recaptchaVerifier.render().then((widgetId) => {
      window.recaptchaWidgetId = widgetId;
    }).catch((error)=>{
      console.log(error);
    }) 
  }, 500);

  const onNext = data => {
    const phoneNumber = data.num;
    const appVerifier = window.recaptchaVerifier;
    firebase.auth().signInWithPhoneNumber(phoneNumber,appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setVerificationId(confirmationResult.verificationId);
        console.log("code sent");

      }).catch(function(error) {
        console.log(error);
      });
  }

  const onSubmit = data => {
    confirmationResult.confirm(data.otp).then(function(result){
      var user=result.user;
      console.log(user);
    }).catch(function(error){
      console.log(error)
    })
  };

  if(verificationId){
    return(
      <View style={a}>

      <Text style={styles.labelSignup}>Login</Text>
        <Text style={styles.label}>Welcome back user, login to continue!</Text>
        <Text style={styles.label}>Enter OTP</Text>
      
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={value => onChange(value)}
              value={value}
              placeholder='Enter OTP'
            />
          )}
          name="otp"
          rules={{ required: true }}
        />

        <View style={styles.button}>
          <Button
            style={styles.buttonInner}
            color
            title="Next"
            onPress={handleSubmit(onSubmit)}
          />
        </View>
      </View>
  );
  }
  
    return (

      <View style={a}>
        <View nativeID='idid'/>
        {/* <Button title="Open WebBrowser" onPress={_handlePressButtonAsync} /> */}

        <Text style={styles.labelSignup}>Login</Text>
          <Text style={styles.label}>Welcome back user, login to continue!</Text>
          <Text style={styles.label}>Enter your mobile number</Text>
        
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={value => onChange(value)}
              value={value}
              placeholder='Number'
            />
          )}
          name="num"
          rules={{ required: true }}
        />
  
        <View style={styles.button}>
          <Button
            style={styles.buttonInner}
            color
            title="Next"
            onPress={handleSubmit(onNext)}
          />
        </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
  label: {
    marginBottom: 20,
    marginLeft: 0,
    textAlign: 'center'
  },
  labelLogin: {
    marginTop: 30,
    textAlign: 'center'
  },
  labelSignup: {
    margin: 20,
    marginLeft: 0,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '500'
  },
  button: {
    marginTop: 30,
    color: 'white',
    height: 40,
    backgroundColor: '#1f1f1f',
    borderRadius: 4,
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
  input: {
    backgroundColor: '#CED2D9',
    marginTop: 20,
    height: 40,
    padding: 10,
    borderRadius: 4,
    color: 'black',
  },
});