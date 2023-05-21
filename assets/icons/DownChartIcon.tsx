import { View } from "react-native";
import Svg, { Path, SvgProps } from "react-native-svg";

const DownChartIcon = (props: SvgProps) => {
  return (
    <View>
      <Svg width="52" height="29" viewBox="0 0 52 29" fill="none">
        <Path
          d="M51 24.8448L45.3925 20.9655L38.3832 27L33.7103 4.15517L24.8318 19.2414L20.6262 13.6379V4.15517L14.0841 9.75862L9.8785 2L1 17.0862"
          stroke="#D90429"
        />
      </Svg>
    </View>
  );
};

export default DownChartIcon;
