import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='bg-blue-400 h-20 w-full text-2xl text-amber-50 '>
        <div className='flex'>
      <div className='text-4xl p-4 font-extrabold font-serif active:scale-105'>
        Company XYZ
      </div>
      <div className='ml-200 p-5 '>
        <Link className='ml-10 active:scale-105' to='/'>Home</Link>
        <Link className='ml-10 active:scale-105' to='about'>About</Link>
        <Link className='ml-10 active:scale-105' to='favoutite'>Favoutite</Link>
        </div>

</div>
    </div>
  )
}

export default Nav