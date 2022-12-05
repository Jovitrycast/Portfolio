import projectCollection  from '../../data/projects';
import './index.scss'

import { BiLinkExternal } from 'react-icons/bi'
import { Container} from 'react-bootstrap'

// ant design and bootstrap imports
import {GithubOutlined} from '@ant-design/icons'
import { Button, Card, Row, Col} from 'antd';


function index() {
  return (
    <div className='projectsWrapper'>
        <Container>
            <section className="text-light p-2 mt-5">
                <h1 className="text-center">Works</h1>
                <Row className=''>
                    {projectCollection.map((project, key) => (
                    <Col
                        sm={22}
                        md={11}
                        lg={7}
                        className="mx-auto mb-3"
                        >
                        <Card
                            key={key}
                            hoverable
                            bodyStyle={{
                                padding: '10px'
                            }}
                            cover={<img alt="project" src={project.image}/>}
                        >
                            <h2 className='text-center fs-3'>{project.projectName}</h2>
                            <div className="tech d-flex gap-2 justify-content-center">
                                {project.tech.map((tech, key) => (
                                    <span className='badge bg-dark text-warning p-2' key={key}>{tech}</span>
                                ))}
                            </div>
                            <div className='d-flex gap-2 mt-3 justify-content-center align-items-center'>
                                <a href={project.code} target="_blank" rel="noreferrer">
                                    <Button type='primary' size='' className='bg-dark text-light fw-bold border-0 d-flex justify-content-around align-items-center'>
                                        <GithubOutlined className='text-light'/> View Code
                                    </Button>
                                    </a>
                                <a href={project.link} target="_blank" rel="noreferrer">
                                    <Button type='primary' className='fw-bold border-0 d-flex gap-1 align-items-center'>
                                        <BiLinkExternal/> Visit
                                    </Button>
                                </a>
                            </div>
                        </Card>
                    </Col>
                    ))}
                </Row>
            </section>
        </Container>
    </div>
  )
}

export default index