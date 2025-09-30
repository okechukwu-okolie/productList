// import { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import './index.css'



function App() {




 
  return (
    <Router>
      <div className='flex h-screen bg-slate-400'>
        <Sidebar/>
      </div>
    </Router>
  )
}

export default App
