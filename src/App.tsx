import { useState } from 'react'
import { History } from './components/History/History'
import { PersonalInfo } from './components/PersonalInfo/PersonalInfo'
import { ProjectsInfo } from './components/Projects/ProjectsInfo'
import { Skills } from './components/Skills/Skills'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <div className='aside'>
      <PersonalInfo/>
      <Skills/>
      <History/>
      </div>
      
      
      <ProjectsInfo/>

      
      
    </div>
  )
}

export default App
