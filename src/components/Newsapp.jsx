import React, { useState, useEffect } from 'react';
import { IoSearchOutline } from "react-icons/io5";
import Card from './Card';
import { FiDivideCircle } from 'react-icons/fi';

const Newsapp = () => {

    const [search, setSearch] = useState("Bangladesh");
    const [newsData, setNewsData] = useState(null);
    const [currentTime, setCurrentTime] = useState(new Date());

    const API_key = "4f5540126cbb4761aa2ad206554234dd";

    const getData = async () => {
        const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_key}`);
        const jsonData = await response.json();
        console.log(jsonData.articles);
        setNewsData(jsonData.articles);
    };
    const handleInput = (e) => {
        setSearch(e.target.value);
    };

    useEffect(() => {
        const timer = setInterval(() => setCurrentTime(new Date()), 60000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div>
            <nav className='relative w-full top-0'>
                <div className='flex justify-between mx-11 my-5'>

                    <h2 className='mt-4 mb-3'>
                        {`Time: ${currentTime.toLocaleTimeString()}`}
                        <br />
                        {`Date: ${currentTime.toLocaleDateString()}`}
                        
                    </h2>
                    <h1 className='font-mono text-5xl mt-4 mb-3'>Daily Observer</h1>
                    <div className='flex items-center mt-4 mb-3'>

                        <input
                            onChange={handleInput}
                            type="text"
                            placeholder="Search..."
                            className='border border-blue-400 px-2 py-1 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300'
                        />

                        <button onClick={getData} type="submit" className='ml-2 px-3 py-1 bg-blue-500 text-white rounded-lg'>
                            <IoSearchOutline className='size-6' />
                        </button>
                    </div>
                </div>

                <div>

                    <ul className='flex items-center justify-evenly p-3'>
                        <a href="#sports" className='border border-blue-400 px-3 py-1 rounded-[19px] shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-blue-300'>Sports</a>
                        <a href="#politics" className='border border-blue-400 px-3 py-1 rounded-[19px] shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-blue-300'>Politics</a>
                        <a href="#entertainment" className='border border-blue-400 px-3 py-1 rounded-[19px] shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-blue-300'>Entertainment</a>
                        <a href="#lifestyles" className='border border-blue-400 px-3 py-1 rounded-[19px] shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-blue-300'>Lifestyles</a>
                        <a href="#health" className='border border-blue-400 px-3 py-1 rounded-[19px] shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-blue-300'>Health</a>
                        <a href="#business" className='border border-blue-400 px-3 py-1 rounded-[19px] shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-blue-300'>Business</a>
                    </ul>
                </div>

                <div className='mx-10 my-4'>
                    <hr />
                    <hr />
                </div>

                <div className='flex'>
                   
                    {newsData ? <Card data={newsData} /> : <p>Search any news.</p>}
                </div>
            </nav>
        </div>
    );
};

export default Newsapp;
