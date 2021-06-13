import React from 'react';
import './Testimonials.css';
import Testimonial from '../Testimonial/Testimonial';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import carouselImg from '../../../img/carosoul.png';
import qut from '../../../img/qut.png';


const Testimonials = () => {

    const testimonialData = [
        {
            name : 'Jane Doe' ,
            quote : 'Thank you for all the amazing produce and products you deliver each week... you make my life so easy an bring goodness into our family eating.I’ve been roasting a lot of brussel sprouts and',
            img : carouselImg,
            qutImg : qut
        },
        {
            name : 'Rose Marry Doe' ,
            quote : 'Thank you for all the amazing produce and products you deliver each week... you make my life so easy an bring goodness into our family eating.I’ve been roasting a lot of brussel sprouts and',
            img : carouselImg,
            qutImg : qut
        },
        {
            name : 'Yoku Mallidy Doe' ,
            quote : 'Thank you for all the amazing produce and products you deliver each week... you make my life so easy an bring goodness into our family eating.I’ve been roasting a lot of brussel sprouts and',
            img : carouselImg,
            qutImg : qut
        }
];

    return (
        <div className="container testimonial-section">
            <section className="testimonials my-5 ">
                    <Carousel>
                        {
                            testimonialData.map(testimonial => <Testimonial testimonial={testimonial}></Testimonial>)
                        }
                    </Carousel>
            </section>
            <div className="container text-center">
                <h3 className="main-color">Subscribe to Our Newsletter</h3>
                <p className="main-color">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua.</p>
                <div className="d-flex justify-content-center ">
                       <input className="form-control w-25 border-0" type="text" placeholder="Enter your email address" /> 
                       <button className="rounded-pill subscribe-button">Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;