import React, {Component} from 'react';
import {Switch, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from "./components/Header";
import Recipes from "./components/Recipes";
import Recipe from "./components/Recipe";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <Switch>
                    <Route exact path="/" component={Recipes}/>
                    <Route path="/recipe/:id" component={Recipe}/>
                </Switch>
            </div>
        );
    }
}

export default App;
