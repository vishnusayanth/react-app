import React from 'react';
import ReactDOM from 'react-dom';
import Nasa from './nasa_src/Nasa';
import Express from "./express_src/Express";
import Location from "./nirvana_src/Location";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <li key="0">
                <Link to="/home">Home</Link>
            </li>
            <li key="1">
                <Link to="/nasa">Nasa</Link>
            </li>
            <li key="2">
                <Link to="/location">Location</Link>
            </li>
            <li key="3">
                <Link to="/movies">Movies</Link>
            </li>
            <div>
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
            </div>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);
