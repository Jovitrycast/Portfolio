import React from 'react';
import { Container } from 'react-bootstrap'
import './index.scss'
function index() {
    return (
        <div className='aboutMeWrapper p-2 text-light text-center'>
            <Container>
                <h1 className='text-center fw-bold mb-4'>ABOUT ME</h1>
                <Container className='row align-items-center mx-auto'>
                    <div className='col-md text-center'>
                        <img className='avatar w-75' src={require('../../assets/images/avatar.jpg')} alt="Profile-avatar"/>
                    </div>
                    <div className="col-md details mt-4">
                        <span className='fs-1 fw-bold d-block text-primary'>WEB DEVELOPER</span>
                        <p className='lead'>
                            I'm an aspiring Web developer, mainly on Frontend, I rencently finished full stack web development
                            training on Village88 Inc. It helps me a lot to enchance my coding skills.
                        </p>
                    </div>
                </Container>
                <Container className='row mt-5 mx-auto text-center'>
                    <div className="col-md mb-5">
                        <img className='w-50' src={require('../../assets/images/icons/responsive-page.png')} alt="" />
                        <span className='fs-2 fw-bold d-block text-primary'>Responsive</span>
                        <p>
                            I can develop responsive website that can work on any device regarding to its size.
                        </p>
                    </div>
                    <div className="col-md mb-5">
                        <img className='w-50' src={require('../../assets/images/icons/dynamic.png')} alt="" />
                        <span className='fs-2 fw-bold d-block text-warning'>Dynamic</span>
                        <p>
                            I can develop interactive website that can be fully controlled by it's user.
                        </p>
                    </div>
                    <div className="col-md mb-5">
                        <img className='w-50' src={require('../../assets/images/icons/clean-code.png')} alt="" />
                        <span className='fs-2 fw-bold d-block' style={{color: '#38E54D'}}>Clean</span>
                        <p>I can write a code that can be easily understood by other developers/programmers as well.</p>
                    </div>
                </Container>
            </Container>
        </div>
    );
}

export default index;