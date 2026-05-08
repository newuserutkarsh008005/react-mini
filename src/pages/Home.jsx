
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Cards from '../components/Cards';
import Loader from '../components/Loader';
import { Outlet } from 'react-router-dom';


const Home = ({ theme, setTheme }) => {
  const[cars,setCards]=useState([]);
async function getdata(){
  const datas=await axios.get('https://dummyjson.com/users?limit=10&skip=0');
  setCards(datas.data.users)
console.log(datas)
console.log(cars);

}
useEffect(()=>{
  getdata();
},[])
console.log(`${cars}`);
  return (
   <div className={ `flex flex-wrap pl-15 mt-10 h-full
   ${theme
          ? 'bg-white text-black'
          : 'bg-black text-white'
      }
   `}>
    {cars.length>0?(
      cars.map((e)=>(
        <Cards eid={e.id} fname={e.firstName} lname={e.lastName} age={e.age} company={e.company.name} phone={e.phone} image={e.image} theme={theme}/>
        
      ))
     
    ):(<Loader />)}
    
   </div>

    
  )
}

export default Home