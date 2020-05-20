import React from "react";

export default function Recipes({recipes}) {
    return (

            <div className="container">
                <div className="row">
                    {
                        recipes.map(recipe => {
                            return(
                                <div className="col-md-4 mb-3" key={recipe._id}>
                                    <div className="recipes__box">
                                        <img className="recipe__box-img" src={recipe.image_url} alt={recipe.title}/>
                                        <div className="recipe__text">
                                            <h5 className="recipes__title">
                                                {recipe.title.length < 20 ? `${recipe.title}` :
                                                `${recipe.title.substring(0, 25)}...`}
                                            </h5>
                                            <p className="recipes__subtitle">Publisher:
                                                <span>{recipe.publisher}</span></p>
                                        </div>
                                        <button className="recipe_buttons">View Recipe</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

    )
}