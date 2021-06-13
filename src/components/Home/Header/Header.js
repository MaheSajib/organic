import React from 'react';
import HeaderMenu from '../HeaderMenu/HeaderMenu';
import "./Header.css";
import flower from '../../../img/flower.png'

const Header = () => {
    return (
        <div className="container-fluid header-main">
            <div className="container">
                <HeaderMenu></HeaderMenu>
                <main style={{ height: '600px' }} className="row d-flex align-items-center">
                    <div className="col-md-6 ">
                        <h1 style={{ color: '#374b5c', fontWeight:'1000px'}}><span style={{ color: '#374b5c', fontSize:'30px'}}>Healthy life with</span> <b><br />Nature Organic</b></h1>
                        <p className="pera">Vegetables are the edible parts of a plant <br /> that is used in cooking or can be eaten now.</p>
                        <button className="explore-button text-white">Explore Now</button>
                    </div>
                    <div className="col-md-6 hero-flower">
                        <img src={flower} alt="" className="flower" />
                    </div>
                </main>
            </div>

        </div>
    );
};

export default Header;