import React from "react";
import { createStackNavigator } from "@react-navigation/Stack";
import BottomTabNavigator from "./TabNavigator";
import PostScreen from "../screens/postScreen";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={BottomTabNavigator} />
      <Stack.Screen name="PostScreen" component={PostScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
