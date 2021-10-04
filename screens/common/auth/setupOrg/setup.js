import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  Platform,
  TouchableOpacity,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import Constants from "expo-constants";
import * as WebBrowser from "expo-web-browser";
import { RadioButton } from "react-native-paper";
import firebase from "firebase/app";
import "firebase/auth";

export default function Setup({ navigation }) {
  const {
    register,
    setValue,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();
  const [type, setType] = useState("school");

  var a;
  console.log(Platform.OS);
  if (Platform.OS !== "web") {
    a = styles.container;
  } else {
    a = styles.containerWeb;
  }

  const onSubmit = (data) => {
    console.log(data);
    navigation.navigate("setupSchool");
  };

  return (
    <View style={a}>
      <Text style={styles.label}>Set up your organization</Text>

      <Text>Organisation Details</Text>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
            placeholder="Organization Name"
          />
        )}
        name="org"
        rules={{ required: true }}
      />

      <Text>Organisation Type</Text>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <RadioButton.Group
            onValueChange={(newValue) => onChange(newValue)}
            value={value}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text>School</Text>
              <RadioButton value="school" />
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text>College</Text>
              <RadioButton value="college" />
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text>Institute</Text>
              <RadioButton value="institue" />
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text>Private Tutions</Text>
              <RadioButton value="tutions" />
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text>Other</Text>
              <RadioButton value="other" />
            </View>
          </RadioButton.Group>
        )}
        name="type"
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

const styles = StyleSheet.create({
  label: {
    marginBottom: 20,
    marginLeft: 0,
    textAlign: "center",
  },
  button: {
    marginTop: 30,
    color: "white",
    height: 40,
    backgroundColor: "#1f1f1f",
    borderRadius: 4,
  },
  container: {
    flex: 1,
    justifyContent: "flex-start",
    paddingTop: Constants.statusBarHeight,
    padding: 8,
    backgroundColor: "#ffffff",
  },
  containerWeb: {
    flex: 1,
    justifyContent: "flex-start",
    alignSelf: "center",
    paddingTop: Constants.statusBarHeight,
    marginTop: "2em",
    width: "30em",
    padding: "5em",
  },
  input: {
    backgroundColor: "#CED2D9",
    marginTop: 20,
    height: 40,
    padding: 10,
    borderRadius: 4,
    color: "black",
  },
});
