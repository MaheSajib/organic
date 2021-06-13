import React from 'react';
import FoodSection from '../FoodSection/FoodSection';
import Header from '../Header/Header';
import ProudSection from '../ProudSection/ProudSection';
import Testimonials from '../Testimonials/Testimonials';
import BlogSection from '../BlogSection/BlogSection';
import FooterSection from '../FooterSection/FooterSection';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <FoodSection></FoodSection>
            <ProudSection></ProudSection>
            <Testimonials></Testimonials>
            <BlogSection></BlogSection>
            <FooterSection></FooterSection>
        </div>
    );
};

export default Home;