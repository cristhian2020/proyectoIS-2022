import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

//screens
import HomeScreen from "./screens/screen1";
import PantallaRegistroMed from "./screens/pantallaRegistroMed";
import QuantityOfMedicationsScreen from "./screens/quantityOfMedications"
import StackScreen from "./screens/screen3";

const Stack = createNativeStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator
            initialRouteName="HomeScreen"
        >
            <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
            />
            <Stack.Screen
                name="Registrar medicamento"
                component={PantallaRegistroMed}
            />
            <Stack.Screen
                name="Dosis del medicamento"
                component={QuantityOfMedicationsScreen}
            />
            <Stack.Screen
                name="Stack"
                component={StackScreen}
                options={{
                    headerBackTitleVisible: false,
                }}
            />
        </Stack.Navigator>
    )
}   

export default function Navigation() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}