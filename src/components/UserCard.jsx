import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const UserCard = (props) => {
 
  
  
function removeUser(id){
   console.log("I am inside Favourite");
}
 
  return (
    <div className="flex flex-wrap m-10 gap-10 h-fit p-2">
      <div className="h-[80%] w-80 bg-indigo-400 m-10 mt-12 ml-15 rounded-2xl shadow-lg p-5">

        {/* Image */}
        <div className="h-40 w-60 overflow-hidden ml-8">
          <img
            src={props.img}
            className="h-full w-full object-cover rounded-b-full mt-2"
            alt={props.name}
          />
        </div>

        {/* User Info */}
        <div className="mt-8 ml-6 text-xl">
          <h1 className="font-bold">{props.name}</h1>
        </div>

        <div className="ml-6 mt-3 space-y-2 text-md">
          <h3>
            <span className="font-semibold">ID:</span> {props.id}
          </h3>

          <h3>
            <span className="font-semibold">Age:</span> {props.age}
          </h3>

          <h3>
            <span className="font-semibold">Email:</span> {props.email}
          </h3>

          <h3>
            <span className="font-semibold">Company:</span> {props.company}
          </h3>

          <h3>
            <span className="font-semibold">University:</span> {props.university}
          </h3>

          <h3>
            <span className="font-semibold">Address:</span> {props.address}
          </h3>
        </div>

        {/* Button */}
        <div className="flex w-full h-full flex-wrap">
        <Link to={`/user/${props.id}`}>
          <div className="mt-6 mx-6 p-3 w-fit h-fit rounded-full bg-teal-400 flex items-center justify-center text-xl cursor-pointer active:scale-95 transition">
            <button className="ml-5 mr-5 " >View Profile</button>
          </div>
        </Link>
        <div className="mt-6 mx-6  w-fit p-3 h-fit rounded-full bg-red-300 flex items-center justify-center text-xl cursor-pointer active:scale-95 transition">
            <button 
            onClick={() => props.removeUser(props.id)}
            className="ml-5 mr-5 ">Remove </button>
          </div>
      </div></div>
    </div>
  );
};

export default UserCard;