import React from 'react';
import './BlogSection.css';
import leaf from '../../../img/leaf.png';
import blogOne from '../../../img/blogOne.png';
import blogTwo from '../../../img/blogTwo.png';
import blogThree from '../../../img/blogThree.png';
import { Card } from 'react-bootstrap';
import './BlogSection.css';

const BlogSection = () => {
    return (
        <div className="container mt-5 my-5">
            <img className=" mx-auto d-block" src={leaf} alt="" />
            <h3 className="text-center main-color">Read Our Blog</h3>
            <p className="text-center main-color">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br />
                incididunt ut labore et dolore magna aliqua.</p>

            <div className="row d-flex justify-content-center ">
                <Card className="mx-2 my-2 border-0" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={blogOne} />
                    <Card.Body className="text-center">
                        <Card.Title className="second-color">Blog Post One</Card.Title>
                        <Card.Text className="main-color">
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <a href="#" className="read-button">Read More</a>
                    </Card.Body>
                </Card>
                
                <Card className="mx-2 my-2 border-0" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={blogTwo} />
                    <Card.Body className="text-center">
                        <Card.Title className="second-color">Blog Post One</Card.Title>
                        <Card.Text className="main-color">
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <a className="read-button">Read More</a>
                    </Card.Body>
                </Card>
                
                <Card className="mx-2 my-2 border-0" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={blogThree} />
                    <Card.Body className="text-center">
                        <Card.Title className="second-color">Blog Post One</Card.Title>
                        <Card.Text className="main-color">
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <a className="read-button">Read More</a>
                    </Card.Body>
                </Card>
            </div>

        </div>
    );
};

export default BlogSection;