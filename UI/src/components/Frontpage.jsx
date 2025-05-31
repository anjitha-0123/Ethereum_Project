import React from 'react'
import logo from '../assets/logo.png'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

function Frontpage() {
  return (
    <div className='bg-purple-950 w-full h-[3000px]'>
        <Navbar></Navbar>
        <div className='flex'>
       <img src={logo} ></img>
       <div className='bg-white w-[1000px] h-52 rounded-lg mt-72 ml-20 '>
       <h1 className='pl-12 pt-12 text-3xl'>Let's Recycle</h1> 
       <p className='ml-12 mb-12' >Recycle your product and earn token via Wallet !</p>
       <Link to='/form'className='bg-purple-950 text-white w-40 h-24 mt-24 py-3 px-3 ml-12 ' >Add your Product</Link>
       </div>
       </div>
       
    </div>
  )
}

export default Frontpage