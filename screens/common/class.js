import React, { useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Platform,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import Constants from "expo-constants";
import { Appbar } from "react-native-paper";

export default function Class({ navigation }) {
  var a;

  const dimensions = useWindowDimensions();

  console.log(Platform.OS);
  if (Platform.OS !== "web" || dimensions.width <= 900) {
    a = styles.container;
  } else {
    a = styles.containerWeb;
  }

  useEffect(() => {
    navigation.openDrawer();
  }, []);

  return (
    <View style={styles.container}>
      <Appbar style={styles.bottom}>
        <Appbar.Content title="Classes" />
        <Appbar.Action
          icon="archive"
          onPress={() => console.log("Pressed archive")}
        />
        <TouchableOpacity
          style={{
            marginRight: 15,
            backgroundColor: "black",
            padding: 5,
            paddingLeft: 10,
            paddingRight: 10,
            borderRadius: 5,
          }}
        >
          <Text style={{ fontSize: 17, color: "white" }}>Add Class</Text>
        </TouchableOpacity>
      </Appbar>
      <View>
        <View style={{ flex: 1, flexWrap: "wrap", flexDirection: "row" }}>
          <TouchableOpacity
            style={{
              flex: 1,
              padding: 10,
              borderColor: "grey",
              borderWidth: 2,
              borderStyle: "dashed",
              borderRadius: 20,
              height: 150,
              minWidth: 145,
              maxWidth: 150,
              backgroundColor: "#ebeae8",
              justifyContent: "center",
              alignItems: "center",
              margin: 25,
              alignSelf: "flex-start",
              flexWrap: "wrap",
            }}
            onPress={() => navigation.navigate("section")}
          >
            <Text>Class 1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              padding: 10,
              borderColor: "grey",
              borderWidth: 2,
              borderStyle: "dashed",
              borderRadius: 20,
              height: 150,
              minWidth: 145,
              maxWidth: 150,
              backgroundColor: "#ebeae8",
              justifyContent: "center",
              alignItems: "center",
              margin: 25,
              alignSelf: "flex-start",
              flexWrap: "wrap",
            }}
          >
            <Text>Class 2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              padding: 10,
              borderColor: "grey",
              borderWidth: 2,
              borderStyle: "dashed",
              borderRadius: 20,
              height: 150,
              minWidth: 145,
              maxWidth: 150,
              backgroundColor: "#ebeae8",
              justifyContent: "center",
              alignItems: "center",
              margin: 25,
              alignSelf: "flex-start",
              flexWrap: "wrap",
            }}
          >
            <Text>Class 3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              padding: 10,
              borderColor: "grey",
              borderWidth: 2,
              borderStyle: "dashed",
              borderRadius: 20,
              height: 150,
              minWidth: 145,
              maxWidth: 150,
              backgroundColor: "#ebeae8",
              justifyContent: "center",
              alignItems: "center",
              margin: 25,
              alignSelf: "flex-start",
              flexWrap: "wrap",
            }}
          >
            <Text>Class 4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              padding: 10,
              borderColor: "grey",
              borderWidth: 2,
              borderStyle: "dashed",
              borderRadius: 20,
              height: 150,
              minWidth: 145,
              maxWidth: 150,
              backgroundColor: "#ebeae8",
              justifyContent: "center",
              alignItems: "center",
              margin: 25,
              alignSelf: "flex-start",
              flexWrap: "wrap",
            }}
          >
            <Text>Class 5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              padding: 10,
              borderColor: "grey",
              borderWidth: 2,
              borderStyle: "dashed",
              borderRadius: 20,
              height: 150,
              minWidth: 145,
              maxWidth: 150,
              backgroundColor: "#ebeae8",
              justifyContent: "center",
              alignItems: "center",
              margin: 25,
              alignSelf: "flex-start",
              flexWrap: "wrap",
            }}
          >
            <Text>Class 6</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              padding: 10,
              borderColor: "grey",
              borderWidth: 2,
              borderStyle: "dashed",
              borderRadius: 20,
              height: 150,
              minWidth: 145,
              maxWidth: 150,
              backgroundColor: "#ebeae8",
              justifyContent: "center",
              alignItems: "center",
              margin: 25,
              alignSelf: "flex-start",
              flexWrap: "wrap",
            }}
          >
            <Text>Class 7</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexWrap: "wrap",
    paddingTop: Constants.statusBarHeight,
    padding: 8,
    backgroundColor: "#ffffff",
  },
  box1: {
    flex: 1,
    maxWidth: 400,
    margin: 10,
    backgroundColor: "#34ebab",
    minWidth: 270,
    alignSelf: "flex-start",
  },
  bottom: {
    width: "100%",
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "grey",
  },
});
