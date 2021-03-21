import React from 'react';
import ReactDOM from 'react-dom';
import About from "./About";
import Nasa from './nasa_src/Nasa';
import Express from "./express_src/Express";
import Location from "./nirvana_src/Location";
import Profile from "./Profile";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Switch>
                <Route exact path="/home">
                    <h1>Home</h1>
                </Route>
                <Route exact path="/about">
                    <About/>
                </Route>
                <Route exact path="/nasa">
                    <Nasa/>
                </Route>
                <Route exact path="/location">
                    <Location/>
                </Route>
                <Route exact path="/movies">
                    <Express/>
                </Route>
                <Route exact path="/profile">
                    <Profile/>
                </Route>
            </Switch>
        </Router>
    </React.StrictMode>,
    document.getElementById('content')
);
