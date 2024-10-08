import React, { useState } from "react";
import "./Info.css";
import { education, work } from "../../assets/projects.js";

const Info = () => {
  const [infoState, setInfoState] = useState("education");

  return (
    <div className="info">
      <div className="info-selector">
        <button
          onClick={() => {
            setInfoState("work");
          }}
          className={infoState === "work" ? "active" : ""}
        >
          Work
        </button>
        <button
          onClick={() => {
            setInfoState("education");
          }}
          className={infoState === "work" ? "" : "active"}
        >
          Education
        </button>
      </div>
      <div className="info-data">
        {infoState === "work"
          ? work.map((value, index) => {
              return <InfoBlock key={index} {...value} />;
            })
          : education.map((value, index) => {
              return <InfoBlock key={index} {...value} />;
            })}
      </div>
    </div>
  );
};

const InfoBlock = ({Imagewebsite, image, period, name, position, description, links }) => {
  return (
    <div className="InfoBlock">
      <a href={Imagewebsite}><img src={image} alt="" /></a>
      <div className="infotext">
        <div className="infoperiod">{period}</div>
        <div className="infotitle">{name}</div>
        <div className="infoposition">{position}</div>
        <div className="desc">
          <ul>
            {description.map((desc, index) => (
              <li key={index}>{desc}</li>
            ))}
          </ul>
        </div>
        <div className="infolinks">
          <ul>
            {links.map((link, index) => (
              link.linkurl!==""?<div key={index}>
              <a href={link.linkurl}>{link.linkname}</a>
            </div>:<div key={index}></div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Info;
