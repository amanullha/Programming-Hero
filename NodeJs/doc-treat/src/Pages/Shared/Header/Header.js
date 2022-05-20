import React, { useState, useEffect } from 'react';
import NavBar from '../NavBar/NavBar';

const Header = () => {

    const [scrollDirection, setScrollDirection] = useState(null)
    const [prevOffset, setPrevOffset] = useState(0)

    const toggleScrollDirection = () => {
        let scrollY = window.scrollY
        if (scrollY === 0) {
            setScrollDirection(null)
        }
        if (scrollY > prevOffset) {
            setScrollDirection("down")
        } else if (scrollY < prevOffset) {
            setScrollDirection("up")
        }
        setPrevOffset(scrollY)
    }

    useEffect(() => {
        window.addEventListener("scroll", toggleScrollDirection)
        return () => {
            window.removeEventListener("scroll", toggleScrollDirection)
        }
    })


    // window.onscroll = function (e) {

    //     console.log(e.target);
    // }


    return (
        <div className={`bg-white flex justify-center items-center md:mx-5 lg:mx-16 xl:mx-20 sticky top-0 z-50 mt-0 ${scrollDirection==='down' ? "shadow-lg" : ""}`}>

            <NavBar />
           



        </div>
    );
};

export default Header;