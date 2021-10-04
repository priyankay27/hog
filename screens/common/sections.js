import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Constants from "expo-constants";
import { Card } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import { DataTable } from "react-native-paper";

export default function Sections({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.content}>
          <DataTable>
            <DataTable.Header>
              <DataTable.Title>Section</DataTable.Title>
              <DataTable.Title>Students</DataTable.Title>
              <DataTable.Title>C.T</DataTable.Title>
            </DataTable.Header>

            <DataTable.Row style={{ backgroundColor: "#CDCDCD" }}>
              <DataTable.Cell onPress={() => navigation.navigate("subsection")}>
                A
              </DataTable.Cell>
              <DataTable.Cell>44</DataTable.Cell>
              <DataTable.Cell>Ms. Priyanka</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell>B</DataTable.Cell>
              <DataTable.Cell>34</DataTable.Cell>
              <DataTable.Cell>Ms. Priyanka</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row style={{ backgroundColor: "#CDCDCD" }}>
              <DataTable.Cell>C</DataTable.Cell>
              <DataTable.Cell>36</DataTable.Cell>
              <DataTable.Cell>Ms. Priyanka</DataTable.Cell>
            </DataTable.Row>
          </DataTable>

          <TouchableOpacity
            activeOpacity="0.7"
            onPress={() => navigation.navigate("class")}
          >
            <View style={styles.course}>
              <Text style={{ color: "#fff" }}>Section A</Text>
              <Text>Students 44</Text>
              <Text>C.T: Ms. Priyanka</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity="0.7"
            onPress={() => navigation.navigate("class")}
          >
            <View style={styles.course}>
              <Text style={{ color: "#fff" }}>Section A</Text>
              <Text>Students 44</Text>
              <Text>C.T: Ms. Priyanka</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity="0.7"
            onPress={() => navigation.navigate("class")}
          >
            <View style={styles.course}>
              <Text style={{ color: "#fff" }}>Section A</Text>
              <Text>Students 44</Text>
              <Text>C.T: Ms. Priyanka</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    paddingTop: Constants.statusBarHeight,
    padding: 8,
    backgroundColor: "#ffffff",
    overflow: "scroll",
  },
  content: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
  card: {
    borderRadius: 9,
    width: 200,
    height: 230,
    margin: 20,
  },
  course: {
    backgroundColor: "#7ba3db",
    borderRadius: 10,
    display: "flex",
    margin: 10,
    overflow: "hidden",
    padding: 25,
    width: 320,
    height: 140,
    shadowOffset: {
      height: 3,
      width: 3,
    },
    shadowOpacity: 0.1,
    shadowColor: "black",
  },
});
