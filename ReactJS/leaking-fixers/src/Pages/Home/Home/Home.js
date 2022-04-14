import React from 'react';
import Experts from '../Experts/Experts';
import ReactSlider from '../ReactSlider/ReactSlider';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div id='home'>
            <h2>Home</h2>
            <ReactSlider></ReactSlider>
            <Services></Services>
            <Experts></Experts>
        </div>
    );
};

export default Home;