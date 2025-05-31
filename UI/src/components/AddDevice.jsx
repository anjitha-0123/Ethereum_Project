import React from 'react'
import Navbar from './Navbar'

function AddDevice() {
  return (
    <div className='bg-purple-950 w-full h-[3000px]'>
        <Navbar></Navbar>
        <form className='w-[600px] h-[800px] bg-green-200 mx-auto rounded-md mt-12'>
            <h2 className='pt-12 pl-60 text-2xl font-bold '>Add Device</h2>
            <label className='pl-20 text-xl '>Device Type :</label>
            <select className='pl-12 ml-4 mt-6 border-2 rounded-md w-72 h-8 mb-8  '>
                <option> -- Select a device -- </option>
                <option>Laptop</option>
                <option>Tablet</option>
                <option>Computer</option>
                <option>Keyboard</option>
                <option>MObile Phone</option>
                <option>Mouse</option>
                <option>CPU</option>
                <option>Laptop Charger</option>
                <option>Mobile Charger</option>
                <option>Others</option>
            </select>
            <br></br>
            <label className='pl-20  text-xl '>Image :</label>
            <input type='file' className='ml-18 w-[300px] h-8 rounded-md border-2'></input><br></br>
            <div className='flex mt-12'>
            <button type='submit' className='bg-purple-950 w-24 h-10 text-white rounded-md ml-32'>Submit</button>
            <button type='button' className='bg-red-950 w-24 h-10 text-white rounded-md ml-32'>Reset</button>
            </div>

            
        </form>
    </div>
  )
}

export default AddDevice