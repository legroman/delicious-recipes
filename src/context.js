import React, {Component} from "react";
import axios from "axios";

const RecipeContext = React.createContext();

class RecipeProvider extends Component{
    state = {
        recipes: [],
        spinner: false
    };

    getRecipe = e => {
        e.preventDefault();
        const recipeName = e.target.elements.recipeName.value;
        this.setState({spinner: true});

        axios.get
        (`https://cors-anywhere.herokuapp.com/https://recipesapi.herokuapp.com/api/search?q=${recipeName}`)
            .then(res => this.setState({recipes: res.data.recipes, spinner: false}));
    };
    render() {
        return (
            <RecipeContext.Provider value={
                {
                    ...this.state,
                    getRecipe: this.getRecipe
                }
            }>
                {this.props.children}
            </RecipeContext.Provider>
        );
    }
}

const RecipeConsumer = RecipeContext.Consumer;

export {RecipeProvider, RecipeConsumer};