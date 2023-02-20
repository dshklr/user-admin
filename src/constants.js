import { arrayRange } from "./helpers";

export const SELECT_OPTIONS = [
  {
    value: "asc",
    label: "ascendent",
  },
  {
    value: "desc",
    label: "descendent",
  },
];

export const SORT_OPTIONS = [
  {
    value: "name",
    label: "name",
  },
  {
    value: "city",
    label: "city",
  },
  {
    value: "birthdate",
    label: "age",
  },
];

const DAYS = arrayRange(1, 31, 1);
const MONTHS = arrayRange(1, 12, 1);
const YEARS = arrayRange(1900, new Date().getFullYear(), 1);

export { DAYS, MONTHS, YEARS };
