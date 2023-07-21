import React, {useState} from "react";

import "./ExpenseForm.css";

const ExpenseForm = ({onSaveExpenseData}) => {
  // instantiating state object
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  // updating state with setUserInput and spreading the prev state into the userInput
  // object so its not lost when a piece of it is updated
  const titleChangeHandler = (event) => {
    setUserInput((prevState) => {
      return {...prevState, enteredTitle: event.target.value};
    });
  };
 
  const amountChangeHandler = (event) => {
    setUserInput((prevState) => {
      return {...prevState, enteredAmount: event.target.value};
    });
  };

  const dateChangeHandler = (event) => {
    setUserInput((prevState) => {
      return {...prevState, enteredDate: event.target.value};
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const expenseData = {
      title: userInput.enteredTitle,
      amount: userInput.enteredAmount,
      date: new Date(userInput.enteredDate).toDateString(),
    };

    setUserInput({
      enteredTitle: "",
      enteredAmount: "",
      enteredDate: "",
    });
    // onSaveExpenseData is being passed in
    // from app to be called below, leveraging
    // state lifting
    onSaveExpenseData(expenseData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={userInput.enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            value={userInput.enteredAmount}
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            value={userInput.enteredDate}
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
