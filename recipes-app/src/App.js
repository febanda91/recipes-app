import React, { Component } from 'react';
import './App.css';

const App = () => {

  const APP_ID = "9ad3b61d"
  const APP_KEY = "200e686d3a298a1e3ccd0d702fdc6c4a"


  const exampleReq =  `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`

  return(
    <div className="App">
      <form className="search-form">
        <input className="search-bar"type="text"></input>
        <button className="search-button"type="submit">Search</button>
      </form>
    </div>
  )
}

export default App;
