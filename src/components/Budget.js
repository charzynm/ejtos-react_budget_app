import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const { expenses } = useContext(AppContext);
    const handleBudgetChange = (event) => {
        if(newBudget >= 20000) {
            alert("The value cannot exceed 20000");
            setNewBudget(20000);
            return;
        }
        if(newBudget < expenses) {
            alert("You cannot reduce the budget value lower than the spending");
            setNewBudget(expenses);
            return;
        }

        setNewBudget(event.target.value);
    }
    const alertType = newBudget > 20000 ? 'alert-danger' : 'alert-success';
    return (
<div className={`alert ${alertType}`}>
<span>Budget: {currency}{budget}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
