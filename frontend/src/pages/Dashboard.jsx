import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const COLORS = ["#FF6384", "#36A2EB", "#FFCE56", "#4CAF50", "#9966FF"];

const Dashboard = () => {
  const [expenses, setExpenses] = useState([]);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const savedExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
    setExpenses(savedExpenses);

    const categoryTotals = savedExpenses.reduce((acc, expense) => {
      acc[expense.category] = (acc[expense.category] || 0) + parseFloat(expense.amount);
      return acc;
    }, {});

    const formattedData = Object.keys(categoryTotals).map((category, index) => ({
      name: category,
      value: categoryTotals[category],
      color: COLORS[index % COLORS.length],
    }));

    setChartData(formattedData);
  }, []);

  // Reset Function
  const handleReset = () => {
    setExpenses([]);
    setChartData([]);
    localStorage.removeItem("expenses");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Expense History</h1>
      
      {/* Reset Button */}
      <button onClick={handleReset} className="reset-button mr-4">
        Reset Expenses
      </button>

      <ul className="space-y-2 mt-4">
        {expenses.length === 0 ? (
          <p>No expenses recorded yet.</p>
        ) : (
          expenses.map((expense, index) => (
            <li key={index} className="border p-2 flex justify-between rounded-md shadow-md">
              <span>{expense.description} - ₹{expense.amount} ({expense.category})</span>
              <span className="text-gray-500 text-sm">{expense.date}</span>
            </li>
          ))
        )}
      </ul>

      <h2 className="text-xl font-bold mt-6">Expense Breakdown</h2>
      {chartData.length > 0 ? (
        <PieChart width={400} height={400}>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={120}
            fill="#8884d8"
            dataKey="value"
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default Dashboard;
