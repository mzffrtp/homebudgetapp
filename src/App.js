import React, {useEffect, useState} from "react";
import axios from "axios";

import Header from "./components/header";
import CategoriesList from "./components/CategoriesList";

import "./assets/styles/general.css"


function App() {

  const [categories, setCategories] = useState(null)

useEffect(()=>{
  axios
    .get("http://localhost:3004/categories")
    .then((res)=> {
      setCategories(res.data)
    })
    .catch((err)=>{
      console.log(err);
    })

}, []);

if(categories === null){
  return null
};


  return (
    <div className="App">
      <Header />
      <CategoriesList categories={categories}/>
    </div>
  );
}

export default App;
