import React from "react";
import {RecipeConsumer} from "../context";

export default function Form() {
    return (
        <RecipeConsumer>
            {
                value => {
                    return(
                        <form className="mb-5" onSubmit={value.getRecipe}>
                            <input className="form__input" type="text" name="recipeName"/>
                            <button className="form__button">Search</button>
                        </form>
                    )
                }
            }
        </RecipeConsumer>
    )
}