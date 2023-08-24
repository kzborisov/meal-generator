import React from "react";
import UnderConstruction from "../assets/under-construction.jpg";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className='flex items-center justify-center flex-col gap-10'>
      <p className='text-[#F32013]'>Under Construction</p>
      <img
        src={UnderConstruction}
        alt='under construction'
        className='w-[50%]'
      />
      <Link to='/' className='p-4 bg-primary rounded-br-3xl rounded-tl-3xl'>
        Върни ме обратно!
      </Link>
    </div>
  );
};

export default SignIn;
