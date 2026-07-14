import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddCourse from './components/AddCourse'
import NavBar from './components/NavBar'
import ViewEntry from './components/ViewEntry'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AddCourse/>}/>
          <Route path='/view' element={<ViewEntry/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
