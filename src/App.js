import React, { useEffect, useState, useCallback } from "react";
import "./App.css";

import TransactionForm from "./Componenet/TransactionForm";
import TransactionList from "./Componenet/TransactionList";
import ExpensesChart from "./Componenet/ExpensesChart";
import DashboardCards from "./Componenet/DashboardCards";
import CategoryPieChart from "./Componenet/CategoryPieChart";
import BudgetForm from "./Componenet/BudgetForm";
import BudgetComparisonChart from "./Componenet/BudgetComparisonChart";
import SpendingInsights from "./Componenet/SpendingInsights";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [budgets, setBudgets] = useState([]);
  const [editingTransaction, setEditingTransaction] = useState(null);

  // Fetch transactions from backend
  const fetchTransactions = useCallback(async () => {
    try {
      const res = await fetch(
        "https://personal-finance-visualizer-backend-21c0.onrender.com/api/transactions"
      );
      const data = await res.json();
      setTransactions(data);
    } catch (err) {
      console.error("Error fetching transactions:", err);
    }
  }, []);

  // Fetch budgets from backend
  const fetchBudgets = useCallback(async () => {
    try {
      const res = await fetch(
        "https://personal-finance-visualizer-backend-21c0.onrender.com/api/budgets"
      );
      const data = await res.json();
      setBudgets(data);
    } catch (err) {
      console.error("Error fetching budgets:", err);
    }
  }, []);

  useEffect(() => {
    fetchTransactions();
    fetchBudgets();
  }, [fetchTransactions, fetchBudgets]);

  const addTransaction = (newTx) => {
    setTransactions([newTx, ...transactions]);
  };

  const updateTransaction = (updatedTx) => {
    setTransactions((prev) =>
      prev.map((tx) => (tx._id === updatedTx._id ? updatedTx : tx))
    );
    setEditingTransaction(null);
  };

  const deleteTransaction = async (id) => {
    try {
      await fetch(
        `https://personal-finance-visualizer-backend-21c0.onrender.com/api/transactions/${id}`,
        {
          method: "DELETE",
        }
      );
      fetchTransactions();
    } catch (err) {
      console.error("Failed to delete transaction:", err);
    }
  };

  const saveBudget = (budget) => {
    const exists = budgets.find(
      (b) => b.category === budget.category && b.month === budget.month
    );

    if (exists) {
      setBudgets((prev) =>
        prev.map((b) =>
          b.category === budget.category && b.month === budget.month
            ? budget
            : b
        )
      );
    } else {
      setBudgets([budget, ...budgets]);
    }
  };

  return (
    <div className="app-container">
      {/* Animated background */}
      <div className="background-effect">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <h1 className="main-title">Personal Finance Visualizer</h1>

      {/* Forms */}
      <div className="form-section">
        <TransactionForm
          onAdd={addTransaction}
          editingTx={editingTransaction}
          onUpdate={updateTransaction}
          cancelEdit={() => setEditingTransaction(null)}
        />
        <BudgetForm onSave={saveBudget} />
      </div>

      {/* Dashboard visuals */}
      <div className="dashboard-section">
        <DashboardCards transactions={transactions} />
        <CategoryPieChart transactions={transactions} />
        <ExpensesChart transactions={transactions} />
      </div>

      {/* Budget analytics */}
      <div className="budget-section">
        <BudgetComparisonChart transactions={transactions} budgets={budgets} />
        <SpendingInsights transactions={transactions} budgets={budgets} />
      </div>

      {/* Transaction list */}
      <div className="transactions-section">
        <TransactionList
          transactions={transactions}
          onDelete={deleteTransaction}
          onEdit={setEditingTransaction}
        />
      </div>
    </div>
  );
}

export default App;
