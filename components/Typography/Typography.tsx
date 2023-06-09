import { useEffect, useState } from "react";
import { Text } from "react-native";
import { TextVariant, TypographyProps } from "./types";
import { TypographyStyles } from "./stylesheet";
import useFontLoader from "../../hooks/useFontLoader";

const Typography = (props: TypographyProps) => {
  const areFontsLoaded = useFontLoader();

  const [variant, setVariant] = useState<TextVariant>("h1");

  useEffect(() => {
    setVariant(props.variant);
  }, [props.variant]);

  return (
    areFontsLoaded && (
      <Text
        style={{ ...TypographyStyles[variant], color: props.color }}
        {...props}
      />
    )
  );
};

export default Typography;
