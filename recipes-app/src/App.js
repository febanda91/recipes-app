import React, {useEffect, useState, Component} from 'react';
import Recipe from './Recipe'
import './App.css';

const App = () => {

  const APP_ID = "9ad3b61d"
  const APP_KEY = "200e686d3a298a1e3ccd0d702fdc6c4a"

  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState("")
  const [query, setQuery] = useState('chicken')

  


  useEffect(() => {
    getRecipes()
  }, [query])

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json()
    setRecipes(data.hits)
  }

  const updateSearch = e => {
    e.preventDefault()
    setSearch(e.target.value)
  }


  const getSearch = e => {
    e.preventDefault()
    setQuery(search)
    setSearch('')
  }



  return(
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar"type="text" value={search} onChange={updateSearch}></input>
        <button
        className="search-button"type="submit">Search</button>
      </form>
      <div className="recipes">
      {recipes.map(recipe => (
        <Recipe title={recipe.recipe.label} calories={recipe.recipe.calories}
        image={recipe.recipe.image} key={recipe.recipe.label}
        ingredients={recipe.recipe.ingredients}
        />
      ))}
      </div>
    </div>
  )
}

export default App;
