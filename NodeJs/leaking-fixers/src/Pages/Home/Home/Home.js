import React from 'react';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import Experts from '../Experts/Experts';
import ReactSlider from '../ReactSlider/ReactSlider';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div id='home'>
            <PageTitle title="Home"></PageTitle>
            <ReactSlider></ReactSlider>
            <Services id='services'></Services>
            <Experts></Experts>
        </div>
    );
};

export default Home;