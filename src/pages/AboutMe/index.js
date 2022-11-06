import React from 'react';
import { Container } from 'react-bootstrap'
import './index.scss'
function index() {
    return (
        <div className='aboutMeWrapper p-2 text-light'>
            <Container>
                <h1 className='text-center fw-bold mb-3'>ABOUT ME</h1>
                <Container className='row align-items-center mx-auto'>
                    <div className='col-md text-center'>
                        <img className='avatar w-75' src={require('../../assets/images/avatar.jpg')} alt="Profile-avatar"/>
                    </div>
                    <div className="col-md details mt-4">
                        <span className='fs-1 fw-bold d-block text-primary'>WEB DEVELOPER</span>
                        <span className='fs-2 fw-bold text-primary fe mb-2'>Frontend Developer</span>
                        <p className='lead'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quibusdam obcaecati mollitia facilis nemo dignissimos doloribus reiciendis illo quisquam odio!
                        </p>
                    </div>
                </Container>
                <Container className='row mt-5 mx-auto text-center'>
                    <div className="col-md mb-5">
                        <img className='w-50' src={require('../../assets/images/icons/responsive-page.png')} alt="" />
                        <span className='fs-2 fw-bold d-block'>Responsive</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, itaque totam. Blanditiis laudantium ipsum animi.</p>
                    </div>
                    <div className="col-md mb-5">
                        <img className='w-50' src={require('../../assets/images/icons/dynamic.png')} alt="" />
                        <span className='fs-2 fw-bold d-block'>Dynamic</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident repellat cupiditate, ab esse minima fuga!</p>
                    </div>
                    <div className="col-md mb-5">
                        <img className='w-50' src={require('../../assets/images/icons/clean-code.png')} alt="" />
                        <span className='fs-2 fw-bold d-block'>Clean</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque libero consectetur magni nobis minus sed.</p>
                    </div>
                </Container>
            </Container>
        </div>
    );
}

export default index;