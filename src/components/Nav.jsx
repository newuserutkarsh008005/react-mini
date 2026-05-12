import React from 'react'
import { Link } from 'react-router-dom'
import Tgb from './Tgb';

function clicked(){
    console.log('clicked')
    console.log('kya re');
    
  }
const Nav = ({ theme, setTheme }) => {
  return (
    <div className={`bg-blue-500 h-20 w-screen text-2xl text-amber-50
    ${theme?'bg-blue-400 text-black':'bg-black text-white'}`
    }>
        <div className='flex'>
      <div className='text-4xl p-3 font-extrabold font-serif active:scale-105'>
        Company XYZ
      </div>
      <div className='ml-auto p-3 flex items-center space-x-6'>
        <Link className='active:scale-105' to='/'>Home</Link>
        <Link className='active:scale-105' to='about'>About</Link>
        <Link className='active:scale-105' to='favoutite'>Favoutite</Link>

         <Tgb theme={theme} setTheme={setTheme} />

        </div>
       
</div>
    </div>
  )
}

export default Nav