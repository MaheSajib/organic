import React from 'react';
import first from '../../../img/1st.png'
import secound from '../../../img/2nd.png'
import third from '../../../img/3rd.png'

const ProudSection = () => {
    return (
        <div className="container mt-5 my-5">
            <h3 className="text-center main-color">Proudly presented by</h3>
            <p className="text-center main-color">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br />
                incididunt ut labore et dolore magna aliqua.</p>
            <div className="row d-flex justify-content-center">
                <img style={{ height: '10rem', width: '12rem' }} className="mx-3 my-3" src={first} alt="" />
                <img style={{ height: '10rem', width: '12rem' }} className="mx-3 my-3" src={secound} alt="" />
                <img style={{ height: '10rem', width: '12rem' }} className="mx-3 my-3" src={third} alt="" />
                <img style={{ height: '10rem', width: '12rem' }} className="mx-3 my-3" src={secound} alt="" />
                <img style={{ height: '10rem', width: '12rem' }} className="mx-3 my-3" src={first} alt="" />
            </div>
        </div>
    );
};

export default ProudSection;