import Projects from "./Projects";
import {filterProps, motion} from 'framer-motion'

export default function Project(props){
    return(
        <div className="project">
            <motion.img animate={{rotateY:((-(window.innerHeight / 100) - props.cursorState.pageX/100)), rotateX:((window.innerWidth / 100) - props.cursorState.pageY/100) * props.multiplier}} className="project-preview" src={props.project.img}></motion.img>

            <div className='project-text'>
                <h1 className='project-title'>{props.project.title}</h1>
                <p className='project-description'>{props.project.desc}</p>
            </div>
        </div>
    )
}