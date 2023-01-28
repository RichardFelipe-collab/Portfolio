import { useState } from 'react'
import { PersonalInfo } from './components/PersonalInfo/PersonalInfo'
import { ProjectsInfo } from './components/Projects/ProjectsInfo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <PersonalInfo/>
      <ProjectsInfo/>
    </div>
  )
}

export default App
