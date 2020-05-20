import React from "react";
export default function Form({getRecipe}) {
    return(
        <form onSubmit={getRecipe}>
            <input type="text" name="recipeName"/>
            <button>Search</button>
        </form>
    )
}