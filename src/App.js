import {motion} from 'framer-motion'
import Header from './components/Header'
import Intro from './components/Intro';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import { useEffect, useState } from 'react';

function App() {
  const [cursorState, setCursorState] = useState({
    pageX: 0,
    pageY: 0
  })

  useEffect( ()=>{
    document.addEventListener('mousemove', (e) =>{
      setCursorState({pageX:e.pageX, pageY:e.pageY})
    })
  }, [])

  return (
    <div className='App'>
      <Header />
      <Intro />
      <AboutMe />
      <Projects cursorState={cursorState}/>
    </div>
  );
}

export default App;
