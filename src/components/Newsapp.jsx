import React, { useState } from 'react'
import { IoSearchOutline } from "react-icons/io5";
import Card from './Card';

const Newsapp = () => {

    const [search, setsearch] = useState("Bangladesh");
    const [newsData, setnewsData] = useState(null);

    const API_key = "4f5540126cbb4761aa2ad206554234dd";

    const getData = async() => {
        const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_key}`);
        const jsonData = await response.json();
        console.log(jsonData.articles);
        setnewsData(jsonData.articles);
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
                    <input onChange={handleInput}  type="text" placeholder="Search..."className='border border-blue-400 px-2 py-1 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300' />
                    <button onClick={getData} type="submit" className='absolute px-3 py-1'> <IoSearchOutline className='size-6'/> </button>
                </div>
            </div>
            <div>
                <ul className='flex items-center justify-evenly p-3'>
                    <a href="" className='border border-blue-400 px-3 py-1 rounded-[19px] shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-blue-300'>Sports</a>
                    <a href="" className='border border-blue-400 px-3 py-1 rounded-[19px] shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-blue-300'>Politics</a>
                    <a href="" className='border border-blue-400 px-3 py-1 rounded-[19px] shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-blue-300'>Entertainment</a>
                    <a href="" className='border border-blue-400 px-3 py-1 rounded-[19px] shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-blue-300'>Lifestyles</a>
                    <a href="" className='border border-blue-400 px-3 py-1 rounded-[19px] shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-blue-300'>Health</a>
                    <a href="" className='border border-blue-400 px-3 py-1 rounded-[19px] shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-blue-300'>Business</a>
                </ul>
            </div>
            <div className='mx-10 my-4'>
                <hr />
                <hr />
            </div>
            <Card data={newsData}/>
        </nav>
    </div>
  )
}

export default Newsapp