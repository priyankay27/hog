import "react-native-gesture-handler";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Signup from "./screens/common/auth/signup/signup";
import { Platform, useWindowDimensions, View } from "react-native";
import Login from "./screens/common/auth/login";
import SignupVerified from "./screens/common/auth/signupVerified";
import Home from "./screens/common/home";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Teachers from "./screens/admin/teachers";
import Students from "./screens/admin/students";
import Admin from "./screens/admin/admin";
import {
  FontAwesome5,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import Class from "./screens/common/class";
import Sections from "./screens/common/sections";
import Landing from "./screens/common/landing";
import Welcome from "./screens/common/welcome";
import { firebaseConfig } from "./screens/common/auth/config";
import firebase from "firebase/app";
import Setup from "./screens/common/auth/setupOrg/setup";
import SetupSchool from "./screens/common/auth/setupOrg/setupSchool";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import SubSection from "./screens/common/subSection";

global.app = firebase.initializeApp(firebaseConfig);

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

// function HomeMenu() {
//   return (
//     <Stack.Navigator initialRouteName="homee">
//       <Stack.Screen
//         name="homee"
//         component={Home}
//         options={{ headerTintColor: "" }}
//       />
//       <Stack.Screen name="class" component={Class} />
//       <Stack.Screen name="sections" component={Sections} />
//     </Stack.Navigator>
//   );
// }

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);

  var a;

  if (Platform.OS !== "web") {
    a = {};
  } else {
    a = {
      title: "Halls of Gyan",
      headerStyle: {
        backgroundColor: "#fff",
      },
      headerTintColor: "#000",
      headerTitleStyle: {
        fontWeight: "bold",
        marginLeft: "5em",
      },
      headerRight: (props) => <MenuIcon {...props} />,
    };
  }

  function ClassS() {
    return (
      <Stack.Navigator initialRouteName="subsection">
        <Stack.Screen
          name="class"
          component={Class}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="section"
          component={Sections}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="subsection"
          component={SubSection}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  }
  function HomeS() {
    const dimensions = useWindowDimensions();
    return (
      <Drawer.Navigator
        initialRouteName="classes"
        drawerType={dimensions.width >= 768 ? "permanent" : "back"}
        drawerStyle={{
          width: 250,
        }}
      >
        <Drawer.Screen
          name="home"
          component={Home}
          options={{
            title: "Home",
            drawerIcon: (config) => (
              <FontAwesome5 name="home" size={24} color="black" />
            ),
          }}
        />
        <Drawer.Screen
          name="classes"
          component={ClassS}
          options={{
            title: "Classes",
            drawerIcon: (config) => (
              <MaterialCommunityIcons name="teach" size={24} color="black" />
            ),
          }}
        />
        <Drawer.Screen
          name="teachers"
          component={Teachers}
          options={{
            title: "Teachers",
            drawerIcon: (config) => (
              <MaterialCommunityIcons name="teach" size={24} color="black" />
            ),
          }}
        />
        <Drawer.Screen
          name="students"
          component={Students}
          options={{
            title: "Students",
            drawerIcon: (config) => (
              <FontAwesome5 name="book-reader" size={24} color="black" />
            ),
          }}
        />
        <Drawer.Screen
          name="admin"
          component={Admin}
          options={{
            title: "Admin",
            drawerIcon: (config) => (
              <MaterialIcons
                name="admin-panel-settings"
                size={24}
                color="black"
              />
            ),
          }}
        />
      </Drawer.Navigator>
    );
  }
  function MenuIcon() {
    return (
      <View
        style={{ flexDirection: "row", marginRight: 100, alignItems: "center" }}
      >
        <Ionicons
          name="menu-outline"
          size={32}
          color="black"
          style={{ marginRight: 10 }}
          onPress={openMenu}
        />
        <AntDesign
          name="logout"
          size={24}
          color="black"
          style={{ marginRight: 10 }}
          onPress={signout}
        />
      </View>
    );
  }

  const signout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log("signed out");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var uid = user.uid;
      setLoggedIn(true);
      console.log("user logged in");
    } else {
      setLoggedIn(false);
      console.log("user logged out from app", loggedIn);
    }
  });

  if (!loggedIn) {
    return (
      <NavigationContainer linking={{ enabled: true }}>
        <Stack.Navigator initialRouteName="user">
          <Stack.Screen name="user" component={HomeS} options={a} />
          <Stack.Screen name="signup" component={Signup} options={a} />
          <Stack.Screen name="login" component={Login} options={a} />
          <Stack.Screen name="signupV" component={SignupVerified} options={a} />
          <Stack.Screen name="landing" component={Landing} options={a} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  return (
    <NavigationContainer linking={{ enabled: true }}>
      <Stack.Navigator initialRouteName="welcome">
        <Stack.Screen name="welcome" component={Welcome} options={a} />
        <Stack.Screen name="setup" component={Setup} options={a} />
        <Stack.Screen name="setupSchool" component={SetupSchool} options={a} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
