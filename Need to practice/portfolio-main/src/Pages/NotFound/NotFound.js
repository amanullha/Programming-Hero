import React from 'react';
import { Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import notfound from '../../image/not-found.png'

const NotFound = () => {

    const history = useHistory();
    const handleClick = () => {
        history.push('/home');
    }

    return (
        <div>
            <Container>
                <div className="d-lg-flex align-items-center justify-content-evenly mt-2">
                    <div className="w-100 d-flex justify-content-center">
                        <div>
                            <h1 className="display-3 fw-bold secondary-text">404</h1>
                            <h2 className='text-dark'>Seems You are Lost</h2>
                            <p className='text-dark'>Page not Found</p>
                            <button onClick={handleClick} className="modal-btn px-5 py-2 border-0 rounded text-dark fw-bold">Back to Home</button>
                        </div>
                    </div>
                    <div >
                        <img src={notfound} alt="" className="w-100 text-center" />
                    </div>

                </div>
            </Container>
        </div>
    );
};

export default NotFound;