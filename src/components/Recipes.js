import React from "react";
import {Link} from "react-router-dom";
import Form from "./Form";
import {RecipeConsumer} from "../context";
import {Spinner} from "react-bootstrap";

export default function Recipes() {
    return (
        <>
            <Form/>
            <div className="container">
                <div className="row">
                    <RecipeConsumer>
                        {
                            value => {
                                if (!value.spinner){
                                    return (
                                        value.recipes.map(recipe => {
                                            return (
                                                <div className="col-md-4 mb-3" key={recipe._id}>
                                                    <div className="recipes__box">
                                                        <img className="recipe__box-img" src={recipe.image_url}
                                                             alt={recipe.title}/>
                                                        <div className="recipe__text">
                                                            <h5 className="recipes__title">
                                                                {recipe.title.length < 20 ? `${recipe.title}` :
                                                                    `${recipe.title.substring(0, 25)}...`}
                                                            </h5>
                                                            <p className="recipes__subtitle">Publisher:
                                                                <span>{recipe.publisher}</span></p>
                                                        </div>
                                                        <button className="recipe_buttons">
                                                            <Link to={{
                                                                pathname: `/recipe/${recipe.recipe_id}`,
                                                                state: recipe.recipe_id
                                                            }}
                                                                  className="text-decoration-none"
                                                            >
                                                                View Recipe
                                                            </Link>
                                                        </button>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    )
                                }else
                                    return (
                                        <div className="spinner-wrapper">
                                            <Spinner className="spinner" animation="grow" />
                                        </div>
                                    )
                            }
                        }
                    </RecipeConsumer>
                </div>
            </div>
        </>
    )
}