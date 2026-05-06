import React from "react";
import { Link } from "react-router-dom";
const Cards = (props) => {
  return (
    <div flex flex-wrap m-10 gap-10>
      <div className="h-80 w-80 bg-indigo-200 m-10 mt-12 ml-15 rounded-2xl ">
        <div className="h-40 w-60 overflow-hidden   ml-8  ">
          <img
            src={props.image}
            className="h-full w-full object-cover rounded-b-full mt-2"
            alt=""
          />
        </div>
        <div className=" mt-8 ml-6 text-2xl">
          <h1>
            Name : {props.fname} {props.lname}
          </h1>
        </div>
        <div className="ml-6 mt-2">
          <h3> Company : {props.company}</h3>
        </div>
       <Link to={`/user/${props.eid}`}> <div className="pl-25 text-2xl mt-5 w-80 h-10 rounded-full  bg-amber-300 ">
            <button className="p-1 active:scale-90" >Click me</button>
            <h3>{props.eid}</h3>
        </div>
        </Link>
      </div>
    </div>
  );
};

export default Cards;
