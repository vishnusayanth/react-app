import React from 'react';

function Countries(props) {
    return (
        <div className="overflow-scroll" key="countries">
            <input className="form-control" id="search" placeholder="Search" key="search-0"/>
            <ul className="list-group" key="ul-3">
                {props.countries.map(country => {
                    return (
                        <li className="list-group-item cursor countries" key={country.name}
                            onClick={() => props.selectFunction(country)}>
                            <h5 key={country.name}>{country.name}</h5>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
export default Countries;
