import React from 'react';
import ReactDOM from 'react-dom';
import Home from "./Home";
import Nasa from './nasa_src/Nasa';
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
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route exact path="/home">
                    <Home/>
                </Route>
                <Route exact path="/nasa">
                    <Nasa/>
                </Route>
                <Route exact path="/location">
                    <Location/>
                </Route>
                <Route exact path="/profile">
                    <Profile/>
                </Route>
            </Switch>
        </Router>
    </React.StrictMode>,
    document.getElementById('content')
);
