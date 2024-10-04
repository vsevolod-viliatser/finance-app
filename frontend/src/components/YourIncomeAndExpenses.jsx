import { useState } from 'react';

function YourIncomeAndExpenses() {
  const [monthlyIncome, setMonthlyIncome] = useState('');
  const [submittedIncome, setSubmittedIncome] = useState(null);
  const [expenseName, setExpenseName] = useState(''); // Для имени траты
  const [expensePrice, setExpensePrice] = useState(''); // Для цены траты
  const [expenses, setExpenses] = useState([]); // Массив для хранения всех трат (объекты с именем и ценой)
  const [error, setError] = useState(''); // Для вывода ошибок

  const handleIncomeSubmit = (event) => {
    event.preventDefault();
    setSubmittedIncome(monthlyIncome); // сохраняем доход
  };

  const handleExpensesSubmit = (event) => {
    event.preventDefault();
    const expenseValue = parseFloat(expensePrice);

    // Проверка: если имя траты или цена не заполнены, или если цена больше остатка
    if (expenseName === '' || expensePrice === '') {
      setError('Please enter both a valid name and price for the expense.');
      return;
    }

    if (expenseValue > remainingMoney) {
      setError('Expense is greater than remaining money. Please enter a smaller amount.');
      return;
    }

    // Если проверка пройдена, добавляем трату
    setExpenses([...expenses, { name: expenseName, price: expenseValue }]);
    setExpenseName('');  // очищаем поле ввода имени
    setExpensePrice('');  // очищаем поле ввода цены
    setError('');  // очищаем сообщение об ошибке
  };

  // Подсчет всех затрат
  const totalExpenses = expenses.reduce((total, exp) => total + exp.price, 0);

  // Оставшиеся деньги после всех затрат
  const remainingMoney = submittedIncome ? submittedIncome - totalExpenses : 0;

  return (
    <>
      {/* Форма для доходов */}
      {!submittedIncome && (
        <form onSubmit={handleIncomeSubmit}>
          <label>Enter your monthly income:
            <input 
              type="number" 
              value={monthlyIncome}
              onChange={(e) => setMonthlyIncome(e.target.value)}  // обновляем значение в input
            />
          </label>
          <input type="submit" value="Submit Income" />
        </form>
      )}

      {/* Показать доход, если он введен */}
      {submittedIncome && (
        <p>Your monthly income is: ${submittedIncome}</p>
      )}

      {/* Форма для добавления трат, если доход был подтвержден */}
      {submittedIncome && (
        <form onSubmit={handleExpensesSubmit}>
          <label>Enter the name of your expense:
            <input 
              type="text" 
              value={expenseName}  // значение имени траты
              onChange={(e) => setExpenseName(e.target.value)}  // обновляем текущее имя траты
            />
          </label>
          <br />
          <label>Enter the price of your expense:
            <input 
              type="number" 
              value={expensePrice}  // значение цены траты
              onChange={(e) => setExpensePrice(e.target.value)}  // обновляем текущую цену траты
            />
          </label>
          <input type="submit" value="Add Expense" />
        </form>
      )}

      {/* Вывод ошибок */}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* Показать список всех трат, если они есть */}
      {expenses.length > 0 && (
        <>
          <h3>Your expenses:</h3>
          <ul>
            {expenses.map((exp, index) => (
              <li key={index}>{exp.name}: ${exp.price}</li>  // отображаем каждую трату (имя и цену)
            ))}
          </ul>

          {/* Общая сумма всех трат */}
          <p>Total expenses: ${totalExpenses}</p>

          {/* Оставшиеся деньги */}
          <p>Remaining money: ${remainingMoney}</p>
        </>
      )}
    </>
  );
}

export default YourIncomeAndExpenses;
