import React from 'react'
import './ProjectsCard.css'

const ProjectCard = ({image,name,time,skills,decription,demolink,codelink,bloglink}) => {
  return (
    <div className='projectcard'>
      <img src={image} alt="" />
      <div className='infotitle'>{name}</div>
      <p>{decription}</p>
      <div className="skills">
      {skills.map((skill,index)=>{
        return (<div key={index} className="skill">
          {skill}
        </div>)
      })}
      </div>
      <div className="links">
        <a href={demolink}>Live Demo</a>
        <a href={codelink}>Code</a>
        <a href={bloglink}>Blog</a>
      </div>
    </div>
  )
}

export default ProjectCard