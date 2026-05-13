import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
const UserCard = (props) => {
 
  
  const subtle = {
  1: {
    light: "bg-gradient-to-r from-slate-100 via-gray-50 to-zinc-100",
    dark: "bg-gradient-to-r from-slate-900 via-slate-800 to-zinc-900",
  },
  2: {
    light: "bg-gradient-to-br from-rose-50 via-pink-50 to-orange-50",
    dark: "bg-gradient-to-br from-rose-900 via-pink-900 to-orange-900",
  },
  3: {
    light: "bg-gradient-to-r from-sky-50 via-cyan-50 to-blue-100",
    dark: "bg-gradient-to-r from-sky-900 via-cyan-900 to-blue-900",
  },
  4: {
    light: "bg-gradient-to-tr from-emerald-50 via-teal-50 to-lime-50",
    dark: "bg-gradient-to-tr from-emerald-900 via-teal-900 to-lime-900",
  },
  5: {
    light: "bg-gradient-to-r from-violet-50 via-purple-50 to-fuchsia-50",
    dark: "bg-gradient-to-r from-violet-900 via-purple-900 to-fuchsia-900",
  },
  6: {
    light: "bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-100",
    dark: "bg-gradient-to-br from-amber-900 via-yellow-900 to-orange-900",
  },
  7: {
    light: "bg-gradient-to-r from-indigo-50 via-blue-50 to-slate-100",
    dark: "bg-gradient-to-r from-indigo-900 via-blue-900 to-slate-900",
  },
  8: {
    light: "bg-gradient-to-tr from-green-50 via-emerald-50 to-teal-100",
    dark: "bg-gradient-to-tr from-green-900 via-emerald-900 to-teal-900",
  },
  9: {
    light: "bg-gradient-to-r from-neutral-100 via-stone-50 to-gray-100",
    dark: "bg-gradient-to-r from-neutral-900 via-stone-900 to-gray-900",
  },
  10: {
    light: "bg-gradient-to-br from-pink-50 via-rose-50 to-red-50",
    dark: "bg-gradient-to-br from-pink-900 via-rose-900 to-red-900",
  },
};
function removeUser(id){
   console.log("I am inside Favourite");
}
 
  return (
    <div className="w-full sm:w-80 m-2">
     <div
  className={`${
    !props.theme ? subtle[props.color]?.dark : subtle[props.color]?.light
  } rounded-2xl shadow-lg p-5 h-full flex flex-col justify-between`}
>

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