import { StyleSheet } from "react-native";

export const InfoCardWithIconStyles = StyleSheet.create({
  wrapper: {
    padding: 18,
    elevation: 1,
    borderRadius: 10,
    flexDirection: "row",
  },
  divider: {
    marginTop: 5,
    marginBottom: 5,
  },
  button: { width: "40%", marginTop: 30 },
  column1: { flex: 1 },
  column2: { alignSelf: "flex-end" },
});
