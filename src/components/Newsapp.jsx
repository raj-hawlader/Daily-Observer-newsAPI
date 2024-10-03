import React, { useState } from 'react'
import { IoSearchOutline } from "react-icons/io5";

const Newsapp = () => {

    const [search, setsearch] = useState("Bangladesh");
    const API_key = "4f5540126cbb4761aa2ad206554234dd";
    const getData = async() => {
        const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_key}`);
        const jsonData = await response.json();
        console.log(jsonData);
    }

    const handleInput = (e) =>{
        console.log(e.target.value);
        setsearch(e.target.value);
    }

  return (
    <div>
        <nav className='absolute w-full top-0'>
            <div className='flex justify-between mx-11 my-5 '>
                <h2 className=' mt-4 mb-3'>
                    date:
                    <br />
                    Time: 
                </h2>
                <h1 className='font-mono text-5xl mt-4 mb-3'>Daily Observer</h1>
                <div className='px-3  mt-4 mb-3'>
                    <input onChange={handleInput}  type="text" placeholder="Search..."className='border border-gray-300 px-2 py-1 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent' />
                    <button onClick={getData} type="submit" className='absolute px-3 py-1'> <IoSearchOutline className='size-6'/> </button>
                </div>
            </div>
            <div>
                <ul className='flex items-center justify-evenly p-3'>
                    <a href="" className='border border-blue-400 px-3 py-1 rounded-[19px] shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-orange-300 hover:bg-orange-400'>Sports</a>
                    <a href="" className='border border-blue-400 px-3 py-1 rounded-[19px] shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-orange-300 hover:bg-orange-400'>Politics</a>
                    <a href="" className='border border-blue-400 px-3 py-1 rounded-[19px] shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-orange-300 hover:bg-orange-400'>Entertainment</a>
                    <a href="" className='border border-blue-400 px-3 py-1 rounded-[19px] shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-orange-300 hover:bg-orange-400'>Lifestyles</a>
                    <a href="" className='border border-blue-400 px-3 py-1 rounded-[19px] shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-orange-300 hover:bg-orange-400'>Health</a>
                    <a href="" className='border border-blue-400 px-3 py-1 rounded-[19px] shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-orange-300 hover:bg-orange-400'>Business</a>
                </ul>
            </div>
            <div className='mx-10 my-4'>
                <hr />
                <hr />
            </div>
            
        </nav>
    </div>
  )
}

export default Newsapp