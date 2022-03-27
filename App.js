import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { RestuarantsScreens } from "./src/features/restuarants/screens/restuarants.screens";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/Theme";
export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestuarantsScreens />
      </ThemeProvider>

      <ExpoStatusBar style="auto" />
    </>
  );
}
