import { TextProps } from "react-native";

export type TextVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "sub1"
  | "sub2"
  | "sub3"
  | "sub4";

export interface TypographyProps extends TextProps {
  variant: TextVariant;
}
