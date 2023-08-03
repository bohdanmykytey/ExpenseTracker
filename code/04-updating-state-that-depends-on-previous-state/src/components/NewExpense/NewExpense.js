import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({onAddExpense}) => {
  const saveExpenseData = (savedExpenseData) => {
    const expenseData = {
      ...savedExpenseData,
      id: Math.random().toString(),
    };
    // onAddExpense is being passed in
    // from app to be called below, leveraging
    // state lifting
    onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseData} />
    </div>
  );
};

export default NewExpense;
