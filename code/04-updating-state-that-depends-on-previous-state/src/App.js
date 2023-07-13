import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';
import expenses from './components/Expenses'

const App = () => {

  return (
    <div>
      <NewExpense />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
