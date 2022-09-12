import Table from "../components/Table";
import React from "react";

export default function Home() {
    return <section id="hero" className="d-flex align-items-center">
        <div className="container-fluid" data-aos="fade-up">
            <div className="row justify-content-center">
                <div
                    className="col-xl-5 col-lg-6 pt-3 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
                    <h1>Nirvana</h1>
                    <h4>This is an open source web application that consumes APIs from
                        <a target="_blank" href="https://python.vishnusayanth.com"> Nirvana</a>,
                        <a target="_blank" href="https://api.nasa.gov/"> Nasa</a> and
                        <a target="_blank" href="https://www.omdbapi.com/"> OMDB</a>.</h4>

                </div>
                <div className="col-xl-4 col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="150">
                    <img src="https://python.vishnusayanth.com/static/assets/img/hero-img.png"
                         className="img-fluid animated" alt=""/>
                </div>
            </div>
        </div>

    </section>
}