import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import './../Pages/Project.scss';
import Footer from '../Layout/Footer'

export default function Project() {
    const [project, setProject] = useState(null)
    let { slug } = useParams();
    console.log(slug);
    const query = `
query GetProject($slug: String!) {
    personalPortfolioProjectsCollection(limit:1, where:{url:$slug}){
   
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
        singleProjectImagesCollection{
          items{
             url
            title
          }
        }
        tags
        projectLink
        githubRepositoryLink
        url
     
      }
    }
  }
`;
useEffect(() => {
    window
      .fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.REACT_APP_KEY}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
        },
        body: JSON.stringify({ query, variables: { slug } }),
      })
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors);
        }

        setProject(data.personalPortfolioProjectsCollection);
      });
  }, [slug]);
  console.log(project);
  if(!project){
    return "Loading Project...";
  }
  return (
    <div className='container-fluid'>
        <div className='hero-img'>
          <div className='hero-content'>
            <h1 className="project-title">{project.items[0].projectName}</h1>
            <div className="breadcrumbs">
              <p><a href="/">Home</a> / {project.items[0].projectName}</p>
            </div>
          </div>
         
          <img src={project.items[0].singleProjectImagesCollection.items[1].url} alt={project.items[0].projectImage.title} />
          
        </div>
        <div className='container project-wrapper'>
          <div className='col third'>
            <div className="col-inner">
              <img src={project.items[0].singleProjectImagesCollection.items[0].url} alt={project.items[0].projectImage.title} />
              <div className='action-buttons'>
                  <a href={project.items[0].projectLink} target="_blank" rel="noreferrer" className="btn btn-primary">View Project Site</a>
                  <a href={project.items[0].githubRepositoryLink} target="_blank" rel="noreferrer" className="btn btn-secondary">View Github Repo</a>
              </div>
            </div>
          </div>
          <div className='col two-thirds'>
            <div className='col-inner'>
              {project.items[0].projectDescription.json.content.map( (content, index) => (
                  <p key={index}>{content.content[0].value}</p>
              ))}
              
              </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}
