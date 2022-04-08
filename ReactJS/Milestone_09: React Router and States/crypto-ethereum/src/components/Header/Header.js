import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
  return (
    <nav className='sticky top-0 bg-slate-100 px-12 py-1 flex flex-row items-center justify-center md:justify-between mb-10 xl:px-20'>

      <div className="logo  hidden md:block ">
        <Link to='/homepage'><img width={300} src="logo1.png" alt="logo" /></Link>
      </div>

      <div className="links flex flex-row gap-4 text-xl">

        <CustomLink to='/'>Home</CustomLink>
        <CustomLink to='/coins'>Coins</CustomLink>
        <CustomLink to='/contact'>Contact</CustomLink>
        <CustomLink to='/about'>About</CustomLink>


      </div>
    </nav>
  );
};

export default Header;
