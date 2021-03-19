import React from 'react';

function Countries(props) {
    return (
        <div className="table-responsive">
            <table className="table align-items-center table-flush">
                <thead className="thead-light">
                <tr>
                    <th scope="col"><span className="icon icon-xs mr-3">
                        <span className="fas fa-flag"></span></span>
                        Flag
                    </th>
                    <th scope="col"><span className="icon icon-xs mr-3">
                        <span className="fas fa-chess-king"></span></span>
                        Country
                    </th>
                    <th scope="col"><span className="icon icon-xs mr-3">
                        <span className="fas fa-star"></span></span>
                        Capital
                    </th>
                    <th scope="col"><span className="icon icon-xs mr-3">
                        <span className="fas fa-microphone"></span></span>
                        Official language
                    </th>
                    <th scope="col">
                        <span className="icon icon-xs mr-3">
                            <span className="fas fa-globe-europe"></span></span>
                        Continent
                    </th>
                </tr>
                </thead>
                <tbody>
                {props.countries.map(country => {
                    let img_src = "https://www.countryflags.io/X/shiny/16.png".replace('X', country.iso_code.split('/')[0].toLowerCase().replace(' ', ''));
                    return (
                        <tr key={country.name} className={"search-item"}>
                            <td>
                                <span className="icon icon-sm">
                                    <img src={img_src} alt={"flag img"}/>
                                </span>
                            </td>
                            <td data-toggle="modal" data-target="#modal-form-signup"
                                onClick={() => props.selectFunction(country)}>
                                <button className="btn btn-light btn-sm mr-2">{country.name}</button>
                            </td>
                            <td>
                                {country.capital}
                            </td>
                            <td>
                                {country.official_language}
                            </td>
                            <td>
                                {country.continent_name}
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    )
}

export default Countries;
