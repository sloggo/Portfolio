import {motion} from 'framer-motion'
import LanguageIcon from './LanguageIcon'

export default function Project(props){
    return(
        <motion.div animate={{rotateY:((-(window.innerHeight / 100) - props.cursorState.pageX/200)), rotateX:((window.innerWidth / 80) - props.cursorState.pageY/100) / props.multiplier}} className="project">
            <motion.img className="project-preview" src={props.project.img}></motion.img>

            <div className='project-text'>
                <h1 className='project-title'>{props.project.title}</h1>
                <p className='project-desc'>{props.project.desc}</p>
                <ul>
                    {props.project.features.map((item, index) => {
                        return <li key={index}>{item}</li>
                    })}
                </ul>

                <div className='project-text-bottom'>
                    <div className='project-languages'>
                        {props.project.languages.map((lang) => {
                            return <LanguageIcon language={lang} key={lang.id}></LanguageIcon>
                        })}
                    </div>

                    <div className='project-links'>
                        <a className="project-repo-container" href={props.project.repo}>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
                            <p>Github Repo</p>
                        </a>

                        <a className="project-live-container" href={props.project.live}>
                            <img src="./external-link.svg" />
                            <p>Live Demo</p>
                        </a>
                    </div>
                </div>
                
            </div>
        </motion.div>
    )
}