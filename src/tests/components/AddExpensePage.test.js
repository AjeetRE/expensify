import React from "react";
import { shallow } from "enzyme";
import { AddExpensePage } from "../../components/AddExpensePage";
import ExpenseForm from "../../components/ExpenseForm";
import expenses from "../fixtures/expenses";

let addExpense, history, wrapper;

beforeEach(() => {
  addExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <AddExpensePage addExpense={addExpense} history={history} />
  );
});

test("should render AddExpense page correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should handle addExpense", () => {
  wrapper.find(ExpenseForm).at(0).prop("onSubmit")(expenses[1]);
  expect(history.push).toHaveBeenCalledWith("/");
  expect(addExpense).toHaveBeenCalledWith(expenses[1]);
});
