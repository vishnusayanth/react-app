import React from 'react';
import {useState} from 'react';
import Countries from './Countries';
import Details from './Details';


function Location() {
    const [selectedCountry, setSelectedCountry] = useState(null);
    const tokenString = process.env.REACT_APP_NIRVANA_API_KEY;
    let [states, setStates] = React.useState([]);
    let [countries, setCountries] = React.useState([]);
    React.useEffect(() => {
        fetch(`https://vishnusayanth.pythonanywhere.com/api/countries/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${tokenString}`,
            },
        }).then(resp => resp.json()).then(resp => setCountries(resp.countries))
    },)
    React.useEffect(() => {
        if (selectedCountry) {
            fetch(`https://vishnusayanth.pythonanywhere.com/api/states/${selectedCountry.id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${tokenString}`,
                },
            }).then(resp => resp.json()).then(resp => setStates(resp.states))
        }
    });
    return (
        <React.Fragment>
            <div className="content" key="location">
                <div className="overflow-auto" data-spy="scroll" key="div-11">
                    <h3 align="center" className="alert alert-success" key="title-11">Countries</h3>
                    <Countries TOKEN={tokenString} countries={countries} selectFunction={setSelectedCountry}
                               key="country"/>
                </div>
                <div key="div-12">
                    <h3 align="center" className="alert alert-success" key="title-12">Details</h3>
                    <div id="details" key="div-13">
                        <Details TOKEN={tokenString} country={selectedCountry} states={states} key="detail"/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
export default Location;
