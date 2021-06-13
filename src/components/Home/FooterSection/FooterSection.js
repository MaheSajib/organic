import React from 'react';
import './FooterSection.css';
import footlogo from '../../../img/footlogo.png';
import facebook from '../../../img/facebook.png';
import linkedin from '../../../img/linkedin.png';
import instagram from '../../../img/instagram.png';

const FooterSection = () => {
    return (
        <div className="container-fluid footer-back mt-5">
            <div className="container">
                <div className="row py-5">
                    <div className="col-md-4">
                        <img src={footlogo} alt="" />
                        <p className="text-white mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit, sed do eiusmod tempor </p>

                        <hr className="line" />

                        <p className="text-white"> <small>© Copyright 2020 Nature Mahe Alam</small></p>
                    </div>

                    <div className="col-md-4 text-white ">
                        <h4>Information</h4>
                        <hr className="line" />
                        <div className="d-flex">
                            <div className="">
                                <h6>About Us</h6>
                                <h6>Products</h6>
                                <h6>Contact Us</h6>
                                <h6>Terms of Service</h6>
                            </div>
                            <div className="">
                                <h6>About Us</h6>
                                <h6>Products</h6>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 text-white">
                        <h4>Follow Us</h4>
                        <hr className="line" />
                        <div className="d-flex ">
                            <img src={facebook} alt="" />
                            <img className="ms-3" src={linkedin} alt="" />
                            <img className="ms-3" src={instagram} alt="" />
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default FooterSection;