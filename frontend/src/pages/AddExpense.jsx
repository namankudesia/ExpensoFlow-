import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddExpense = () => {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Food");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newExpense = { amount, description, category, date: new Date().toLocaleString() };
    
    // Get existing expenses from localStorage
    const expenses = JSON.parse(localStorage.getItem("expenses")) || [];
    expenses.push(newExpense);
    
    // Save updated expenses list
    localStorage.setItem("expenses", JSON.stringify(expenses));
    
    navigate("/");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Add Expense</h1>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Amount"
          className="border p-2 w-full"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          className="border p-2 w-full"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <select
          className="border p-2 w-full"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>Food</option>
          <option>Transport</option>
          <option>Shopping</option>
          <option>Rent</option>
          <option>Other</option>
        </select>
        <button className="bg-blue-600 text-white p-2 w-full">Add</button>
      </form>
    </div>
  );
};

export default AddExpense;
