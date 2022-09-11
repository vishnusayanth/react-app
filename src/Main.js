import React from "react";
import Dummy from "./main/Dummy";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Error from "./main/Error";
import Dog from "./components/Dog";
import Geography from "./main/Geography";
import Movie from "./main/Movie";
import Nasa from "./main/Nasa";
import Joke from "./components/Joke";

function Main() {
    let [pageTitle, setPageTitle] = React.useState('Dashboard');
    return (
        <React.Fragment>
            <aside id="sidebar" className="sidebar">
                <ul className="sidebar-nav" id="sidebar-nav">

                    <li className="nav-item">
                        <a className="nav-link " data-bs-target="#components-nav" data-bs-toggle="collapse" href="#">
                            <i className="bi bi-menu-button-wide"></i><span>Yo Mamma jokes!</span><i
                            className="bi bi-chevron-down ms-auto"></i>
                        </a>
                        <ul id="components-nav" className="nav-content collapse show" data-bs-parent="#sidebar-nav">
                            <li>
                                <Joke/>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-heading">Pages</li>

                    <li className="nav-item">
                        <a className="nav-link collapsed" href="\nasa">
                            <i className="bi bi-airplane"></i>
                            <span>Nasa</span>
                        </a>
                    </li>


                    <li className="nav-item">
                        <a className="nav-link collapsed" href="\movie">
                            <i className="bi bi-film"></i>
                            <span>Movies</span>
                        </a>
                    </li>


                    <li className="nav-item">
                        <a className="nav-link collapsed" href="\geography">
                            <i className="bi bi-globe"></i>
                            <span>Geography</span>
                        </a>
                    </li>


                </ul>
            </aside>
            <main id="main" className="main">
                <div className="pagetitle">
                    <h1>{pageTitle}</h1>
                </div>
                <section className="section dashboard">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row">

                                <BrowserRouter>
                                    <Routes>
                                        <Route exact path="/" element={<Dummy setPageTitle={setPageTitle}/>}/>
                                        <Route exact path="nasa" element={<Nasa setPageTitle={setPageTitle}/>}/>
                                        <Route exact path="geography"
                                               element={<Geography setPageTitle={setPageTitle}/>}/>
                                        <Route exact path="movie" element={<Movie setPageTitle={setPageTitle}/>}/>
                                        <Route exact path="error" element={<Error setPageTitle={setPageTitle}/>}/>
                                    </Routes>
                                </BrowserRouter>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <div className="modal fade" id="verticalycentered" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered">
                            <Dog/>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Main;
