import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import { Link } from 'react-router-dom';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark back">
                <div className="container-fluid ps-2 pe-2 pt-3 pb-3">

                    {/* Logo (Start) */}
                    <Link className="navbar-brand tel" to="/">Nice Telecom</Link>

                    {/* Toggle Button */}
                    <button
                        className="navbar-toggler custom-toggler"
                        type="button"
                        onClick={handleToggle}
                    >
                        {isOpen ? (
                            <span style={{ fontSize: "44px", color: "#fff" }}>&times;</span>
                        ) : (
                            <span className="navbar-toggler-icon"></span>
                        )}
                    </button>

                    {/* Menu Items */}
                    <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
                        {/* Desktop: Center align pages */}
                        <ul className="navbar-nav mb-2 mb-lg-0 link mx-lg-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/" onClick={handleClose}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about" onClick={handleClose}>About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/product" onClick={handleClose}>Product</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/service" onClick={handleClose}>Service</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact" onClick={handleClose}>Contact</Link>
                            </li>
                        </ul>

                        {/* Desktop: End Button | Mobile: In menu */}
                        <button className="btn ms-lg-3" onClick={handleClose}>
                            Get in touch <i className="fa-solid fa-arrow-right"></i>
                        </button>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
