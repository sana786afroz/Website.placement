import React, { useState } from 'react'
import Input from '../Input/Input'

import style from './LeftPart.module.css'

function LeftPart(){
  const[open,setOpen]=useState()
    function handleClose(){
      setOpen(false)
    }
  
  return (
    <>
   
  
    <div className={style.wrapper}>
      <div className={style.box}>
      {/* {props.submit.map((x)=>{
        <div></div>
      })} */}
       
      
       </div>
      </div>
   
    </>
  )
}

export default LeftPart
