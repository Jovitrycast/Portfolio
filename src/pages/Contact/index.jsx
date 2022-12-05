import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './index.scss'

import { Container} from 'react-bootstrap'

// React Icons 
import {IoIosPaperPlane} from 'react-icons/io'
import {FaEraser} from 'react-icons/fa'

// Ant Design imports
import { Button, Col, Form, Input, Row, message, Popconfirm} from 'antd';
import { useState } from 'react';
import { useEffect } from 'react';



/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

const Contact = () => {
	const [form] = Form.useForm();
	const [messageApi, contextHolder] = message.useMessage();
	const [checkMessage,setCheckMessage] = useState('');
	const [isDisabled,setIsDisabled] = useState(true);

	useEffect(() => {
	  checkMessage.length > 0 ? setIsDisabled(false) : setIsDisabled(true)
	
	}, [checkMessage]);
	
	const confirm = () => {
		message.info('Form has been Cleared');
		form.resetFields();
	  };

	const sendEmail = (values) => {
		emailjs.send(
		    'service_sj8wkla',
		    'template_cgmxsaq',
		    values,
		    'k_nK3bUxkzoXxOltL')
		  .then(() => {
			messageApi.open({
				type: 'success',
				content: 'Email sent succesfuly',
			  });
				form.resetFields();
		  }, (error) => {
		    messageApi.open({
				type: 'success',
				content: error.text,
			  });
		  });
	};

	return (
		<Container className='text-light p-2 mt-5'>
			{contextHolder}
			<h1 className='fw-bold text-center'>CONTACT ME</h1>
			<h4 className='text-center'>I'd love to hear from you. Drop me a message!</h4>
			<Row>
				<Col
					xs={22}
					sm={22}
					md={20}
					lg={12}
					className="mx-auto mt-5"
				>
					<Form
						form={form}
						name="nest-messages" 
						onFinish={(e) => {sendEmail(e)}} 
						validateMessages={validateMessages}
						>
						<Form.Item
							name='name'
							rules={[
							{
								required: true,
							},
							]}
						>
							<Input placeholder='Name'/>
						</Form.Item>
						<Form.Item
							name='email'
							rules={[
							{
								type: 'email',
								required: true
							},
							]}
						>
							<Input placeholder="Email"/>
						</Form.Item>
						<Form.Item 
							name='message'
						>
							<Input.TextArea placeholder='Message' name="message" onChange={(e) => setCheckMessage(e.target.value)}/>
						</Form.Item>
						<Form.Item
						>
							<div className='d-flex justify-content-end gap-1'>
							<Popconfirm placement="top" title="Are you sure?" onConfirm={confirm} okText="Yes" cancelText="No">
								<Button 
									size='large' 
									type="primary"
									ghost danger
									icon={<FaEraser className='me-2'/>}
								>
								Clear
								</Button>
							</Popconfirm>	
								<Button 
									size='large' 
									type="primary" 
									htmlType="submit" 
									icon={<IoIosPaperPlane className='me-2'/>}
									disabled={isDisabled}
									className={isDisabled? "text-secondary bg-light" : "" }
								>
								Submit
								</Button>
							</div>
						</Form.Item>
					</Form>
				</Col>
			</Row>
		</Container>
	);
};

export default Contact;