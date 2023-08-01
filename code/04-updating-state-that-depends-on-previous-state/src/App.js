import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
import initialExpenses from "./components/Expenses";
import {useState} from "react";

const App = () => {
  const [expenses, setNewExpenses] = useState(initialExpenses);

  const addExpense = (expense) => {
    console.log(expense.date);
    setNewExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <>
      <NewExpense onAddExpense={addExpense} />
      <Expenses items={expenses} />
    </>
  );
};

export default App;
