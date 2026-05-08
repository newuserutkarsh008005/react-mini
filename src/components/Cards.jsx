import React from "react";
import { Link } from "react-router-dom";
const Cards = (props) => {
  return (
    <div flex flex-wrap m-10 gap-10>
      <div className=
      {`h-95 w-80 m-10 mt-12 ml-15 rounded-2xl 
        ${props.theme
          ? 'bg-blue-300 text-black'
          : 'bg-violet-300 text-black'
      }
       `} >
        <div className="h-40 w-40 overflow-hidden   ml-18  p-2  ">
          <img
            src={props.image}
            className="h-full w-full object-cover rounded-full mt-2  "
            alt=""
          />
        </div>
        <div className=" mt-8 ml-6 text-2xl p-2">
          <h1>
            Name : {props.fname} {props.lname}
          </h1>
        </div>
        <div className="ml-6 mt-2 p-2">
          <h3> Company : {props.company}</h3>
        </div>
        <div className="flex">
       <Link to={`/user/${props.eid}`}> <div className=" text-2xl mt-5 w-60 h-10 rounded-full  bg-amber-300 justify-center ml-10">
            <button className="p-1 active:scale-90 ml-15" >Click me</button>
            
        </div>
        </Link></div>
      </div>
    </div>
  );
};

export default Cards;
