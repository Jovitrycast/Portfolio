import projectCollection  from '../../data/projects';
import './index.scss'
function index() {
  return (
    <>
        <div className="projectsWrapper text-light p-2">
            <h1 className="text-center">Projects</h1>

            {projectCollection.map((project, key) => (
                <div className="" key={key}>
                    <span>{project.projectName}</span>
                    <div className="tech">
                        {project.tech.map((tech, key) => (
                            <span className='badge bg-dark text-warning' key={key}>{tech}</span>
                        ))}
                    </div>
                    <img src={project.image} className="w-50 rounded"/>
                    <a href={project.link}>Visit</a>
                </div>
            ))}
        </div>
    </>
  )
}

export default index