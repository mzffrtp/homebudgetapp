import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddExpense from "./pages/AddExpense";
import EditExpense from "./pages/EditExpense";
import CategoryActions from "./pages/CategoryActions";

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-expense" element={<AddExpense />} />
        <Route path="/edit-expense/:expenseId" element={<EditExpense />} />
        <Route path="/category-actions" element={<CategoryActions />} />


      </Routes>
      </BrowserRouter>

      
    </div>
  );
}

export default App;
