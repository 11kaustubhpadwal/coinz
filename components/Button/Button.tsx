import { Pressable, Text } from "react-native";
import { ButtonStyles } from "./stylesheet";
import { useState, useEffect } from "react";
import { ButtonProps, ButtonVariant } from "./types";
import useFontLoader from "../../hooks/useFontLoader";

const Button = (props: ButtonProps) => {
  const areFontsLoaded = useFontLoader();

  const [variant, setVariant] = useState<ButtonVariant>("primary");

  useEffect(() => {
    setVariant(props.variant);
  }, [props.variant]);

  return (
    areFontsLoaded && (
      <Pressable {...props}>
        <Text style={ButtonStyles[variant]}>{props.text}</Text>
      </Pressable>
    )
  );
};

export default Button;
