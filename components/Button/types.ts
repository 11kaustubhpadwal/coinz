import { PressableProps, TextProps } from "react-native";

export type ButtonVariant = "primary" | "outlined" | "secondary";

export interface ButtonProps extends PressableProps {
  variant: ButtonVariant;
  text: string;
}
