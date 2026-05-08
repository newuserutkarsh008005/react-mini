import { all } from 'axios';
import React, { useEffect, useState } from 'react'
import UserCard from '../components/UserCard';

const Favourite = () => {
  const[userdet,setUserdet]=useState([])
  function getfav(){

const stores=window.localStorage;
let alluser=[]
  for(let i = 0; i < localStorage.length; i++){

   let key = localStorage.key(i);

   let value = JSON.parse(stores.getItem(key));
    alluser.push(value)

   
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
    <div className='bg-black h-screen'>
    <div className='h-full w-full flex justify-center align-middle flex-wrap bg-black'>
      
      
        
      {userdet.map((user)=>(
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
        />
      ))}
    </div>
</div>
  )
}
export default Favourite