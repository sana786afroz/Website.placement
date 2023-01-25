import React from 'react'

function Input({text,className,handleOnchange}){
  return (
    <div>
      <input className={className} placeholder={text} onChange={(e)=>handleOnchange(e.target.value)}/>
    </div>
  )
}

export default Input
