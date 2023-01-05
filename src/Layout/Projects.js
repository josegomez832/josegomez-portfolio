import React, { useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
//query goes here
const query = `
    {
        personalPortfolioProjectsCollection{
       
          items{
            sys{
                id
                publishedAt
            }
            projectName
            projectDescription{
              json
            }
            projectImage {
              title
              description
              contentType
              fileName
              size
              url
              width
              height
            }
            tags
            projectLink
            githubRepositoryLink
            url
         
          }
        }
      }
    `;
export default function Projects() {

    const [projects, setProjects] = useState(null)
    useEffect(() => {
        window
          .fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.REACT_APP_KEY}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
            },
            body: JSON.stringify({ query }),
          })
          .then((response) => response.json())
          .then(({ data, errors }) => {
            if (errors) {
              console.error(errors);
            }
    
            setProjects(data.personalPortfolioProjectsCollection);
          });
      }, []);
      console.log(projects);
      if(!projects){
        return "No Projects Found...";
      }
        return (
            <div className="projects-wrapper">
                <h3 className='heading'>My Projects</h3>
                <div className='project-grid container'>
                    {projects.items.map( (project) => (
                        <div key={project.sys.id} className='column project'>
                             <Link to={`/project/${project.url}`}>
                                <div className='project-inner'>
                                    <div className='tags'>
                                      {project.tags.map( (tag) => (
                                        <span>{tag}</span>
                                      ))}
                                    </div>
                                    <h4 className="project-title">{project.projectName}</h4>
                                    <img src={project.projectImage.url} className="img-project" alt={project.projectName} />
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        )
}
