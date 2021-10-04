import React from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Text,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function Landing({ navigation }) {
  return (
    <ScrollView>
      <SafeAreaView style={{ alignItems: "center" }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("signup")}
          style={{
            backgroundColor: "teal",
            padding: 10,
            width: 100,
            margin: 10,
            alignItems: "center",
            borderRadius: 5,
          }}
        >
          <Text style={{ color: "white" }}>Sign up</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("login")}
          style={{
            backgroundColor: "teal",
            padding: 10,
            width: 100,
            margin: 10,
            alignItems: "center",
            borderRadius: 5,
          }}
        >
          <Text style={{ color: "white" }}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("subsection")}
          style={{
            backgroundColor: "teal",
            padding: 10,
            width: 100,
            margin: 10,
            alignItems: "center",
            borderRadius: 5,
          }}
        >
          <Text style={{ color: "white" }}>Subsections</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
