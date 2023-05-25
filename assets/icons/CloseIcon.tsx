import React from "react";
import { View } from "react-native";
import Svg, { ClipPath, Defs, G, Path, Rect } from "react-native-svg";

const CloseIcon = () => {
  return (
    <View>
      <Svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <G clip-path="url(#clip0_181_414)">
          <Path
            d="M12 1.2L10.8 0L6 4.8L1.2 0L0 1.2L4.8 6L0 10.8L1.2 12L6 7.2L10.8 12L12 10.8L7.2 6L12 1.2Z"
            fill="#6C757D"
          />
        </G>
        <Defs>
          <ClipPath id="clip0_181_414">
            <Rect width="12" height="12" fill="white" />
          </ClipPath>
        </Defs>
      </Svg>
    </View>
  );
};

export default CloseIcon;
