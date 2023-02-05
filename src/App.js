import React from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddExpense from "./pages/AddExpense";
import EditExpense from "./pages/EditExpense";

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-expense" element={<AddExpense />} />
        <Route path="/edit-expense/:expenseId" element={<EditExpense />} />

      </Routes>
      </BrowserRouter>

      
    </div>
  );
}

export default App;
