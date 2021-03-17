import React from 'react';
import {useState} from 'react';
import Rovers from "./Rovers";
import Camera from "./Camera";
import Apod from "./Apod";


function Nasa() {
    let token = process.env.REACT_APP_NASA_API_KEY;
    let apod = `https://api.nasa.gov/planetary/apod?api_key=${token}`;
    const [photos, setPhotos] = React.useState(null);

    const [selectedRover, setSelectedRover] = useState(null);
    let [apodItem, setApodItem] = React.useState(null);
    React.useEffect(() => {
        fetch(
            apod
        ).then(res => res.json()).then(res => setApodItem(res));
    }, [apod, setApodItem]);
    React.useEffect(() => {
        if (selectedRover) {
            fetch(
                `https://api.nasa.gov/mars-photos/api/v1/rovers/${selectedRover}/photos?sol=1000&page=1&api_key=${token}`
            ).then(res => res.json()).then(res => setPhotos(res.photos));
        }
    }, [selectedRover, token]);

    return (
        <React.Fragment>
            <div className="content" key="nasa">
                <div className="overflow-auto" data-spy="scroll">
                    <h3 align="center" className="alert alert-success">Rovers</h3>
                    <Rovers apiKey={token} selectFunction={setSelectedRover}/>
                </div>
                <div>
                    <h3 align="center" className="alert alert-success">Details</h3>
                    <div id="details">
                        <Camera apiKey={token} photos={photos}/>
                    </div>
                </div>
                <div>
                    <Apod item={apodItem}/>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Nasa;
