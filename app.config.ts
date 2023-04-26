import { ExpoConfig, ConfigContext } from "expo/config";

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  slug: "coinz",
  name: "Coinz",
  splash: {
    image: "./assets/splash.png",
    resizeMode: "contain",
    backgroundColor: "#fff",
  },
  icon: "./assets/logo.png",
});
