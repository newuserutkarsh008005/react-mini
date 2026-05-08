import React, { useState ,useEffect} from 'react'
import Nav from './components/Nav'
import { Routes ,Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Favourite from './pages/Favourite'
import User from './pages/User'
import Switch from './components/Tgb'
const App = () => {
   const [theme, setTheme] = useState(
    JSON.parse(sessionStorage.getItem('theme')) || false
  );

  useEffect(() => {
    sessionStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);
  return (
    <div 
    className={`${
        theme
          ? 'bg-white text-black'
          : 'bg-black text-white'
      } min-h-screen`}
    >
    
    <Nav setTheme={setTheme} theme={theme} />
   
   
    <Routes>
      <Route path="/" element={<Home setTheme={setTheme} theme={theme}  />} />
      <Route path='user/:id' element={<User setTheme={setTheme} theme={theme} />} />
      
       <Route path="about" element={<About />} />
        <Route path="favoutite" element={<Favourite setTheme={setTheme} theme={theme}  />} />
    </Routes>
    
    </div>
  )
}

export default App