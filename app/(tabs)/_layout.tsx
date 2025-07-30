import { Ionicons } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";

import { Tabs } from "expo-router";
import React from "react";

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: "#102542" }, //tab background color
        tabBarActiveTintColor: "#06D6A0", //COLOR FOR THE ACTIVE TAB CHOSEN
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "home-sharp" : "home-outline"}
              color={color}
              size={30}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ focused, color }) => (
            <AntDesign
              name={focused ? "apple1" : "apple-o"}
              size={30}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
