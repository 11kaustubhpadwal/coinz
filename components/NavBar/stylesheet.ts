import { StyleSheet } from "react-native";

export const NavBarStyles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 20,
    columnGap: 35,
    elevation: 1,
    borderTopColor: "black",
  },
  item: {
    alignItems: "center",
  },
});
