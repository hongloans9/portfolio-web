import React from "react"
import Fade from "react-reveal/Fade"
import data from "../data"

const Interest = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="interest-container">
          <Fade bottom cascade>
            <h1>Interests</h1>
          </Fade>
          <div className="grid">
            {data.interests.map((interest, index) => (
              <div key={index}>
                <div className="card" style={{backgroundImage:"url(" + interest.imageSrc +")"}}>
                </div>
                <div className="content">
                    <h3 className="header">{interest.title}</h3>
                    <p className="tag">{interest.para}</p>          
                  </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Interest
