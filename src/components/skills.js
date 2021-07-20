import React from "react"
import data from "../data"

const Skills = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="skills-container">
          <h1>Skills</h1>
          {data.skills.map((skill, index) => (
            <div className="skills-grid" key={index}>
              <h4>{skill.name}</h4>
              <div className="progress">
                <div className="progress-bar" role="progressbar" style={{width: skill.percentage}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
              </div>  
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills
