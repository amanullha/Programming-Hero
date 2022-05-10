import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import useServices from '../../hooks/useServices';

const ManageServices = () => {


    const [services, setServices] = useServices();

    // console.log(services);

    const handleServiceDeleter = (_id) => {


        const proceed = window.confirm("Are your sure?")

        if (proceed) {
            console.log(_id);

            fetch(`https://calm-hollows-18504.herokuapp.com/services/${_id}`, {
                method: "DELETE",

            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        toast("A service deleted")
                    }
                })


            const restServices = services.filter(service => service._id !== _id);

            setServices(restServices);

        }
    }

    return (
        <div>

            <h1 className='text-center text-4xl my-5'>Manage services</h1>
            <div className='w-1/2 mx-auto flex flex-col gap-5'>
                {
                    services.map(service =>
                        <div className='flex items-center justify-between bg-gray-200 pl-5 rounded-lg' key={service._id} >

                            <h2 className='py-2'>{service.name}</h2>

                            <button className=' active:bg-red-600 active:text-white rounded-lg px-5 bg-red-300 py-2 text-center ' onClick={() => handleServiceDeleter(service._id)}>x</button>

                        </div>)
                }
            </div>
            <ToastContainer />
        </div>
    );
};

export default ManageServices;