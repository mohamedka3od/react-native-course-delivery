import { StatusBar } from "react-native";
import React from "react";

import { HomeScreen } from './src/screens';

export default function App() {
  return (
    <>
      <StatusBar barStyle={"light-content"} />
      <HomeScreen />
    </>
  );
}