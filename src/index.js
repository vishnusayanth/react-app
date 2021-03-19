import React from 'react';
import ReactDOM from 'react-dom';
import Nasa from './nasa_src/Nasa';
import Express from "./express_src/Express";
import Location from "./nirvana_src/Location";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Switch>
                <Route path="/home">
                    <h1>Home</h1>
                </Route>
                <Route path="/nasa">
                    <Nasa/>
                </Route>
                <Route path="/location">
                    <Location/>
                </Route>
                <Route path="/movies">
                    <Express/>
                </Route>
            </Switch>
        </Router>
    </React.StrictMode>,
    document.getElementById('content')
);
