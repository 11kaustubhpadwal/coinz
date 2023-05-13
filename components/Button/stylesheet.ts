import { StyleSheet } from "react-native";
import { Colors } from "../../utils/colors";

export const ButtonStyles = StyleSheet.create({
  primary: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: Colors.Primary,
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
    color: Colors.Primary,
    borderRadius: 4,
    textAlign: "center",
    borderColor: Colors.Primary,
    borderWidth: 2,
    fontFamily: "Circular-Std-Medium",
    fontSize: 14,
    lineHeight: 16,
  },
});
