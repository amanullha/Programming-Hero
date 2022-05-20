import React from 'react';
import { format } from 'date-fns';



const BookingModal = ({ treatment, date, setTreatment }) => {


    const { _id, name, slots } = treatment;

    const handleBooking = (e) => {
        e.preventDefault();

        const slot = e.target.slot.value;
        console.log(slot);

        setTreatment(null);
    }

    return (
        <div>

            {/* <label for="my-modal-6" className="btn modal-button">open modal</label> */}

            <input type="checkbox" id="booking-modal" className="modal-toggle" />

            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">


                    <label for="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <h3 className="font-bold text-lg text-secondary">Booking for : {name}</h3>

                    <form onSubmit={handleBooking} className='flex flex-col gap-3 my-8 justify-center items-center'>

                        <input name='date' type="text" placeholder="Date" className="input input-bordered w-full max-w-xs " readOnly value={format(date, 'PP')} />

                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            {
                                slots.map(slot => <option>{slot}</option>)
                            }
                        </select>
                        <input name="name" type="text" placeholder="Name" className="input input-bordered w-full max-w-xs" />

                        <input name='email' type="text" placeholder="Email" className="input input-bordered w-full max-w-xs" />

                        <input name='phone' type="text" placeholder="Phone" className="input input-bordered w-full max-w-xs" />



                        <input type="submit" placeholder="Time" className="btn btn-secondary input input-bordered w-full max-w-xs" />
                    </form>




                    {/* <div className="modal-action">
                        <label for="booking-modal" className="btn">BOOK</label>
                    </div> */}


                </div>
            </div>





        </div>
    );
};

export default BookingModal;