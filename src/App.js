import React, {useEffect, useState} from "react";
import axios from "axios";

import Header from "./components/header";
import CategoriesList from "./components/CategoriesList";
import ListExpenses from "./components/ListExpenses";

import "./assets/styles/general.css"



function App() {

  const [categories, setCategories] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState({
    id:"0",
    name:"all"
  })
  const [expenses, setExpenses] =useState(null)

useEffect(()=>{
  axios
    .get("http://localhost:3004/categories")
    .then((res)=> {
      setCategories(res.data)
    })
    .catch((err)=>{
      console.log(err);
    })
  axios
    .get("http://localhost:3004/expenses")
    .then((res)=>{
      setExpenses(res.data)
    })
    .catch((err)=>{
      console.log(err);
    })

}, []);

if(categories === null || expenses === null ){
  return null
};


  return (
    <div className="App">
      <Header />
      <CategoriesList categories={categories} 
      selectedCategory = {selectedCategory} 
      setSelectedCategory = {setSelectedCategory}
      />
      <ListExpenses 
      expenses ={expenses}
      categories = {categories}/>
    </div>
  );
}

export default App;
