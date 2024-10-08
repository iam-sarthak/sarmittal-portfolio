import React from 'react'
import { projects } from '../../assets/projects'
import ProjectCard from '../../Components/ProjectCard/ProjectCard'
import './ProjectsPage.css'
const ProjectsPage = () => {
  return (
    <div className='ProjectsPage'>
        <div className="feature-projects">
            <h2>Featured Projects</h2>
        </div>
        <div className='project-list'>
        {projects.map((project, index)=>{
            return <ProjectCard key={index} {...project}/>
        })}
        </div>
    </div>
  )
}

export default ProjectsPage