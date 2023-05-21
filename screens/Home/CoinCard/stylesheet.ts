import { StyleSheet } from "react-native";

export const CoinCardStyles = StyleSheet.create({
  wrapper: {
    padding: 18,
    borderRadius: 10,
    backgroundColor: "white",
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 15,
    elevation: 1.5,
  },
  image: { width: 40, height: 40, flex: 1 },
  column2: { flex: 3 },
  column3: { flex: 2, alignItems: "flex-end" },
  svgImage: { flex: 1 },
});
