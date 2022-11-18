import React from "react";
import { Link } from "react-router-dom";
import "../style/Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMugHot, faCartShopping } from '@fortawesome/free-solid-svg-icons'
// import { faCoconut } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {

    // icon
    const iconCoffee = <FontAwesomeIcon icon={faMugHot} className="me-1 icon-coffee" />
    const iconShoppingCart = <FontAwesomeIcon icon={faCartShopping} className="me-1" />

    return (
        <div className="container-fluid border mb-5">
            <div className="row">
                <div className="col">
                    <nav className="navbar navbar-expand-md bg-light p-5">
                        <div className="container-fluid constainer-fluid-2">
                            <Link className="navbar-brand text-uppercase text-icon-coffee" to="/">{iconCoffee}Group Coffee</Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse centered-navbar" id="navbarNavAltMarkup">
                                <div className="navbar-nav">
                                    <Link className="nav-link active text-uppercase" to="/">Home</Link>
                                    <Link className="nav-link active text-uppercase" to="/about">About</Link>
                                    <Link className="nav-link active text-uppercase" to="/history">History</Link>
                                    <Link className="nav-link active text-uppercase" to="/contacts">Contacts</Link>
                                    <Link className="nav-link active text-uppercase" to="/products">Products</Link>
                                    <Link className="nav-link active text-uppercase" to="/services">Services</Link>
                                    <Link className="nav-link active text-uppercase troly" to="/troly">{iconShoppingCart} <span className="position-absolute top-5 start-85 translate-middle badge rounded-pill bg-success">10</span></Link>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Navbar;