import React from 'react'
import Nav from './components/Nav'
import { Routes ,Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Favourite from './pages/Favourite'
const App = () => {
  return (
    <div className='h-screen w-screen bg-black'>
    
    <Nav />
    <Routes>
      <Route path="/" element={<Home />} />
       <Route path="about" element={<About />} />
        <Route path="favoutite" element={<Favourite />} />
    </Routes>
    
    </div>
  )
}

export default App