import React from 'react'
import './TechStack.css'
import { skills } from '../../assets/projects'

const TechStack = () => {
  return (
    <div className='tech'>
      <div className="title">Tech</div>
      <div className='tech-subhead'>Proficient in: </div>
      <div className="techstack">
        {skills.map((value,index)=>{
          return(
            <div  key={index} className='tech-block'>
              <div className="tech-image"></div>
              <div className="tech-name">{value}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default TechStack