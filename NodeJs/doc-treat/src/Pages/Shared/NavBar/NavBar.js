import React from 'react';
const NavBar = () => {


    const menuItems = <>

        <li><a>Home</a></li>
        <li><a>Appiontment</a></li>
        <li><a>Review</a></li>
        <li><a>Contact Us</a></li>
        <li><a>About</a></li>
        <li><a>Login</a></li>

    </>


    const userProfile = <>


        <div className="dropdown dropdown-end ">
            <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                    <img src="https://api.lorem.space/image/face?hash=33791" />
                </div>
            </label>
            <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                    <a className="justify-between">
                        Profile
                        <span className="badge">New</span>
                    </a>
                </li>
                <li><a>Settings</a></li>
                <li><a>Logout</a></li>
            </ul>
        </div>


    </>


    return (
        <div className="navbar bg-base-100 flex justify-between items-center">




            {/* <div className="navbar-start bg-slate-400 "> */}
            <div className="  ">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                        {menuItems}


                    </ul>

                </div>
                {/* <a className=" text-2xl bg-gradient-to-r from-purple-400 to-pink-600">DocTreat</a> */}

                {/* <h1
                    class="font-extrabold text-transparent text-4xl  md:text-6xl bg-clip-text bg-gradient-to-r from-yellow-700 to-green-600"
                >
                    DocTreat
                </h1> */}

                <img className='h-[60px] w-[180px]' src="logo.png" alt="" />

            </div>




            <div className="navbar-center hidden lg:flex   ">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                    {
                        userProfile
                    }
                </ul>

            </div>


            {/* <div className="navbar-end">
                <a className="btn">Get started</a>
            </div> */}

            <div className='lg:hidden'>
                {
                    userProfile
                }
            </div>





        </div>
    );
};

export default NavBar;