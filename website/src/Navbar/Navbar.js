import React from 'react'
import style from './Navbar.module.css'
import { VscExtensions } from "react-icons/vsc";
import {CgProfile} from 'react-icons/cg'


const Navbar = () => {
  return (
    <>
    <div className={style.main}>
     <div className={style.proj}>
     <VscExtensions/>
     Project Name
     </div> 
     <div className={style.proj2}>
      <div>Customer Admin</div>
     <div className={style.profile}>
        <CgProfile/>
        UserName</div>
     </div>
    
     
    </div>
    
    </>
  )
}

export default Navbar
