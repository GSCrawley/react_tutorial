import { Link } from 'react-router-dom'
import React from 'react'
import './Project.css'

function Project({ image, title, link }) {
    return (
        <div className='project'>
        <div className="ProjectImage">
        <div className="ProjectTitle">
        <div className="ProjectLink">
        <img src={image} width="300" height="auto" />
        <h3>{title}</h3>
        <Link to={props.link}>Link to project</Link>
        </div>
        </div>
        </div>
        </div>
        )
   }

export default Project