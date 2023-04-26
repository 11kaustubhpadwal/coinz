import { View, ViewProps } from "react-native";
import { LayoutWrapperStyles } from "./stylesheet";

const LayoutWrapper = (props: ViewProps) => {
  return <View style={LayoutWrapperStyles.layoutWrapper} {...props} />;
};

export default LayoutWrapper;
