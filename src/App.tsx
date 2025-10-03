// import { useState } from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import './index.css'
import MainContent from './components/MainContent'



function App() {




 
  return (
    <Router>
      <div className='flex h-screen'>
        <Sidebar/>
      </div>
      <div className='rounded w-full justify-between flex-wrap'>
        <Routes>
          {/* <Route path='/' element={<MainContent/>}> */}
        </Routes>
      </div>
    </Router>
  )
}

export default App
