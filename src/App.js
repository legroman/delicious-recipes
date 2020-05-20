import React, {Component} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Form from "./components/Form";

class App extends Component {
    state = {
      recipes: []
    };

    getRecipe = e => {
        e.preventDefault();
        const recipeName = e.target.elements.recipeName.value;

        axios.get
        (`https://cors-anywhere.herokuapp.com/https://recipesapi.herokuapp.com/api/search?q=${recipeName}&page=3`)
            .then(res => this.setState({recipes: res.data.recipes}))
            .then(() => console.log(this.state))
    };
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Recipe Search</h1>
                </header>
                <Form getRecipe={this.getRecipe}/>
            </div>
        );
    }
}

export default App;
