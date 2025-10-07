import ProjectCard from './ProjectCard.jsx';
import ProjectsData from '../../data/projects.js';


function Projects() {
  return (
    <>
      <section className="section" id="projects">
        <h3 className="section__title">PROJECTS</h3>
  
          { ProjectsData.map (project => 
              <ProjectCard key={project.id} projectData={project} />
            )
          }
        
      </section>
      
     
    </>
  )
}

export default Projects;