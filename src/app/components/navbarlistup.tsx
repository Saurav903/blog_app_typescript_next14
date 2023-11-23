"use client"
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';
import React from 'react'
import { FaBars } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import style from "../styles/navbar.module.css";


interface NavbarlistupProps {
  cook: boolean; // Assuming 'cook' is a boolean, update the type accordingly
}

const Navbarlistup: React.FC<NavbarlistupProps> = ({cook}) => {
    let router=useRouter();

 
  
    const handleBlog = ()=>{
      if(cook){
        router.push("/blogs");
      }else{
        
        toast.error(' Login First!', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      }
    }
  
  return (
    <div className='text-xl sm:block md:block lg:hidden p-10 dropdown bg-red'>
    <label tabIndex={0} className="btn m-1 bg-[rgb(235,235,235,0.1)] text-[rgb(66,66,66
      +)] border-none"><FaBars/></label>
    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-[rgb(235,235,235,0.9)] rounded-box w-52">
      <li><div className={style.textall} onClick={()=>router.push("/")} ><p>Home</p></div></li>
      <li><div className={style.textall} onClick={handleBlog}><p>Blogs</p></div></li>
      <li><div className={style.textall} onClick={()=>router.push("/about")}><p>About</p></div></li>
      <li><div className={style.textall} onClick={()=>console.log("hi")}><p>Contact</p></div></li>
    </ul>
    <ToastContainer />
  </div>
  )
}

export default Navbarlistup