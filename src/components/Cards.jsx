import React from "react";
import { Link } from "react-router-dom";
const Cards = (props) => {
  return (
    <div className="flex flex-wrap m-4 gap-6 justify-center">
      <div
        className={`w-72 sm:w-80 m-2 mt-6 rounded-2xl p-4 flex flex-col justify-between min-h-80 shadow-lg ${
          props.theme ? 'bg-blue-300 text-black' : 'bg-violet-300 text-black'
        }`}>

        <div className="flex flex-col items-center">
          <div className="h-36 w-36 sm:h-40 sm:w-40 overflow-hidden p-2">
            <img
              src={props.image}
              className="h-full w-full object-cover rounded-full"
              alt=""
            />
          </div>

          <div className="mt-4 text-2xl text-center px-2">
            <h1>
              Name : {props.fname} {props.lname}
            </h1>
          </div>

          <div className="mt-2 text-sm text-center px-2">
            <h3> Company : {props.company}</h3>
          </div>
        </div>

        <div className="mt-4 w-full flex justify-center">
          <Link to={`/user/${props.eid}`} className="w-full">
            <button className="w-full py-2 rounded-full bg-amber-300 active:scale-90">Click me</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cards;
