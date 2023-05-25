import { PressableProps } from "react-native";
import { GetAllCoinsWithFiltersQueryParams } from "../../../api/services/coins/types";

export interface FilterProps extends PressableProps {
  filterName: Filters;
  setQueryParams: React.Dispatch<
    React.SetStateAction<GetAllCoinsWithFiltersQueryParams>
  >;
  queryParams: GetAllCoinsWithFiltersQueryParams;
}

export enum Filters {
  TimePeriods = "Time Period",
  OrderBy = "Order By",
}
