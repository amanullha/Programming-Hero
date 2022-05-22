import { faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import MyLoading from '../Shared/MyLoading/MyLoading';

const Deshboard = () => {

    const [user, loading, error] = useAuthState(auth);

    const [openDrawer, setOpenDrawer] = useState(false);
    
    const [admin, setAdmin] = useAdmin(user);


    if (loading) {

        return <MyLoading />
    }

    const drawerToggler = () => {
        setOpenDrawer(openDrawer ^ 1);
    }

    return (
        <div className=' bg-[#f1f5f9]'>



            <label onClick={drawerToggler} htmlFor="deshboard-sidebar" className="fixed z-40 bg-green-200 rounded-r-lg pr-5 cursor-pointer  pl-2 drawer-button lg:hidden text-green-700" title='Menu'>

                {
                    openDrawer ? <FontAwesomeIcon icon={faAnglesLeft} /> : <FontAwesomeIcon icon={faAnglesRight} />

                }
            </label>




            <div className="drawer drawer-mobile">



                <input id="deshboard-sidebar" type="checkbox" className="drawer-toggle" />



                <div className="drawer-content mt-10">
                    {/* <!-- Page content here --> */}
                    <h1 className='text-3xl text-primary font-bold text-center font-bold text-green-900'>Welcome to your Deshboard</h1>
                    <Outlet ></Outlet>

                    {/* <label htmlFor="deshboard-sidebar" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}

                </div>



                <div className="drawer-side ">
                    <label htmlFor="deshboard-sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4  overflow-y-auto w-52 bg-base-100 text-base-content bg-white ">

                        {/* <!-- Sidebar content here --> */}
                        <li><Link to='/deshboard'>My Appointments</Link></li>
                        <li><Link to='/deshboard/reviews'>My Review</Link></li>
                        <li><Link to='/deshboard/history'>My History</Link></li>
                        {admin ? <li><Link to='/deshboard/users'>All Users</Link></li> : ''}
                    </ul>

                </div>



            </div>
        </div>
    );
};

export default Deshboard;