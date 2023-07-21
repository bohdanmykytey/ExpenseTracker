import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
import expenses from "./components/Expenses";

const App = () => {
  const addExpense = (expense) => {
    console.log(expense);
    console.log('coming from app.js')
  };

  return (
    <>
      <NewExpense onAddExpense={addExpense} />
      <Expenses items={expenses} />
    </>
  );
};

export default App;
