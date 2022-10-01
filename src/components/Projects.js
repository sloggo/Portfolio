import {filterProps, motion} from 'framer-motion'
import Project from './Project'
import React, {useState} from 'react'
import projectData from '../projectData.json'

export default function Projects(props){
    const [projects, setProjects] = useState(projectData)

    return(
        <a id="projects">
            <div className="projects-section-container">
                <h1 className="aboutme-title">Here are some things I've worked on;</h1>

                <div className="projects-container">
                    {projects.map((item, itemIndex) => <Project cursorState={props.cursorState} project={item}  multiplier={(itemIndex+1) *0.7}></Project>)}
                </div>
            </div>
        </a>
    )
}