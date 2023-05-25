import { View } from "react-native";
import Svg, { Path } from "react-native-svg";

const BackIcon = () => {
  return (
    <View>
      <Svg width="10" height="16" viewBox="0 0 10 16" fill="none">
        <Path
          d="M9.33333 1.416L7.92976 0L0 8L7.92976 16L9.33333 14.584L2.80714 8L9.33333 1.416Z"
          fill="#212529"
        />
      </Svg>
    </View>
  );
};

export default BackIcon;
