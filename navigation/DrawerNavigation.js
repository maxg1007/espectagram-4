import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import StackNavigator from "./stackNavigation";
import Profile from "../screens/Profile";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={StackNavigator} />
      <Drawer.Screen name="Perfil" component={Profile} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
