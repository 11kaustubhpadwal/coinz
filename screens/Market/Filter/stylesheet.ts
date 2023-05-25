import { StyleSheet } from "react-native";
import { Colors } from "../../../utils/colors";

export const FilterStyles = StyleSheet.create({
  wrapper: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 5,
    paddingTop: 5,
    borderColor: Colors.Secondary,
    borderWidth: 1,
    borderRadius: 24,
    flexDirection: "row",
    alignItems: "center",
    width: 110,
  },
  column1: { flex: 1 },
  modalWrapper: { flex: 1, backgroundColor: "rgba(0,0,0,0.5)" },
  modalHeader: { flexDirection: "row", alignItems: "center", columnGap: 10 },
  modalHeaderColumn1: { flex: 1 },
  modal: {
    marginTop: 418,
    backgroundColor: "white",
    flex: 1,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 32,
    elevation: 10,
  },
  modalItem: {
    paddingTop: 16,
    paddingBottom: 16,
    borderBottomColor: Colors.Secondary,
    borderBottomWidth: 1,
  },
  modalItemLast: {
    paddingTop: 16,
    paddingBottom: 16,
  },
  button: { marginTop: 25 },
  divider: { marginBottom: 5 },
});
