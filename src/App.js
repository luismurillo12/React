import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/Expenseltem';
// esto es una funcion la cual me retorna html, uno le puede agregar lo que quiera
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ExpenseItem></ExpenseItem>
        <ExpenseItem></ExpenseItem>
        <ExpenseItem></ExpenseItem>
      </header>
    </div>
  );
}

export default App;
