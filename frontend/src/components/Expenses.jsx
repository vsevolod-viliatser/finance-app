
import React from 'react';

const Expenses = ({ monthExpenses }) => {
    const renderExpenses = (expences) => {
        return Object.entries(expences).map(([category, amount]) => (
            <li key={category}>
                {category}: {amount} $
            </li>
        ))
    }
    return (
        <div>
            <h2>September expenses</h2>
            <ul>{renderExpenses(monthExpenses.september)}</ul>
            <h2>October expenses</h2>
            <ul>{renderExpenses(monthExpenses.october)}</ul>
        </div>
    );
};

export default Expenses;
