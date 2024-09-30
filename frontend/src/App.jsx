// App.jsx
import React from 'react';
import Income from './components/Income'; // Импортируем компонент Income
import Expenses from './components/Expenses';
const App = () => {
  const monthIncome = {
    september: 2500,
    october:2345
  };
  const monthExpenses={
    september:{
      rent:1500,
      food:250,
      music:14,
      netflix:10
    },
    october:{
      rent:1500,
      food:340,
      music:14,
      netflix:10,
      clothes:450
    },
  }
  return (
    <div>
      <h1>Доходы за месяцы</h1>
      <Income monthIncome={monthIncome} /> {/* Передаем объект как пропс */}
      <Expenses monthExpenses={monthExpenses}/>
    </div>
  );
};

export default App;
