import React from "react";
import { Dimensions, Image, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { HomeComponentScreen } from "../screens/HomeComponentScreen";
// import { HeaderMapSettings } from './HeaderMapSettings'

export const AppNavigator = ({ navigation }) => {
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();
  const Search = createStackNavigator();

  const HomeStack = () => {
    return (
      <Stack.Navigator >
        <Stack.Screen name="Feed" component={HomeComponentScreen} />
      </Stack.Navigator>
    );
  };

  const DiscountsStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Discounts" component={HomeComponentScreen} />
      </Stack.Navigator>
    );
  };
  const QrStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="QR" component={HomeComponentScreen} />
      </Stack.Navigator>
    );
  };
  const SearchStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Search" component={HomeComponentScreen} />
      </Stack.Navigator>
    );
  };
  const ProfileStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Profile" component={HomeComponentScreen} />
      </Stack.Navigator>
    );
  };

  const BottomNavigation = () => {
    return (
      <Tab.Navigator
        initialRouteName={"Home"}
        tabBarPosition={"bottom"}
        screenOptions={{
          headerShown: false,
          tabBarIndicatorStyle: { opacity: 0 },
          swipeEnabled: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "#FFF6DF",
            position: "absolute",
            height: 50,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => (
              <>
                <Image
                  style={{
                    width: 26,
                    height: 26,
                    tintColor: focused ? "#000000" : "#A7ACC4",
                  }}
                  resizeMode="contain"
                  source={require("../../assets/icons/percent.png")}
                />
                <Text>Home</Text>
              </>
            ),
          })}
        />
        <Tab.Screen
          name="Discounts"
          component={DiscountsStack}
          options={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => (
              <>
                <Image
                  style={{
                    width: 26,
                    height: 26,
                    tintColor: focused ? "#000000" : "#A7ACC4",
                  }}
                  resizeMode="contain"
                  source={require("../../assets/icons/percent.png")}
                />
                <Text>Discounts</Text>
              </>
            ),
          })}
        />
        <Tab.Screen
          name="QR"
          component={QrStack}
          options={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => (
              <>
                <Image
                  style={{
                    width: 26,
                    height: 26,
                    tintColor: focused ? "#000000" : "#A7ACC4",
                  }}
                  resizeMode="contain"
                  source={require("../../assets/icons/percent.png")}
                />
              </>
            ),
          })}
        />
        <Tab.Screen
          name="Search"
          component={SearchStack}
          options={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => (
              <>
                <Image
                  style={{
                    width: 26,
                    height: 26,
                    tintColor: focused ? "#000000" : "#A7ACC4",
                  }}
                  resizeMode="contain"
                  source={require("../../assets/icons/percent.png")}
                />
                <Text>Search</Text>
              </>
            ),
          })}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileStack}
          options={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => (
              <>
                <Image
                  style={{
                    width: 26,
                    height: 26,
                    tintColor: focused ? "#000000" : "#A7ACC4",
                  }}
                  resizeMode="contain"
                  source={require("../../assets/icons/percent.png")}
                />
                <Text>Profile</Text>
              </>
            ),
          })}
        />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="HomePage" component={BottomNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
