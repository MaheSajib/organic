import React from 'react';
import '../../../App.css'
import leaf from '../../../img/leaf.png'
import { Card } from 'react-bootstrap';
import './FoodSection.css';
import food from '../../../img/fast-food.png'


const FoodSection = () => {
    return (
        <div className="container food-section mt-5">
            <img className=" mx-auto d-block" src={leaf} alt="" />
            <h3 className="text-center main-color">Welcome to Nature</h3>
            <p className="text-center main-color">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br />
                incididunt ut labore et dolore magna aliqua.</p>

            <div className="row d-flex justify-content-center">
                <Card className="mx-2 my-2 text-center food-card" style={{ width: '16rem' }}>
                    <Card.Img className="mx-auto d-block" variant="top" style={{ height: '5rem', width: '5rem' }} src={food} />
                    <Card.Body>
                        <Card.Title>Organic Food</Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card className="mx-2 my-2 text-center food-card" style={{ width: '16rem' }}>
                    <Card.Img className="mx-auto d-block" variant="top" style={{ height: '5rem', width: '5rem' }} src={food} />
                    <Card.Body>
                        <Card.Title>Organic Food</Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card className="mx-2 my-2 text-center food-card" style={{ width: '16rem' }}>
                    <Card.Img className="mx-auto d-block" variant="top" style={{ height: '5rem', width: '5rem' }} src={food} />
                    <Card.Body>
                        <Card.Title>Organic Food</Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card className="mx-2 my-2 text-center food-card" style={{ width: '16rem' }}>
                    <Card.Img className="mx-auto d-block" variant="top" style={{ height: '5rem', width: '5rem' }} src={food} />
                    <Card.Body>
                        <Card.Title>Organic Food</Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>

        </div>
    );
};

export default FoodSection;