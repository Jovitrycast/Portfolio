import React from 'react';
import { Container } from 'react-bootstrap';
import './index.scss';

// React Icons
import {BsChevronDoubleDown} from 'react-icons/bs'
const index = () => {

    return (
        <>
            <div className="homeWrapper d-flex align-items-center text-light">
                <Container className='text-center'>
                    <h1 className='fw-bold'>Hello There!</h1>
                    <p className='lead fs-3'>I am <span className='text-warning fw-bold'>Jovit Castillo</span>. I develop websites</p>
                </Container>
                <BsChevronDoubleDown className='down-arrow fs-1'/>
            </div>
        </>
    );
}

export default index;