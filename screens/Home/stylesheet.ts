import { StyleSheet } from "react-native";
import { Colors } from "../../utils/colors";

export const HomeStyles = StyleSheet.create({
  wrapper: {
    backgroundColor: Colors.Primary,
    borderRadius: 10,
    padding: 20,
    marginBottom: 30,
  },
  divider1: {
    marginBottom: 10,
  },
  divider2: {
    marginBottom: 30,
  },
  button: { width: "35%" },
  listContainer: { paddingTop: 20, paddingBottom: 76 },
  investmentIcon: { position: "absolute", top: 70, left: 290 },
  loader: {
    width: 75,
    height: 75,
    marginLeft: "auto",
    marginRight: "auto",
  },
});
