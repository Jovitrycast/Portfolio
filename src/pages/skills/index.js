import React from 'react';
import './index.scss';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Container, Row } from 'react-bootstrap'

function Index() {
    
    return (
        <div className='skillsWrapper p-2 text-light'>
			<h1 className='text-center fw-bold'>Skills</h1>
			<Row className='p-3'>
				<Container className='order-md-2 col-md-5 mb-5'>
					<Tabs
						justify
						defaultActiveKey="frontend"
						>
						<Tab eventKey="frontend" title="FRONTEND" className='border border-light'>
							<ul className='skills fs-2'>
								<li>HTML & CSS</li>
								<li>Javascript</li>
								<li>TypeScript</li>
								<li>React JS</li>
								<li>Bootstrap</li>
								<li>jQuery</li>
							</ul>
						</Tab>
						<Tab eventKey="backend" title="BACKEND" className='border border-light'>
							<ul className='skills fs-2'>
								<li>PHP</li>
								<li>CodeIgniter</li>
								<li>Express JS</li>
								<li>Node JS</li>
								<li>MySQL</li>
							</ul>
						</Tab>
					</Tabs>
				</Container>
				<Container className='order-md-1 col-md-6'>
					 <div>
					 	<h3 className='fs-1'>Education</h3>
						<a className='text-decoration-none fs-4 text-warning' href="https://main.psu.edu.ph/">Pangasinan State University</a>
						<span className='d-block'>Lingayen, Pangasinan</span>
						<span className='d-block'>Class 2018</span>
						<span className='d-block mt-4'>Degree: Bachelor of Science in I.T.</span>
					 </div>
					 <div className='order-md-1 mt-5'>
						<h3 className='fs-1'>Training</h3>
						<a className='text-decoration-none fs-4 text-warning' href="https://village88.com/">Village88 Inc.</a>
						<span className='d-block'>Full Stack Web Development Training</span>
						<span className='d-block mt-4'>Batch - 3 (2022)</span>
					 </div>
				</Container>
			</Row>
			
        </div>
    );
}
export default Index;