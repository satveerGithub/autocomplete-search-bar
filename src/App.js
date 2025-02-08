import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
 const [recipes, setRecipes] = useState([]);
 const  [input , setInput] = useState('')
 const [showResult , setShowResult] =  useState(false)
 

  const inputHandle = (e)=>{
    setInput(
          e.target.value
    )
  }
  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/recipes/search?q=" +input);
    const jsonData = await data.json();
    setRecipes(jsonData.recipes);
  };
  useEffect(() => {
    fetchData();
  }, [input]);

  return (
    <div className="container">
      <h1> Autocompelet Search Bar</h1>
      <div className="search-bar">
        <input type="text" value= {input}
         onChange = {(e)=>inputHandle(e)}
         onFocus={()=>setShowResult(true)}
         onBlur={()=>setShowResult(false)}

        />
         <button> search</button>
        </div>
        {showResult &&  <div className="result-container">
        {recipes.map((data) => (
          <div className="result">
             <span> {data.name}</span>
          </div>
        ))}
      </div>}
     
    </div>
  );
}

export default App;
