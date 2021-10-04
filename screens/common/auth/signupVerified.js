import React from 'react';
import { Text, View, StyleSheet, TextInput, Button, Platform, TouchableOpacity} from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import Constants from 'expo-constants';


export default function SignupVerified({ navigation }) {
  const { register, setValue, handleSubmit, control, reset, formState: { errors } } = useForm();
  
  var a;
  console.log(Platform.OS);
  if(Platform.OS!=="web"){
  a = styles.container;
  }
  else{
  a = styles.containerWeb;
  }

  const onSubmit = data => {
    navigation.navigate('user');
    console.log(data);
  };
  
    return (

      <View style={a}>
        <Text style={styles.labelSignup}>Signup</Text>
          <Text style={styles.label}>Create new password</Text>
  
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={value => onChange(value)}
              value={value}
              placeholder='Password'
              rules={{ required: true }}
            />
          )}
          name="password"
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