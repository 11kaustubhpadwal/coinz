import { StyleSheet } from "react-native";
import { Colors } from "../../utils/colors";

export const CoinDetailsStyles = StyleSheet.create({
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 18,
  },
  coinIcon: {
    width: 25,
    height: 25,
    borderRadius: 8,
  },
  symbol: { marginLeft: -12 },
  divider: { marginTop: 10, marginBottom: 10 },
  divider2: { marginTop: 20, marginBottom: 20 },
  divider3: { marginTop: 8, marginBottom: 8 },
  price: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 10,
  },
  supplyCard: {
    padding: 15,
    backgroundColor: "white",
    borderRadius: 8,
    marginBottom: 8,
    elevation: 1,
  },
});
