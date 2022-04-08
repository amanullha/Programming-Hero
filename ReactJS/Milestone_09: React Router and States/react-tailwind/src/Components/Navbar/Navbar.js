import React, { useState } from 'react';
import Link from '../Link/Link';
import { MenuIcon, XIcon } from '@heroicons/react/solid'

const Navbar = () => {

    const [open, setOpen] = useState(false);

    const routes = [
        { id: 1, name: "Home", link: '/Home' },
        { id: 1, name: "Shop", link: '/Shop' },
        { id: 1, name: "Deals", link: '/Deals' },
        { id: 1, name: "Coupons", link: '/Coupons' },
        { id: 1, name: "Contact", link: '/Contact' }
    ];



    return (
        <nav className='bg-slate-200'>

            <div onClick={() => setOpen(!open)} className='w-6 h-6 md:hidden cursor-pointer'>
                {
                    open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>

                }
            </div>



            <ul className={`w-full md:flex bg-slate-200 justify-center absolute md:static duration-500 ease-in ${open ? 'top-6' : 'top-[-200px]'}`}>
                {
                    routes.map(route =>
                        <Link
                            key={route.id}
                            route={route}
                        ></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;