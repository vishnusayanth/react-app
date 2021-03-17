import React from 'react';
import {useState} from 'react';
import Movies from './Movies';
import Movie from "./Movie";


function Express() {
    const [selectedMovie, setSelectedMovie] = useState(null);
    const selectMovie = movie => evt => {
        setSelectedMovie(movie);
    }

    return (
        <React.Fragment>
            <div className="content" key="express">
                <div className="overflow-auto" data-spy="scroll">
                    <h3 align="center" className="alert alert-success">Movies</h3>
                    <Movies selectFunction={selectMovie}/>
                </div>
                <div>
                    <h3 align="center" className="alert alert-success">Details</h3>
                    <div id="details">
                        <Movie movie={selectedMovie}/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Express;
