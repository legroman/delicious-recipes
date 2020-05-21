import React, {Component} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import {Spinner} from "react-bootstrap";

export default class Recipe extends Component {
    state = {
        activeRecipe: [],
        spinner: false
    };

    componentDidMount() {
        const recipe_id = this.props.location.state;
        this.setState({spinner: true});

        axios.get(`https://cors-anywhere.herokuapp.com/https://recipesapi.herokuapp.com/api/get?rId=${recipe_id}`)
            .then(res => this.setState({activeRecipe: res.data.recipe, spinner: false}))
            .then(() => console.log(this.state.activeRecipe))
    }

    render() {
        const recipe = this.state.activeRecipe;

        if (!this.state.spinner){
            return(
                <div className="container">
                    <div className="active-recipe">
                        <img className="active-recipe__img" src={recipe.image_url} alt="photo"/>
                        <h3 className="active-recipe__title">{recipe.title}</h3>
                        <h4 className="active-recipe__publisher">
                            Publisher: <span>{recipe.publisher}</span>
                        </h4>
                        <p className="active-recipe__website">
                            Website: <span><a href={recipe.publisher_url}>{recipe.publisher_url}</a></span>
                        </p>
                        <button className="active-recipe__button">
                            <Link className="text-decoration-none" to="/">Go Home</Link>
                        </button>
                    </div>
                </div>
            )
        }else
            return <Spinner className="spinner" animation="grow" />
    }
}