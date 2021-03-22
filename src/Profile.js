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
    let sendEmail = () => {
        console.log('fn called');
        let url = 'https://vishnusayanth.pythonanywhere.com/contact/';
        let formData = document.querySelector('form');
        formData = new FormData(formData);
        console.log(formData);
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': false,
            },
            body:formData
        }).then(resp => resp.json()).then(resp => alert(resp.data));
    }
    if (countries.length !== 0) {
        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-12 col-xl-8">
                        <div className="card card-body bg-white border-light shadow-sm mb-4">
                            <h2 className="h5 mb-4">Contact me</h2>
                            <form id={"form"}>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <div>
                                            <label htmlFor="first_name">Name</label>
                                            <input className="form-control" id="name" type="text"
                                                   placeholder="Enter your name" required/>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <div className="form-group">
                                            <label htmlFor="phone">Phone</label>
                                            <input className="form-control" id="phone" type="number"
                                                   placeholder="+12-345 678 910" required/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row align-items-center">
                                    <div className="col-md-6 mb-3">
                                        <div className="form-group">
                                            <label htmlFor="email">Email</label>
                                            <input className="form-control" id="email" type="email"
                                                   placeholder="name@email.com" required/>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="location">Location</label>
                                        <select className="form-select mb-0" id="location" aria-label="Select location">
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
                                    <textarea className="form-control" id="message"
                                              placeholder="Enter your message" required>
                                        </textarea>
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <button type="button" onClick={()=>sendEmail()} className="btn btn-primary">Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-12 col-xl-4">
                        <div className="LI-profile-badge" data-version="v1" data-size="large" data-locale="en_US"
                             data-type="horizontal" data-theme="light" data-vanity="vishnusayanth"><a
                            className="LI-simple-link"
                            href='https://in.linkedin.com/in/vishnusayanth?trk=profile-badge'>Vishnu
                            Sayanth A V</a></div>
                        <div>
                            <div className="mb-4 mt-5">
                            </div>
                            <button className="btn btn-github" type="button">
                                <span className="mr-1"><span className="fab fa-github"> </span></span>
                                GitHub
                            </button>
                            <br/>
                            <br/>
                            <button className="btn btn-success" type="button">
                                <span className="mr-1"><span className="fab fa-hackerrank"> </span></span>
                                HackerRank
                            </button>
                            <br/>
                            <br/>
                            <button className="btn btn-primary" type="button">
                                <span className="mr-1"><span className="fab fa-firefox"> </span></span>
                                Web Page
                            </button>
                            <br/>
                            <br/>
                        </div>

                    </div>
                </div>
                <script type="text/javascript" src={"https://platform.linkedin.com/badges/js/profile.js"} async
                        defer> </script>
            </React.Fragment>
        );
    } else {
        return <div style={{height: 505}} align={"center"}>
            <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>;
    }
}

export default Profile;
