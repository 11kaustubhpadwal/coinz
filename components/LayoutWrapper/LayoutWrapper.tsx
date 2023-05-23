import { View, ViewProps } from "react-native";
import { LayoutWrapperStyles } from "./stylesheet";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const LayoutWrapper = (props: ViewProps) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        ...LayoutWrapperStyles.layoutWrapper,
        paddingTop: insets.top + 15,
        paddingBottom: insets.bottom,
      }}
      {...props}
    >
      {props.children}
    </View>
  );
};

export default LayoutWrapper;
