import React from 'react'
import './Project.css'

function Project({ image, title, link }) {
    return (
    <div className="ProjectImage">
    <div className="ProjectTitle">
    <div className="ProjectLink">
    <img src={image} width="300" height="auto" />
    <h3>{title}</h3>
    <a href={link}>Link to project</a>
    </div>
    </div>
    </div>
    )
   }

export default Project