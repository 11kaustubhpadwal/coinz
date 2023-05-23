import { Colors } from "../../../utils/colors";

export interface InfoCardWithIconProps {
  title: string;
  subtitle: string;
  buttonText: string;
  icon: JSX.Element;
  backgroundColor?: Colors;
}
