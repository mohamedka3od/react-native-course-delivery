import { StatusBar } from "react-native";
import React from "react";

// import { HomeScreen } from './src/screens';
import RootNavigator from "./src/navigation";

export default function App() {
  return (
    <>
      <StatusBar barStyle={"light-content"} />
      <RootNavigator />
    </>
  );
}