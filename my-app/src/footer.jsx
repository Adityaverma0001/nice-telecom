import React from "react";
import { Link } from 'react-router-dom'


function Footer(){
    return(
        <section className="dark mt-5 overflow-hidden">
            <div className="container-fluid ice">
              <div className="row on">
                <div className="col-lg-3 wth">
                    <h2 className="com">Nice Telecom</h2>
                </div>
                <div className="col-lg-3 wth">
                    <h3 className="text-light company">Explore</h3>
                    <ul className=" linkto list-unstyled">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/product">Product</Link>
                        </li>
                        <li>
                            <Link to="/service">Service</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className="col-lg-3 wth">
                    <h3 className="text-light company">Contact us</h3>
                    <p className="abohar mb-2 mt-3"> 9317966000</p>
                    <p className="abohar">Bazidpur Kattian Wali, Abohar, Punjab</p>
                </div>
                <div className="col-lg-3 wth">
                    <h3 className="text-light company">Follow us</h3>
                    <div className="mt-3">
                        <ul className="insta d-flex">
                            <li>
                                <a href="https://www.instagram.com/ved3240/"><i class="fa-brands fa-instagram"></i></a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/profile.php?id=100015110431444"><i class="fa-brands fa-facebook-f"></i></a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/@Rambhakthanuman6646"><i class="fa-brands fa-youtube"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
              </div>
            </div>
        </section>
    )
}



export default Footer;