import React from 'react';
import './index.scss';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Container, Row } from 'react-bootstrap'
import {FaGraduationCap, FaLaptopCode} from 'react-icons/fa'

function Index() {
    
    return (
        <div className='skillsWrapper p-2 text-light'>
			<h1 className='text-center fw-bold mt-2'>Skills</h1>
			<Row className='p-3'>
				<Container className='order-md-2 col-md-5 mb-6'>
					<Tabs
						justify
						defaultActiveKey="frontend"
						>
						<Tab eventKey="frontend" title="FRONTEND" className='border border-warning'>
							<ul className='skills fs-4 p-0 mb-0'>
								<li className='bg-warning p-2 text-dark'>HTML & CSS</li>
								<li className=' p-2 text-light'>Javascript</li>
								<li className='bg-warning p-2 text-dark'>TypeScript</li>
								<li className=' p-2 text-light'>React JS</li>
								<li className='bg-warning p-2 text-dark'>Bootstrap</li>
								<li className='p-2 text-light'>jQuery</li>
							</ul>
						</Tab>
						<Tab eventKey="backend" title="BACKEND" className='border border-warning'>
							<ul className='skills fs-4 p-0 mb-0'>
								<li className='bg-warning p-2 text-dark'>PHP</li>
								<li className=' p-2 text-light'>CodeIgniter</li>
								<li className='bg-warning p-2 text-dark'>Express JS</li>
								<li className=' p-2 text-light'>Node JS</li>
								<li className='bg-warning p-2 text-dark'>MySQL</li>
							</ul>
						</Tab>
					</Tabs>
				</Container>
				<Container className='order-md-1 p-4 col-md-6'>
					 <div>
					 	<h3 className='fs-2 align-items-center'><FaGraduationCap/> Education</h3>
						<a className='text-decoration-none fs-4 text-warning' href="https://main.psu.edu.ph/">Pangasinan State University</a>
						<span className='d-block'>Lingayen, Pangasinan</span>
						<span className='d-block'>Class 2018</span>
						<span className='d-block mt-4'>Degree: Bachelor of Science in I.T.</span>
					 </div>
					 <div className='order-md-1 mt-5'>
						<h3 className='fs-2'><FaLaptopCode/> Training</h3>
						<a className='text-decoration-none fs-4 text-warning' href="https://village88.com/">Village88 Inc.</a>
						<span className='d-block'>Batch 3 (2022)</span>
						<span className='d-block mt-4'>Full Stack Web Development Training</span>
					 </div>
				</Container>
			</Row>
			
        </div>
    );
}
export default Index;