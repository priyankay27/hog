import React, { useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Platform,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import { Appbar } from "react-native-paper";

export default function SubSection({ navigation }) {
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

  const image = {
    uri: "https://reactjs.org/logo-og.png",
  };

  return (
    <View style={styles.container}>
      <Appbar style={styles.bottom}>
        <View style={{ width: "100%", flexDirection: "row", flexWrap: "wrap" }}>
          <Appbar.Content
            title={
              <Text style={{ color: "white", fontSize: 30 }}>Section A</Text>
            }
            subtitle={
              <Text style={{ color: "white", fontSize: 17 }}> Class 1 </Text>
            }
          />
          <TouchableOpacity
            style={{
              marginRight: 15,
              backgroundColor: "black",
              padding: 5,
              paddingLeft: 5,
              paddingRight: 15,
              borderRadius: 30,
              flexDirection: "row",
            }}
          >
            <Appbar.Action
              icon="plus"
              onPress={() => console.log("Pressed archive")}
              color="white"
              style={{ margin: 0 }}
            />
            <Text style={{ fontSize: 18, color: "white", alignSelf: "center" }}>
              Invite
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          <Text
            style={{
              padding: 15,
              borderRadius: 5,
              color: "black",
              fontSize: 16,
              backgroundColor: "#ededed",
              margin: 5,
            }}
          >
            Students : 34
          </Text>
          <Text
            style={{
              padding: 15,
              borderRadius: 5,
              color: "black",
              fontSize: 16,
              backgroundColor: "#ededed",
              margin: 5,
            }}
          >
            C.T. : Ms. Priyanka
          </Text>
        </View>
      </Appbar>

      <View
        style={{
          width: "100%",
          height: 300,
          flexDirection: "row",
          justifyContent: "center",
          position: "absolute",
          top: 300,
        }}
      >
        <View
          style={{
            width: "40%",
            height: 100,
            backgroundColor: "green",
          }}
        >
          <Text>Timetable</Text>
        </View>
        <View
          style={{
            width: "40%",
            height: 100,
            backgroundColor: "yellow",
          }}
        >
          <Text>Analysis</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexWrap: "wrap",
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
    height: 350,
    backgroundColor: "#335ea6",
    alignItems: "flex-start",
    padding: 20,
    flexWrap: "wrap",
  },
  text: {
    color: "white",
    fontSize: 23,
    fontWeight: "bold",
    marginLeft: 15,
  },
  subtext: {
    color: "white",
    fontSize: 18,
    marginLeft: 15,
  },
  image: {
    flex: 1,
  },
});
