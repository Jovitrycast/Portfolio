import projectCollection  from '../../data/projects';
import './index.scss'


// ant design imports 
import {GithubOutlined} from '@ant-design/icons'
import { Button, Card } from 'antd';

const { Meta } = Card;

function index() {
  return (
    <>
        <section className="projectsWrapper text-light p-2">
            <h1 className="text-center">Projects</h1>

            {projectCollection.map((project, key) => (
                <div className="row" key={key}>
                    <Card
                        hoverable
                        size='large'
                        bodyStyle={{
                            padding: '10px'
                        }}
                        className='w-25 text-center col-md'
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
                </div>
            ))}
        </section>
    </>
  )
}

export default index