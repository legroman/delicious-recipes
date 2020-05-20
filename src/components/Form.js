import React from "react";
export default function Form({getRecipe}) {
    return(
        <form className="mb-5" onSubmit={getRecipe}>
            <input className="form__input" type="text" name="recipeName"/>
            <button className="form__button">Search</button>
        </form>
    )
}