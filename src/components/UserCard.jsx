import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
const UserCard = (props) => {
 
  
  
function removeUser(id){
   console.log("I am inside Favourite");
}
 
  return (
    <div className="w-full sm:w-80 m-2">
      <div className="bg-indigo-400 rounded-2xl shadow-lg p-5 h-full flex flex-col justify-between">

        {/* Image */}
        <div className="h-40 w-40 overflow-hidden pb-3 mx-auto">
          <img
            src={props.img}
            className="h-full w-full object-cover rounded-full border bg-amber-50 p-1 mt-2"
            alt={props.name}
          />
        </div>

        {/* User Info */}
        <div className="mt-6 text-center text-xl px-2">
          <h1 className="font-bold">{props.name}</h1>
        </div>

        <div className="mt-3 space-y-2 text-md px-4">
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
        <div className="mt-4 w-full flex gap-4 justify-center">
          <Link to={`/user/${props.id}`} className="flex-1">
            <button className="w-full py-2 rounded-full bg-teal-400 text-white">View Profile</button>
          </Link>

          <button
            onClick={() => {
              props.removeUser(props.id);
              toast.success('Removed Successfully!');
            }}
            className="flex-1 py-2 rounded-full bg-red-300 text-white"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;