import React from "react";


export default function Home() {
    return (
        <React.Fragment>
            <div className="preloader bg-soft flex-column justify-content-center align-items-center">
                <img className="loader-element animate__animated animate__jackInTheBox"
                     src="./assets/img/logo.png" height="60" alt="App logo"/>
            </div>
            <div className="container">
                    <div className="text-center">
                            <img className="navbar-brand-dark" src={"./assets/img/logo.png"} height="50" width="50"
                                 alt="Logo"/>
                                <div className={"text-dark"}>
                                    <h1 className="display-1">Nirvana</h1>
                                    <div className="mb-5">
                                        <h2 className="h3 text-muted mr-3">Application built using React.js </h2>
                                    </div>
                                    <div className="d-flex justify-content-center align-items-end flex-wrap mb-6">
                                        <a href="https://github.com/vishnusayanth/react-app"  className="btn btn-secondary text-dark mr-4 mb-3 mb-lg-0"><span
                                            className="fas fa-info-circle mr-2 d-none d-sm-inline"> </span> Source code</a>
                                        <a href="/profile"  className="btn btn-secondary text-dark mr-4 mb-3 mb-lg-0"><span
                                            className="fas fa-user-lock mr-2 d-none d-sm-inline"> </span> About developer</a>
                                    </div>
                                </div>
                    </div>
                </div>
            <section className="section section-lg bg-primary text-white">
                <div className="container">
                    <div className="col-12 text-center row justify-content-center mb-5 mb-lg-6">
                            <h2 className="h1 px-lg-5">Features</h2>
                            <p className="lead px-lg-8">This application provides the below features built from various external API sources.</p>
                    </div>
                    <div className="row">
                        <div className="col-12 col-sm-6 col-lg-3">
                            <div className="card bg-white shadow-soft text-primary rounded mb-4">
                                <div className="px-3 px-lg-4 py-5 text-center">
                                    <span className="icon icon-lg mb-4"><span
                                        className="fas fa-sun"> </span></span>
                                    <h5 className="font-weight-bold text-primary">Mars rovers' snapshots</h5>
                                    <p>Built with the help of API provided by NASA</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3">
                            <div className="card bg-white shadow-soft text-primary rounded mb-4">
                                <div className="px-3 px-lg-4 py-5 text-center">
                                    <span className="icon icon-lg mb-4"><span className="fas fa-rocket"> </span></span>
                                    <h5 className="font-weight-bold text-primary">Astronomy Pic Of the Day</h5>
                                    <p>Updated by NASA everyday</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3">
                            <div className="card bg-white shadow-soft text-primary rounded mb-4">
                                <div className="px-3 px-lg-4 py-5 text-center">
                                    <span className="icon icon-lg mb-4"><span
                                        className="fas fa-map-pin"> </span></span>
                                    <h5 className="font-weight-bold text-primary">Geographical Data</h5>
                                    <p>Built using another hobby project data</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3">
                            <div className="card bg-white shadow-soft text-primary rounded mb-4">
                                <div className="px-3 px-lg-4 py-5 text-center">
                                    <span className="icon icon-lg mb-4"><span className="fab fa-imdb"> </span></span>
                                    <h5 className="font-weight-bold text-primary">Movies Data</h5>
                                    <p>Built using another hobby project data</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </React.Fragment>
);
}