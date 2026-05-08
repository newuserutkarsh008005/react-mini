
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
    <div className={`${theme ? 'bg-white text-black' : 'bg-black text-white'} w-full min-h-screen py-8`}>
      <div className="max-w-6xl mx-auto px-4">
        {cars.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {cars.map((e) => (
              <Cards
                key={e.id}
                eid={e.id}
                fname={e.firstName}
                lname={e.lastName}
                age={e.age}
                company={e.company.name}
                phone={e.phone}
                image={e.image}
                theme={theme}
              />
            ))}
          </div>
        ) : (
          <div className="flex justify-center py-20">
            <Loader />
          </div>
        )}
      </div>
    </div>
  )
}

export default Home