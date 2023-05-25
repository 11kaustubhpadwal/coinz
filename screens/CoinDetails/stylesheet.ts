import { StyleSheet } from "react-native";

export const CoinDetailsStyles = StyleSheet.create({
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 18,
    flexWrap: "wrap",
  },
  symbol: { marginTop: 10 },
  coinIcon: {
    width: 25,
    height: 25,
    borderRadius: 8,
  },
  coinName: { marginRight: -12 },
  divider: { marginTop: 10, marginBottom: 10 },
  divider2: { marginTop: 20, marginBottom: 20 },
  divider3: { marginTop: 8, marginBottom: 8 },
  price: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 10,
  },
  wrapper: {
    marginTop: 10,
  },
  actionButtons: {
    flexDirection: "row",
    columnGap: 15,
    marginTop: 18,
  },
  column1: {
    flex: 3,
  },
  column2: { flex: 3 },
});
