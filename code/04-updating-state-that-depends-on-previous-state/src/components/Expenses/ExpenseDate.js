import React from "react";
import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  // console.log(props.date);
  const month = props.date.toString().split(" ")[1];
  const day = props.date.toString().split(" ")[0].replace(",", "");
  const year = props.date.toString().split(" ")[2];

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};

export default ExpenseDate;
