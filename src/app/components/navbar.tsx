
import React from 'react';
import style from "../styles/navbar.module.css";

import 'react-toastify/dist/ReactToastify.css';
import Navbarlogincomponent from './navbarlogincomponent';
import { cookies } from 'next/headers'
import Navbarlistup from './navbarlistup';
import Navbarlistdown from './navbarlistdown';

const Navbar = () => {
  const cookieStore = cookies()
  const cook = cookieStore.get('appSession');




  return (
    <div className={style.navdiv} >


<div className={style.nav}>
  <Navbarlistup cook={cook}/>
  <div className="flex justify-between items-center w-0 md:w-0 lg:w-20">
    <span className=" rounded-xl inline-block" style={{height:"20px",width:"20px",backgroundColor:"rgb(240,65,51)"}}></span>
    <span className=" bg-black rounded-xl inline-block" style={{height:"20px",width:"20px",backgroundColor:"rgb(255,162,15)"}}></span>
    <span className=" bg-black rounded-xl inline-block" style={{height:"20px",width:"20px",backgroundColor:"rgb(108,223,36)"}}></span>
  </div>



  <Navbarlistdown cook={cook}/>

  <>
    <Navbarlogincomponent cook={cook}/>
  </>

</div>
</div>

  )
}

export default Navbar


