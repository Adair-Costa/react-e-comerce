import React from "react";
import "../style/Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright, faTaxi } from '@fortawesome/free-solid-svg-icons'
// import { faCoconut } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {

     // icon
     const iconCopyright = <FontAwesomeIcon icon={faCopyright} className="me-1" />
     const iconTaxi = <FontAwesomeIcon icon={faTaxi} className="me-1" />

    return (
        <div className="container-fluid border footer">
            <div className="row">
                <div className="col d-flex justify-content-center align-items-center">
                    <div className="me-5">
                        <p>{iconCopyright} Adair Costa</p>
                    </div>
                    <div>
                        <p>{iconTaxi} Uber de S.tome e Principe</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;