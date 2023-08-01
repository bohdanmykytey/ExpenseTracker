import React from "react";
import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  console.log(props)
  const month = props.date.toDateString().split(" ")[1];
  const day = props.date.toDateString().split(" ")[0];
  const year = props.date.toDateString().split(" ")[2];

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};

export default ExpenseDate;
