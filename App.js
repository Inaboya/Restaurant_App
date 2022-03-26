
import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { RestuarantsScreens } from "./src/features/restuarants/screens/restuarants.screens";
export default function App() {
  return (
    <> 
      <RestuarantsScreens />
      <ExpoStatusBar style="auto" />
    </>
  );
}

