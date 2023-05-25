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
  extra: {
    eas: {
      projectId: "fa91b164-8213-4de6-afc2-10731b6d309c",
    },
  },
  android: { package: "com.devs.coinz", versionCode: 1 },
});
