import React from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Text,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function Welcome({ navigation }) {
  return (
    <ScrollView>
      <SafeAreaView style={{ alignItems: "center" }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("setup")}
          style={{
            backgroundColor: "black",
            padding: 10,
            width: 200,
            margin: 10,
            alignItems: "center",
            borderRadius: 5,
          }}
        >
          <Text style={{ color: "white" }}>Create a new organization</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("login")}
          style={{
            backgroundColor: "grey",
            padding: 10,
            width: 200,
            margin: 10,
            alignItems: "center",
            borderRadius: 5,
          }}
        >
          <Text style={{ color: "white" }}>Join an organization</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
