import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
const User = ({ theme, setTheme }) => {

  const [user, setUser] = useState(null);
  const [val, isValue] = useState(false);

  const { id } = useParams();

  async function getdata() {

    try {

      const datas = await axios.get(
        `https://dummyjson.com/users/${id}`
      );

      setUser(datas.data);

      isValue(true);

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getdata();
  }, []);
function favourite(){
let storage=window.localStorage;


  const fuser={
    id:user.id,
    name:`${user.firstName} ${user.lastName}`,
    img:`${user.image}`,
    age:`${user.age}`,
    email:`${user.email}`,
    company:`${user.company?.name}`,
    university:`${user.university}`,
    address:`${user.address?.city}`

  };
if (storage.getItem(user.id)) {
  toast.error('Already Saved!');
} else {
  storage.setItem(user.id, JSON.stringify(fuser));
  toast.success('Saved Successfully!');
}


}
  return (
<>
<Toaster />

   { val ? (
      
     
      <div className={`
      
      h-screen w-[85%] flex justify-center items-center
${theme
          ? 'bg-white text-black'
          : 'bg-black text-white'
      }
      `}>

        <div className={
`
h-[90%] w-[40%] rounded-3xl p-10 shadow-2xl
${theme
          ? 'bg-pink-200 text-black'
          : 'bg-teal-400 text-grey'
      }

`

        }>

          {/* Image */}
          <div className="h-[35%] w-full flex justify-center">

            <div className="h-52 w-52 overflow-hidden rounded-full border-4">

              <img
                className="h-full w-full object-cover bg-amber-50"
                src={user.image}
                alt=""
              />

            </div>

          </div>

          {/* User Info */}
          <div className="mt-10 space-y-4 text-xl">

            <h1 className="text-4xl font-bold text-center">
              {user.firstName} {user.lastName}
            </h1>

            <h2>
              <span className="font-bold">Age:</span> {user.age}
            </h2>

            <h2>
              <span className="font-bold">Email:</span> {user.email}
            </h2>

            <h2>
              <span className="font-bold">Phone:</span> {user.phone}
            </h2>

            <h2>
              <span className="font-bold">Company:</span> {user.company?.name}
            </h2>

            <h2>
              <span className="font-bold">University:</span> {user.university}
            </h2>

            <h2>
              <span className="font-bold">Address:</span> {user.address?.city}
            </h2>

          </div>

          <div className="mt-5 w-full flex">

            <button
            onClick={favourite}

            className="h-full w-[50%] bg-amber-800 p-2 ml-2 rounded-4xl active:scale-110  active:bg-amber-600">

              Add to Favourite

            </button>
            <Link to='/'>
            <button className=" h-full w-full bg-amber-800 p-2 ml-10 rounded-4xl active:scale-110 active:bg-amber-600">

              Go Back to Home 


            </button>
            </Link>

          </div>

        </div>

      </div>

    ) : (

      <Loader />

    )}
</>
  );
};

export default User;