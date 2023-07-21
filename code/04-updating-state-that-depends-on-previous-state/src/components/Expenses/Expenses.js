import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpenseFilter";
import {useState} from "react";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const onSelectYear = (selected) => {
    setFilteredYear(selected);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter initialFilterSetting={filteredYear} onSelectYear={onSelectYear} />

      {props.items.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
    </Card>
  );
};

export default Expenses;
