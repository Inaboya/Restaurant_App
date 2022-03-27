import React from "react";
import AppLoading from "expo-app-loading";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { RestuarantsScreens } from "./src/features/restuarants/screens/restuarants.screens";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/Theme";
import { useFonts as useOswald, Oswald_400Regular } from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { useFonts as useRoboto, Roboto_400Regular } from "@expo-google-fonts/roboto";

export default function App() {
  let [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  let [latoLoaded] = useLato({
    Lato_400Regular,
  });

  let [robotoLoaded] = useRoboto({
    Roboto_400Regular,
  });
 
  if (!oswaldLoaded || !latoLoaded || !robotoLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
        <ThemeProvider theme={theme}>
          <RestuarantsScreens />
        </ThemeProvider>

        <ExpoStatusBar style="auto" />
      </>
    );
  }
}
