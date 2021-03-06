import React from 'react';

function Details(props) {
    if (props.country) {
        return (
            <div key="details">
                <div key="div-1">
                    <h2 className="display-4" key="title-0" align="center">{props.country.name}</h2>
                    <ul key="ul-2">
                        <li className="lead" key="continent">
                            Continent : {props.country.continent_name}
                        </li>
                        <li className="lead" key="capital">
                            Capital : {props.country.capital}
                        </li>
                        <li className="lead" key="official_language">
                            Official Language : {props.country.official_language}
                        </li>
                        <li className="lead" key="country_code">
                            Country code : {props.country.country_code}
                        </li>
                        <li className="lead" key="iso_code">
                            ISO Code : {props.country.iso_code}
                        </li>
                    </ul>
                </div>
                <h3 align="center">
                    States
                </h3>
                <div className="overflow-auto" data-spy="scroll" style={{height: 300}}>
                    <ul className="list-group">
                        {
                            props.states.map(state => {
                                    return (
                                        <li className="list-group-item" key={state.name}>
                                            <h6 key={state.name}>{state.name}</h6>
                                        </li>
                                    )
                                }
                            )
                        }
                    </ul>
                </div>
            </div>
        )
    } else {
        return '';
    }
}

export default Details;
