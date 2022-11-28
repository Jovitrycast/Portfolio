import React from 'react';
import './index.scss';

import { Container, Row } from 'react-bootstrap'
import {FaGraduationCap, FaLaptopCode} from 'react-icons/fa'

import {skillsFrontEnd, skillsBackEnd} from '../../data/skills';
function Index() {
    
    return (
        <div className='skillsWrapper p-2 text-light'>
			<h1 className='text-center fw-bold mt-2'>Skills</h1>
			<Row className='p-3'>
				<Container className='order-md-2 col-md-5 mb-6 text-center'>
					<span className='fw-bold fs-4'>FRONTEND</span>
					<div className="d-flex flex-wrap gap-3 my-3">
						{skillsFrontEnd.map((skill,key) => (
							<div key={key} className='d-flex flex-column align-items-center gap-1'>
								<img src={skill.image} alt="skill icon"/>
								<span>{skill.name}</span>
							</div>
						))}
					</div>
					<span className='fw-bold fs-4'>BACKEND</span>
					<div className="d-flex flex-wrap gap-3 mx-y">
						{skillsBackEnd.map((skill,key) => (
							<div key={key} className='d-flex flex-column align-items-center gap-1'>
								<img src={skill.image} alt="skill icon"/>
								<span>{skill.name}</span>
							</div>
						))}
					</div>
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