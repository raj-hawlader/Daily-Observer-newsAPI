import React, { useState, useEffect } from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import Card from './Card';

const Newsapp = () => {
    const [search, setSearch] = useState("Bangladesh");
    const [newsData, setNewsData] = useState(null);
    const [currentTime, setCurrentTime] = useState(new Date());

    const API_KEY = "4f5540126cbb4761aa2ad206554234dd";

    const getData = async () => {
        const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);
        const jsonData = await response.json();
        console.log(jsonData.articles);
        setNewsData(jsonData.articles.slice(0, 10));  // Limit results to 10 for simplicity
    };

    const handleInput = (e) => {
        setSearch(e.target.value);
    };

    const handleCategory = (category) => {
        setSearch(category);
        getData();
    };

    useEffect(() => {
        const timer = setInterval(() => setCurrentTime(new Date()), 60000); // Update time every minute
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="bg-gray-50 font-sans text-gray-800">
            <nav className="relative w-full bg-blue-100 shadow-md py-4">
                <div className="flex justify-between items-center mx-11">
                    <div>
                        <h2 className="text-lg">
                            {`Time: ${currentTime.toLocaleTimeString()}`}
                        </h2>
                        <h2 className="text-sm">
                            {`Date: ${currentTime.toLocaleDateString()}`}
                        </h2>
                    </div>
                    <h1 className="font-bold text-4xl">Daily Observer</h1>
                    <div className="flex items-center">
                        <input
                            onChange={handleInput}
                            value={search}
                            type="text"
                            placeholder="Search..."
                            className="border border-blue-400 px-3 py-2 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                        />
                        <button onClick={getData} type="submit" className="flex gap-2 items-center text-base font-semibold justify-center ml-2 px-3 py-2 bg-blue-500 text-white hover:bg-blue-800 rounded-lg">
                            <IoSearchOutline size={20}/>
                            <p>Search</p>
                        </button>
                    </div>
                </div>
            </nav>

            <div className="text-center my-5 font-semibold text-2xl">Stay Updated with Daily Observer</div>

            <div className="flex justify-center gap-4 mb-5">
                {["Sports", "Politics", "Entertainment", "Health", "Business", "Technology"].map((category) => (
                    <button
                        key={category}
                        onClick={() => handleCategory(category.toLowerCase())}
                        className="px-5 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="flex flex-wrap justify-center gap-6 p-5">
                {newsData ? <Card data={newsData} /> : <p className="text-center text-gray-600">Search any news.</p>}
            </div>
        </div>
    );
};

export default Newsapp;
