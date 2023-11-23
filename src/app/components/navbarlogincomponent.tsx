"use client"
import React from 'react'
import { useUser } from '@auth0/nextjs-auth0/client';
import Link from "next/link";
import style from "../styles/navbar.module.css";
import Loading from '../blogs/loading';
interface NavbarlistupProps {
  cook: boolean; // Assuming 'cook' is a boolean, update the type accordingly
}
const Navbarlogincomponent: React.FC<NavbarlistupProps> = ({cook}) => {
    const { user,isLoading} = useUser();
  return (
    <>
        {cook ? (<div className="flex justify-between items-center w-[50%] md:w-[50%] lg:w-[25%]">
    <div>
      <p className={style.textalls}>{isLoading ?"...Loading" : user?.name }</p>
    </div>
    <div>
      <a  href={"/api/auth/logout"} className={style.textalls}>Logout</a>
    </div>
    </div>):( <div className="flex justify-between items-center w-[25%] sm:w-[20%] md:w-[15%] lg:w-[13%]">
    <div>
      <a  href={"/api/auth/login"} className={style.textalls}>Login</a>
    </div>
    <div>
      <a  href={"/api/auth/login?screen_hint=signup"} className={style.textalls}>Signup</a>
    </div>
  </div> )}
    </>
  )
}

export default Navbarlogincomponent