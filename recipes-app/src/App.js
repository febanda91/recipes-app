import React, {useEffect, useState, Component} from 'react';
import Recipe from './Recipe'
import './App.css';

const App = () => {

  const APP_ID = "9ad3b61d"
  const APP_KEY = "200e686d3a298a1e3ccd0d702fdc6c4a"

  const [recipes, setRecipes] = useState([])
  


  useEffect(() => {
    getRecipes()
  }, [])

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json()
    setRecipes(data.hits)
  }



  return(
    <div className="App">
      <form className="search-form">
        <input className="search-bar"type="text"></input>
        <button
        className="search-button"type="submit">Search</button>
      </form>
      {recipes.map(recipe => (
        <Recipe title={recipe.recipe.label} calories={recipe.recipe.calories}
        image={recipe.recipe.image}/>
      ))}
    </div>
  )
}

export default App;
