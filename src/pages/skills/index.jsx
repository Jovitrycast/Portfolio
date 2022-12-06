import React from 'react';
import './index.scss';

import { Container} from 'react-bootstrap'
import {FaGraduationCap, FaLaptopCode} from 'react-icons/fa'

// Ant Design Imports
import {Row, Col} from 'antd'

import {skillsFrontEnd, skillsBackEnd} from '../../data/skills';
function Index() {
    
    return (
        <div className='skillsWrapper p-2 text-light mt-5'>
			<Container>
				<h1 className='text-center fw-bold mt-2'>SKILLS</h1>
				<Row className='p-3 justify-content-between'>
					<section className='order-md-2 col-md-6 mb-6 text-center'>
						<div>
							<h3 className='fs-2'>FRONTEND</h3>
							<div className="d-flex flex-wrap gap-3 my-4">
								<Row className='mx-auto'>
									{skillsFrontEnd.map((skill,key) => (
										<Col 
										xs={12}
										sm={8}
										md={8}
										lg={4}
										xl={3}
										xxl={4}
										className="mx-auto mb-3"
										>
											<div key={key} id='skill-icon' className='d-flex flex-column align-items-center gap-1 mx-2'>
												<img src={skill.image} alt="skill icon"/>
												<span>{skill.name}</span>
											</div>
										</Col>
									))}
								</Row>
							</div>
						</div>
						<div className='m-3'>
							<h3 className='fs-2'>BACKEND</h3>
							<div className="d-flex flex-wrap gap-3 my-4">
								<Row className='mx-auto'>
									{skillsBackEnd.map((skill,key) => (
										<Col 
										xs={12}
										sm={8}
										md={8}
										lg={4}
										xl={3}
										xxl={4}
										className="mx-auto mb-3"
										>
											<div key={key} id='skill-icon' className='d-flex flex-column align-items-center gap-1 mx-2'>
												<img src={skill.image} alt="skill icon"/>
												<span>{skill.name}</span>
											</div>
										</Col>
									))}
								</Row>
							</div>
						</div>
					</section>
					<section className='order-md-1 col-md-6 col-sm-12 mx-auto'>
						<div>
							<h3 className='fs-2 align-items-center'><FaGraduationCap/> Education</h3>
							<a className='text-decoration-none fs-4 text-warning' href="https://main.psu.edu.ph/">Pangasinan State University</a>
							<span className='d-block'>Lingayen, Pangasinan</span>
							<span className='d-block'>Class 2018 - 2022</span>
							<span className='d-block mt-4'>Degree: Bachelor of Science in I.T.</span>
						</div>
						<div className='order-md-1 mt-5'>
							<h3 className='fs-2'><FaLaptopCode/> Training</h3>
							<a className='text-decoration-none fs-4 text-warning' href="https://village88.com/">Village88 Inc.</a>
							<span className='d-block'>Batch 3 (2022)</span>
							<span className='d-block mt-4'>Full Stack Web Development Training</span>
						</div>
					</section>
				</Row>
			</Container>
        </div>
    );
}
export default Index;