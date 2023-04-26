import { StyleSheet } from "react-native";

export const ButtonStyles = StyleSheet.create({
  primary: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: "#0063F5",
    color: "#fff",
    borderRadius: 4,
    textAlign: "center",
    fontFamily: "Circular-Std-Medium",
    fontSize: 14,
    lineHeight: 16,
  },
  outlined: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 13,
    paddingBottom: 13,
    backgroundColor: "#fff",
    color: "#0063F5",
    borderRadius: 4,
    textAlign: "center",
    borderColor: "#0063F5",
    borderWidth: 2,
    fontFamily: "Circular-Std-Medium",
    fontSize: 14,
    lineHeight: 16,
  },
});