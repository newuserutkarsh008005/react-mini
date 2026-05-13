import React from "react";
import { Link } from "react-router-dom";
const Cards = (props) => {
  const subtle = {
  1: {
    light: "bg-gradient-to-r from-slate-200 via-gray-100 to-zinc-200 text-black",
    dark: "bg-gradient-to-r from-slate-900 via-slate-800 to-zinc-900 text-white",
  },
  2: {
    light: "bg-gradient-to-br from-rose-200 via-pink-200 to-orange-200",
    dark: "bg-gradient-to-br from-rose-900 via-pink-900 to-orange-900",
  },
  3: {
    light: "bg-gradient-to-r from-sky-200 via-cyan-200 to-blue-300",
    dark: "bg-gradient-to-r from-sky-900 via-cyan-900 to-blue-900",
  },
  4: {
    light: "bg-gradient-to-tr from-emerald-200 via-teal-200 to-lime-200",
    dark: "bg-gradient-to-tr from-emerald-900 via-teal-900 to-lime-900",
  },
  5: {
    light: "bg-gradient-to-r from-violet-200 via-purple-200 to-fuchsia-200",
    dark: "bg-gradient-to-r from-violet-900 via-purple-900 to-fuchsia-900",
  },
  6: {
    light: "bg-gradient-to-br from-amber-200 via-yellow-200 to-orange-300",
    dark: "bg-gradient-to-br from-amber-900 via-yellow-900 to-orange-900",
  },
  7: {
    light: "bg-gradient-to-r from-indigo-200 via-blue-200 to-slate-200",
    dark: "bg-gradient-to-r from-indigo-900 via-blue-900 to-slate-900",
  },
  8: {
    light: "bg-gradient-to-tr from-green-200 via-emerald-200 to-teal-200",
    dark: "bg-gradient-to-tr from-green-900 via-emerald-900 to-teal-900",
  },
  9: {
    light: "bg-gradient-to-r from-neutral-200 via-stone-100 to-gray-200",
    dark: "bg-gradient-to-r from-neutral-900 via-stone-900 to-gray-900",
  },
  10: {
    light: "bg-gradient-to-br from-pink-200 via-rose-200 to-red-200",
    dark: "bg-gradient-to-br from-pink-900 via-rose-900 to-red-900",
  },
};
  return (
    <div className="flex flex-wrap m-4 gap-6 justify-center">
      <div
       className={`w-72 sm:w-80 m-2 mt-6 rounded-2xl p-4 flex flex-col justify-between min-h-80 shadow-lg ${
  !props.theme
    ? subtle[props.eid]?.dark 
    : subtle[props.eid]?.light
} `}>

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
              Name : {props.name} {props.lname}
            </h1>
          </div>

          <div className="mt-2 text-sm text-center px-2">
            <h3> Company : {props.company}</h3>
          </div>
        </div>

        <div className="mt-4 w-full flex justify-center">
          <Link to={`/user/${props.eid}`} className="w-full">
<button
  className={`w-full py-2 rounded-full active:scale-90 transition ${
    props.theme
      ? "bg-green-600 text-white hover:bg-green-800"
      : "bg-green-400 text-black hover:bg-green-500"
  }`}
>
  Click me
</button>          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cards;
