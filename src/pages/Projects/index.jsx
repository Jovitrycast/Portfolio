import projectCollection  from '../../data/projects';
import './index.scss'


// ant design and bootstrap imports
import {GithubOutlined} from '@ant-design/icons'
import { Button, Card, Row, Col} from 'antd';
import { Container } from 'react-bootstrap';


function index() {
  return (
    <div className='projectsWrapper'>
        <Container>
            <section className="text-light p-2">
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
                            className='text-center'
                            cover={<img alt="project image" src={project.image}/>}
                        >
                            <div className="tech d-flex gap-2 justify-content-center ">
                                {project.tech.map((tech, key) => (
                                    <span className='badge bg-dark text-warning p-2' key={key}>{tech}</span>
                                ))}
                            </div>
                            <span className='text-center fw-bold fs-5'>{project.projectName}</span>
                            <div className='d-flex gap-2 mt-3 justify-content-center'>
                                <a href={project.code}><GithubOutlined className='text-dark fs-3'/></a>
                                <a href={project.link}>
                                    <Button className='bg-dark text-light fw-bold border-0'>Visit</Button>
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