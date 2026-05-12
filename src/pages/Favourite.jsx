import { all } from 'axios';
import React, { useEffect, useState } from 'react'
import UserCard from '../components/UserCard';
import toast, { Toaster } from 'react-hot-toast';
import Loader from '../components/Loader';
import Nouser from '../components/Nouser';

const Favourite = ({ theme, setTheme }) => {
 
  
  const[userdet,setUserdet]=useState([])
  function getfav(){
    const stores = window.localStorage;
    const alluser = [];
    for (let i = 0; i < stores.length; i++) {
      const key = stores.key(i);
      const raw = stores.getItem(key);
      if (!raw) continue;
      try {
        const value = JSON.parse(raw);
        // only accept objects that look like a saved user (have an id and name)
        if (value && (value.id || value.name)) {
          alluser.push(value);
        }
      } catch (err) {
        // skip non-JSON items in localStorage
        continue;
      }
    }
    setUserdet(alluser);
  
}
 function removeUser(id){
  localStorage.removeItem(id)
  const updateduser=userdet.filter(
(user)=>user.id!==id
  );
  setUserdet(updateduser)
 }
useEffect(function(){
getfav();
},[])
  console.log(userdet);
  
  
 
  
  return (
     <>
    <Toaster position="top-center" />
   
    <div className={`${theme ? 'bg-white text-black' : 'bg-black text-white'} w-full min-h-screen py-8`}>
      <div className="max-w-6xl mx-auto px-4 ">
        {userdet.length > 0 ? (
          <div className=" gap-10 flex flex-wrap">
            {userdet.map((user) => (
              <UserCard
                key={user.id}
                id={user.id}
                name={user.name}
                img={user.img}
                age={user.age}
                email={user.email}
                company={user.company}
                university={user.university}
                address={user.address}
                removeUser={removeUser}
                theme={theme}
              />
            ))}
          </div>
        ) : (
          <Nouser />
        )}
      </div>
    </div>
 </>
    
  )
}
export default Favourite