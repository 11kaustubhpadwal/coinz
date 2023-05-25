import { PressableProps } from "react-native";

export interface FilterProps extends PressableProps {
  name: Filters;
}

export enum Filters {
  TimePeriods = "Time Period",
  OrderBy = "Order By",
}
