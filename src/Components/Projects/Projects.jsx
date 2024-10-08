import React from "react";
import "./Projects.css";
import { projects } from "../../assets/projects";
const Projects = () => {
  return (
    <div className="projects new-col">
      <div className="title">Projects</div>
      <div className="Projects-list">
      {projects.map((data, key) => {
        return (
          <>
              <div key={key} style={(key%2==0)?{paddingTop:"150px", paddingBottom:"0px"}:{paddingTop:"0px", paddingBottom:"150px"}} className="project-card">
                <div className="projectno">0{key}</div>
                <div className="project-image">
                  <img
                    src="https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp"
                    alt=""
                    srcset=""
                  />
                </div>
                <div className="project-content">
                  <div className="project-title">{data.name}</div>
                  <div className="project-desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Amet, maxime!
                  </div>
                </div>

                <div className="project-techstack">reactjs mongodb html</div>
              </div>
            
          </>
        );
      })}
      </div>
    </div>
  );
};

export default Projects;
