import {Link} from 'react-router';

function ProjectCard({projectData}) {
  return (
    <>  
      <article className="card">
       <div className="wrap-container">
          <div className={"wrap-container__box " + projectData.classes}>
            <div className="wrap-container__front ">
                <h4 className="card__title">{projectData.title}</h4>
                <div className="card__image-container">
                  <img alt="imagen del proyecto" className="card__image" src={projectData.image ? projectData.image : '"https://placehold.co/250x100/343434/FFF"'} />
                </div>
            </div>
            <div className="wrap-container__back ">
               <p className="card__text">{projectData.text}</p>
               <Link to={projectData.link} className="card__link">know more ⇾</Link>
            </div>
          </div>
        </div>
      </article>
    </>
  )
}

export default ProjectCard