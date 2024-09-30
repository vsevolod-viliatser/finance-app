// Income.jsx
import React from 'react';

const Income = ({ monthIncome }) => {
  return (
    <div>
      <h2>September income: {monthIncome.september} $</h2>
      <h2>October income: {monthIncome.october} $</h2>
    </div>
  );
};

export default Income;
