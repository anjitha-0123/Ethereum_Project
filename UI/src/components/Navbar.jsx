import React from 'react'
import { Link } from 'react-router-dom';
import {BrowserProvider} from "ethers";
import {toast} from 'react-toastify';

function Navbar() {


  async function handleWallet(){

      const provider=new BrowserProvider(window.ethereum)

    if (!window.ethereum) {
      toast.warning("Please install MetaMask.");
      return;
    }
    try
    {
      const signer=await provider.getSigner();
      toast.success(`${signer.address} Connected to MetaMask Successfully !`)
    }
    catch(error)
    {
     toast.error("Wallet Connection Failed !");
     console.error(error);
    }
    
    
  }

  return (
    <div className='flex pl-[900px] pt-6 text-green-200'>
        <Link to='/' className='ml-62'>HOME</Link>
        <Link to='/' className='ml-12'>SOLUTIONS</Link>
        <Link to='/' className='ml-12'>ABOUT US</Link>
        <input type='button' value="Connect to Wallet" className='ml-32 bg-green-900 w-40 h-10  rounded-md' onClick={handleWallet}/>
    </div>
  )
}

export default Navbar