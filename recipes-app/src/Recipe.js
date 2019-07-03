import React from "react"
import styles from "./myName.module.css"
import './App.css';


const Recipe = ({title, calories, image, ingredients}) => {
    return(
        <div className="recipe">
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p>{calories}</p>
            <img className="image"src={image} alt=""></img>

        </div>
    )
}

export default Recipe