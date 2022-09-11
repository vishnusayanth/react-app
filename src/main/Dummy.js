import Table from "../components/Table";
import React from "react";

export default function Dummy() {
    return <React.Fragment>
        <div className="col-xxl-4 col-md-6">
            <div className="card info-card sales-card">


                <div className="card-body">
                    <h5 className="card-title">Sales <span>| Today</span></h5>

                    <div className="d-flex align-items-center">
                        <div
                            className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                            <i className="bi bi-cart"></i>
                        </div>
                        <div className="ps-3">
                            <h6>145</h6>
                            <span className="text-success small pt-1 fw-bold">12%</span> <span
                            className="text-muted small pt-2 ps-1">increase</span>

                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div className="col-xxl-4 col-md-6">
            <div className="card info-card revenue-card">


                <div className="card-body">
                    <h5 className="card-title">Revenue <span>| This Month</span></h5>

                    <div className="d-flex align-items-center">
                        <div
                            className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                            <i className="bi bi-currency-dollar"></i>
                        </div>
                        <div className="ps-3">
                            <h6>$3,264</h6>
                            <span className="text-success small pt-1 fw-bold">8%</span> <span
                            className="text-muted small pt-2 ps-1">increase</span>

                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div className="col-xxl-4 col-xl-12">

            <div className="card info-card customers-card">


                <div className="card-body">
                    <h5 className="card-title">Customers <span>| This Year</span></h5>

                    <div className="d-flex align-items-center">
                        <div
                            className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                            <i className="bi bi-people"></i>
                        </div>
                        <div className="ps-3">
                            <h6>1244</h6>
                            <span className="text-danger small pt-1 fw-bold">12%</span> <span
                            className="text-muted small pt-2 ps-1">decrease</span>

                        </div>
                    </div>

                </div>
            </div>

        </div>
        <div className="col-12">
            <div className="card">


                <div className="card-body">
                    <h5 className="card-title">Reports <span>/Today</span></h5>
                    <Table/>

                </div>

            </div>
        </div>
        <div className="col-12">
            <div className="card recent-sales overflow-auto">


                <div className="card-body">
                    <h5 className="card-title">Recent Sales <span>| Today</span></h5>

                    <Table/>

                </div>

            </div>
        </div>
        <div className="col-12">
            <div className="card top-selling overflow-auto">


                <div className="card-body pb-0">
                    <h5 className="card-title">Top Selling <span>| Today</span></h5>

                    <table className="table table-borderless">
                        <thead>
                        <tr>
                            <th scope="col">Preview</th>
                            <th scope="col">Product</th>
                            <th scope="col">Price</th>
                            <th scope="col">Sold</th>
                            <th scope="col">Revenue</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row"><a href="#"><img src="assets/img/product-1.jpg"
                                                             alt=""/></a></th>
                            <td><a href="#" className="text-primary fw-bold">Ut inventore ipsa
                                voluptas nulla</a></td>
                            <td>$64</td>
                            <td className="fw-bold">124</td>
                            <td>$5,828</td>
                        </tr>
                        <tr>
                            <th scope="row"><a href="#"><img src="assets/img/product-2.jpg"
                                                             alt=""/></a></th>
                            <td><a href="#" className="text-primary fw-bold">Exercitationem
                                similique doloremque</a></td>
                            <td>$46</td>
                            <td className="fw-bold">98</td>
                            <td>$4,508</td>
                        </tr>
                        <tr>
                            <th scope="row"><a href="#"><img src="assets/img/product-3.jpg"
                                                             alt=""/></a></th>
                            <td><a href="#" className="text-primary fw-bold">Doloribus nisi
                                exercitationem</a></td>
                            <td>$59</td>
                            <td className="fw-bold">74</td>
                            <td>$4,366</td>
                        </tr>
                        <tr>
                            <th scope="row"><a href="#"><img src="assets/img/product-4.jpg"
                                                             alt=""/></a></th>
                            <td><a href="#" className="text-primary fw-bold">Officiis quaerat
                                sint rerum error</a></td>
                            <td>$32</td>
                            <td className="fw-bold">63</td>
                            <td>$2,016</td>
                        </tr>
                        <tr>
                            <th scope="row"><a href="#"><img src="assets/img/product-5.jpg"
                                                             alt=""/></a></th>
                            <td><a href="#" className="text-primary fw-bold">Sit unde debitis
                                delectus repellendus</a></td>
                            <td>$79</td>
                            <td className="fw-bold">41</td>
                            <td>$3,239</td>
                        </tr>
                        </tbody>
                    </table>

                </div>

            </div>
        </div>
    </React.Fragment>
}