import React from 'react';


function Profile() {
    let url = 'https://vishnusayanth.pythonanywhere.com/api/countries/';
    const tokenString = process.env.REACT_APP_NIRVANA_API_KEY;
    let [countries, setCountries] = React.useState([]);
    React.useEffect(() => {
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${tokenString}`,
            },
        }).then(resp => resp.json()).then(resp => setCountries(resp.countries))
    });
    return (
        <React.Fragment>
            <div className="row">
                <div className="col-12 col-xl-8">
                    <div className="card card-body bg-white border-light shadow-sm mb-4">
                        <h2 className="h5 mb-4">Contact me</h2>
                        <form id={"form"} action={'https://vishnusayanth.pythonanywhere.com/contact/'}>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <div>
                                        <label htmlFor="first_name">Name</label>
                                        <input className="form-control" name="name" type="text"
                                               placeholder="Enter your name" required/>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <div className="form-group">
                                        <label htmlFor="subject">Subject</label>
                                        <input className="form-control" name="subject" type="text"
                                               placeholder="What's up?" required/>
                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-center">
                                <div className="col-md-6 mb-3">
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input className="form-control" name="email" type="email"
                                               placeholder="name@email.com" required/>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="location">Location</label>
                                    <select className="form-select mb-0" name="location" aria-label="Select location">
                                        <option value="">Select location</option>
                                        {countries.map(country => {
                                            return <option id={country.name} key={country.name}>
                                                {country.name}
                                            </option>
                                        })}
                                    </select>
                                </div>
                            </div>
                            <h3 className="h5 my-4">Message</h3>
                            <div className="row">
                                <div className="form-group">
                                    <textarea className="form-control" name="message"
                                              placeholder="Enter your message" required>
                                        </textarea>
                                </div>
                            </div>
                            <div className="mt-3">
                                <button type="submit" className="btn btn-primary">Send
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-12 col-xl-4">
                    <div>
                        <br/>
                        <a target={"_blank"} rel={"noreferrer"} href={"https://github.com/vishnusayanth/"}
                                 className="btn btn-github" type="button">
                        <span className="mr-1"><span className="fab fa-github"> </span></span>
                        GitHub
                    </a>
                        <br/>
                        <br/>
                        <a target={"_blank"} rel={"noreferrer"} href={"https://hackerrank.com/vishnusayanth/"}
                           className="btn btn-success" type="button">
                            <span className="mr-1"><span className="fab fa-hackerrank"> </span></span>
                            HackerRank
                        </a>
                        <br/>
                        <br/>
                        <a target={"_blank"} rel={"noreferrer"} href={"https://vishnusayanth.github.io/"}
                           className="btn btn-primary" type="button">
                            <span className="mr-1"><span className="fab fa-firefox"> </span></span>
                            Web Page
                        </a>
                        <br/>
                        <br/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Profile;
