import React from 'react';
import {useState} from 'react';
import Countries from './Countries';
import Details from './Details';


function Location() {
    const [fetchDone, setFetchDone] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const tokenString = process.env.REACT_APP_NIRVANA_API_KEY;
    let [states, setStates] = React.useState([]);
    let [countries, setCountries] = React.useState([]);
    let setCountry = country => {
        setSelectedCountry(country);
        setStates([]);
        fetch(`https://vishnusayanth.pythonanywhere.com/api/states/${country.id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${tokenString}`,
            },
        }).then(resp => resp.json()).then(resp => setStates(resp.states))
    }
    React.useEffect(() => {
        setFetchDone(false);
        fetch(`https://vishnusayanth.pythonanywhere.com/api/countries/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${tokenString}`,
            },
        }).then(resp => resp.json()).then(resp => setCountries(resp.countries)).then(() => setFetchDone(true))
    }, [tokenString]);

    if (!fetchDone) {
        return <div style={{height: 505}} align={"center"}>
            <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>;
    } else {
        return (
            <React.Fragment>
                <div className="card overflow-auto" data-spy="scroll" style={{height: 505}}>
                    <h3 align="center">Countries</h3>
                    <Countries TOKEN={tokenString} countries={countries} selectFunction={setCountry}
                               key="country"/>
                </div>
                <div className="modal fade" id="modal-form-signup" tabIndex="-1" role="dialog"
                     aria-labelledby="modal-form-signup" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-body p-0">
                                <div className="card border-light p-4">
                                    <Details TOKEN={tokenString} country={selectedCountry} states={states}
                                             key="detail"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Location;
