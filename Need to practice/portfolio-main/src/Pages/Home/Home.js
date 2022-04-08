import React, { useEffect, useState } from 'react';
import { Triangle } from 'react-loader-spinner'

import About from '../About/About';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import MyProjects from '../MyProjects/MyProjects';
import Navigation from '../Navigation/Navigation';
// import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import './Home.css'

const Home = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const loadData = async () => {
            await new Promise((r) => setTimeout(r, 2000));
            setLoading((loading) => !loading);
        };
        loadData();
    }, []);

    if (loading) {
        return <div className='page-bg banner-area d-flex align-items-center justify-content-center'>
            <Triangle color="#ff8906" height={100} width={200}
            />
        </div>
    }
    else {
        return (
            <div className='page-bg'>
                <Navigation></Navigation>
                <Banner className='mt-5'></Banner>
                <About></About>
                <Skills></Skills>
                <MyProjects></MyProjects>
                {/* <Projects></Projects> */}
                <Contact></Contact>
                <Blogs></Blogs>
                <Footer></Footer>
            </div>
        );
    }

    // return (
    //     <div className='page-bg'>
    //         {loading ? <div className='text-center banner-area d-flex align-items-center justify-content-center'>
    //             <Triangle
    //                 color="#ff8906"
    //                 height={100}
    //                 width={100}
    //             />
    //         </div> : <div>
    //             <Navigation></Navigation>
    //             <Banner className='mt-5'></Banner>
    //             <About></About>
    //             <Skills></Skills>
    //             <MyProjects></MyProjects>
    //             {/* <Projects></Projects> */}
    //             <Contact></Contact>
    //             <Blogs></Blogs>
    //             <Footer></Footer>
    //         </div>}

    //     </div>
    // );
};

export default Home;