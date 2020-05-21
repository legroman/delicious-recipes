import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";
import App from './App';
import * as serviceWorker from './serviceWorker';
import {RecipeProvider} from "./context";

ReactDOM.render(
    <React.StrictMode>
        <RecipeProvider>
            <Router>
                <App/>
            </Router>
        </RecipeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

serviceWorker.unregister();
