import React from 'react';
import { Container } from 'reactstrap'
import './about_me.scss'
function index() {
    return (
        <div className='aboutMeWrapper p-2'>
            <Container>
                <h1 className='text-center fw-bold mb-3'>ABOUT ME</h1>
                <Container className='row d-lg-flex align-items-center justify-content-around'>
                    <div className='col-lg-4 col-sm-9 align-self-center'>
                        <img className='avatar img-fluid' src={require('../../assets/images/avatar.jpg')} alt="Profile-avatar"/>
                    </div>
                    <div className="col-lg-6 details mt-4">
                        <span className='fs-1 fw-bold d-block text-primary'>WEB DEVELOPER</span>
                        <span className='fs-2 fw-bold text-primary fe mb-2'>Frontend Developer</span>
                        <p className='lead'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quibusdam obcaecati mollitia facilis nemo dignissimos doloribus reiciendis illo quisquam odio!
                        </p>
                    </div>
                </Container>
            </Container>
        </div>
    );
}

export default index;