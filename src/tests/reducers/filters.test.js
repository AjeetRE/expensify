import { expect } from "@jest/globals";
import moment from "moment";
import filtersReducer from "../../reducers/filters";

test("should set default default filter values", () => {
  const state = filtersReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual({
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month"),
  });
});

test("should set sortBy to amount", () => {
  const state = filtersReducer(undefined, { type: "SORT_BY_AMOUNT" });
  expect(state.sortBy).toEqual("amount");
});

test("should set sortBy to date", () => {
  const currentState = {
    text: "",
    sortBy: "amount",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month"),
  };
  const state = filtersReducer(currentState, { type: "SORT_BY_DATE" });
  expect(state.sortBy).toEqual("date");
});

test("should set text filter", () => {
  const state = filtersReducer(undefined, {
    type: "SET_TEXT_FILTER",
    text: "rent",
  });
  expect(state.text).toEqual("rent");
});

test("should set startDate filter", () => {
  const date = moment();
  const state = filtersReducer(undefined, {
    type: "SET_START_DATE",
    startDate: date,
  });
  expect(state.startDate).toEqual(date);
});

test("should set endDate filter", () => {
  const date = moment();
  const state = filtersReducer(undefined, {
    type: "SET_END_DATE",
    endDate: date,
  });
  expect(state.endDate).toEqual(date);
});
