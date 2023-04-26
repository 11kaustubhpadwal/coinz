import { useFonts } from "expo-font";

const useFontLoader = () => {
  const [fontsLoaded] = useFonts({
    "Circular-Std-Book": require("../../assets/fonts/CircularStd-Book.otf"),
    "Circular-Std-Bold": require("../../assets/fonts/CircularStd-Bold.otf"),
    "Circular-Std-Medium": require("../../assets/fonts/CircularStd-Medium.otf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return true;
};

export default useFontLoader;
