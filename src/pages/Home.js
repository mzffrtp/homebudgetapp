import React, {useEffect, useState} from "react";
import axios from "axios";

import Header from "../components/header";
import CategoriesList from "../components/CategoriesList";
import ListExpenses from "../components/ListExpenses"

const Home = () => {

    const [categories, setCategories] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState({
      id:"0",
      name:"all"
    })
    const [expenses, setExpenses] =useState(null)
    const [rerenderExpenses, setRerenderExpense] = useState(false)
  
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
  
  }, [rerenderExpenses]);
  
  if(categories === null || expenses === null ){
    return null
  };

 return (
    <div>
      <Header whichPage={"categoryActions"}/>
      <CategoriesList categories={categories} 
      selectedCategory = {selectedCategory} 
      setSelectedCategory = {setSelectedCategory}
      />
      <ListExpenses 
      expenses ={expenses}
      categories = {categories}
      selectedCategory ={selectedCategory}
      rerenderExpenses = {rerenderExpenses}
      setRerenderExpense = {setRerenderExpense}
      />
    </div>
 )   
}

export default Home