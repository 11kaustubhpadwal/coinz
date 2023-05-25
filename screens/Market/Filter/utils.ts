import { orderByOptions, timePeriods } from "./constants";
import { Filters } from "./types";

export const getFilterOptions = (name: Filters) => {
  switch (name) {
    case Filters.OrderBy:
      return orderByOptions;
    case Filters.TimePeriods:
      return timePeriods;
  }
};
