import React, { useEffect, useState } from 'react'
import {FiSearch} from 'react-icons/fi'
import {AiOutlinePlusSquare} from 'react-icons/ai'
import style from './Search.module.css'
import Input from '../Input/Input'
import Button from '../Button/Button'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import {TfiCheck} from 'react-icons/tfi'
import {RxCross1} from 'react-icons/rx'
import LeftPart from '../LeftPart/LeftPart'
import { CgProfile } from 'react-icons/cg'
import {AiFillDelete} from 'react-icons/ai'


const Search = () => {

  const[open,setOpen]=useState(false)
  const[submit,setSubmit]=useState([])
  const[userName,setUserName]=useState()
  const[firstName,setFirstName]=useState()
  const[lastName,setLastName]=useState()
  const[password,setPassword]=useState()
  const[confirmpassword,setConfirmPassword]=useState()
  const[search,setSearch]=useState("")

  function handleClose(){
setOpen(false)
  }
  function handleOpen(){
    setOpen(true)
  }
  function handleuserName(e){
   setUserName(e.target.value)
  }
  function handleFirstName(e){
    setFirstName(e.target.value)
   }
   function handleLastName(e){
    setLastName(e.target.value)
   }
   function handlePassword(e){
    setPassword(e.target.value)
   }
   function handleConfirmPassword(e){
    setConfirmPassword(e.target.value)
   }
   function handleSubmit(){
    const addData={userName,firstName,lastName,password,confirmpassword}
    setSubmit([...submit,addData])
    setUserName("")
    setFirstName("")
    setLastName("")
    setPassword("")
    setConfirmPassword("")
   localStorage.setItem("key",JSON.stringify(submit))
   
    setOpen(false)
   }
   function handleSearch(value){
    setSearch(value)
   }
   function detele(item){
   const indexOfDelete=submit.findIndex((x)=>x.userName===item.userName)
   submit.splice(indexOfDelete,1)
   setSubmit([...submit])
   }
   
   useEffect(()=>{
    if(localStorage.getItem("key")){
      setSubmit(JSON.parse(localStorage.getItem("key")))
    }
   },[])

  return (
    <>
    {/* <LeftPart submit={submit}/> */}
    <div className={style.search}>
      <FiSearch style={{fontSize:"xx-large"}}/>
     
     <Input className={style.input} handleOnchange={handleSearch} text=" Customers"/>
     <Button 
     Sign={<AiOutlinePlusSquare style={{fontSize:"xx-large",marginTop:"-0.5rem"}}/>}
     btnNext={handleOpen}
     className={style.btnNext}
     />
     <Dialog
     open={open}
     onClose={handleClose}>
      <div className={style.dialog1}>Add User | Login Details</div>
      <div className={style.dialog}><input onChange={handleuserName} value={userName} placeholder='Username*'/></div>
      <div className={style.dialog}><input onChange={handleFirstName} value={firstName} placeholder='First Name*'/></div>
      <div className={style.dialog}><input onChange={handleLastName} value={lastName} placeholder='Last Name*'/></div>
      <div className={style.dialog}><input onChange={handlePassword} value={password} placeholder='Password*'/></div>
      <div className={style.dialog}><input onChange={handleConfirmPassword} value={confirmpassword} placeholder='Confirm Password*'/></div>

      <DialogActions>
     <Button 
     Sign={'Proceed'}
     btnNext={handleSubmit}
     className={style.btnNext}
     logo={<TfiCheck/>}
     />
      <Button 
     Sign={'Cancle'}
     btnNext={handleClose}
     className={style.btnNext}
     logo={<RxCross1/>}
     />
     </DialogActions>
     
     </Dialog>
    
    </div>
    <div>{submit.filter((s)=>{
      return s.userName.toLowerCase().includes(search.toLowerCase())
    }).map((x)=>{
      return(
        <>
        <span className={style.maindiv}>
           <CgProfile style={{fontSize:"xx-large",marginTop:"1rem"}}/>
      <span> &nbsp;{x.firstName} {x.lastName}</span>
      <span >{x.userName}</span>
      </span>
      <button className={style.dustbin} onClick={detele}><AiFillDelete/></button>
      </>
      )
    })}</div>

   
    
    </>
  )
}

export default Search
