import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-regular-svg-icons'

const Testimonial = (props) => {
    const { quote, name, img, qutImg } = props.testimonial;
    return (
        <div className="shadow-sm py-5">
            <div className="mb-3">
                <img style={{ height: '50px', width: '60px' }} className="mx-3 " src={qutImg} alt="" />
            </div>
            <div className=" text-center align-items-center">
                <img style={{ height: '60px', width: '60px' }} className="mx-3 rounded-circle" src={img} alt="" />
                <h5 className="mb-3 card-name">{name}</h5>
                <div className="flex">
                    <FontAwesomeIcon className="second-color" icon={faStar} />
                    <FontAwesomeIcon className="second-color" icon={faStar} />
                    <FontAwesomeIcon className="second-color" icon={faStar} />
                    <FontAwesomeIcon className="second-color" icon={faStar} />
                    <FontAwesomeIcon className="second-color" icon={faStar} />
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <p className="card-text text-center w-50">{quote}</p>
            </div>
        </div>
    );
};

export default Testimonial;