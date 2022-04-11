import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';



const Shipment = () => {

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');

    const [email, setEmail] = useState('');
    const [myError, setMyError] = useState('  ');




    const [user] = useAuthState(auth);





    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleAddressChange = (e) => {
        setAddress(e.target.value);
    }
    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    }





    const handleAddShipping = (event) => {
        event.preventDefault()



    }




    return (
        <div className='form-container'>
            <div className='form-info'>
                < h1 className='form-title'>Shipping Information </h1>


                <form onSubmit={handleAddShipping} >


                    <div className="input-group">
                        <label htmlFor='name' >Name</label>
                        <input onChange={handleNameChange} type="text" name="name" id="" placeholder='Enter your name' required />
                    </div>

                    <div className="input-group">
                        <label htmlFor='email' >Email</label>
                        <input onChange={handleEmailChange} type="email" name="email" id="" placeholder='Enter your email' required value={user?.email} readOnly />
                    </div>

                    <div className="input-group">
                        <label htmlFor='address' >Address</label>
                        <input onChange={handleAddressChange} type="text" name="address" id="" placeholder='Enter your address' required />
                    </div>

                    <div className="input-group">
                        <label htmlFor='phone' >Phone</label>
                        <input onChange={handlePhoneChange} type="text" name="phone" id="" placeholder='Enter your phone' required />
                    </div>



                    {/* <small style={{ color: "green" }}>
                        {loading ? "Loading.." : ""}
                    </small> */}

                    <p style={{ color: 'red' }}>{myError}</p>

                    <input className='form-submit' type="submit" value='Submit' />


                </form>

            </div>

        </div>
    );
};

export default Shipment;