import projectCollection  from '../../data/projects';
import './index.scss'


// ant design imports 
import { Card } from 'antd';

const { Meta } = Card;

function index() {
  return (
    <>
        <div className="projectsWrapper text-light p-2">
            <h1 className="text-center">Projects</h1>

            {projectCollection.map((project, key) => (
                <div className="w-100" key={key}>
                    <Card
                        hoverable
                        size='large'
                        style={{ width: 500}}
                        cover={<img alt="project image" src={project.image} />}
                    >
                        <div className="tech d-flex justify-content-around">
                            {project.tech.map((tech, key) => (
                                <span className='badge bg-dark text-warning p-2' key={key}>{tech}</span>
                            ))}
                        </div>
                        <Meta title={project.projectName}/>
                        <a href={project.link}>Visit</a>
                    </Card>
                </div>
            ))}
        </div>
    </>
  )
}

export default index