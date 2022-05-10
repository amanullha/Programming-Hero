import React from 'react';
import Consultation from '../Consultation/Consultation';
import ImageSlider from '../ImageSlider/ImageSlider';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <ImageSlider></ImageSlider>
            <Services></Services>
            <Consultation></Consultation>

        </div>
    );
};

export default Home;