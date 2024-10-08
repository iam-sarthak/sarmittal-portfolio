import React from 'react'
import './Project2.css'
import { projects } from '../../assets/projects'
import ProjectCard from '../ProjectCard/ProjectCard'
import { Link } from 'react-router-dom'

const Project2 = () => {
  return (
    <div id='work' className='Project2 new-col'>
        <div className="feature-projects">
            <h2>Featured Projects</h2>
            <div className="viewmore">
              <Link to="/projects">view more --</Link>
                
            </div>
        </div>
        <div className="projects-data">
                <ProjectCard {...projects[0]}/>
                <ProjectCard {...projects[1]}/>
        </div>
    </div>
  )
}

export default Project2