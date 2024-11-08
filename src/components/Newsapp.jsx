import React, { useState, useEffect } from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import Card from './Card';

const Newsapp = () => {
    const [search, setSearch] = useState("Bangladesh");
    const [newsData, setNewsData] = useState(null);
    const [currentTime, setCurrentTime] = useState(new Date());

    const API_KEY = "4f5540126cbb4761aa2ad206554234dd";

    const getData = async () => {
        try {
            const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);
            const jsonData = await response.json();
            setNewsData(jsonData.articles.slice(0, 10));
        } catch (error) {
            console.error("Error fetching news data:", error);
        }
    };

    const handleInput = (e) => {
        setSearch(e.target.value);
    };

    const handleCategory = (category) => {
        setSearch(category);
        getData();
    };

    useEffect(() => {
        getData(); 
    }, []);
    useEffect(() => {
        const timer = setInterval(() => setCurrentTime(new Date()), 60000); 
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
            <nav className="w-full bg-gradient-to-r from-blue-500 to-blue-800 text-white shadow-lg py-6">
                <div className="container mx-auto flex justify-between items-center px-6">
                    <div>
                        <h2 className="text-sm md:text-lg font-medium">
                            {`Time: ${currentTime.toLocaleTimeString()}`}
                        </h2>
                        <h2 className="text-xs md:text-sm">
                            {`Date: ${currentTime.toLocaleDateString()}`}
                        </h2>
                    </div>
                    <h1 className="font-bold text-3xl md:text-4xl">Daily Observer</h1>
                    <div className="flex items-center space-x-3">
                        <input
                            onChange={handleInput}
                            value={search}
                            type="text"
                            placeholder="Search..."
                            className="border border-white text-gray-700 px-3 py-2 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-300"
                        />
                        <button
                            onClick={getData}
                            className="flex items-center gap-2 px-4 py-2 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-700 hover:text-white transition-all"
                        >
                            <IoSearchOutline size={20} />
                            <span>Search</span>
                        </button>
                    </div>
                </div>
            </nav>

            <div className="text-center my-6 text-2xl font-semibold text-gray-800">Stay Updated with Daily Observer</div>

            <div className="flex justify-center gap-3 mb-8">
                {["Sports", "Politics", "Entertainment", "Health", "Business", "Technology"].map((category) => (
                    <button
                        key={category}
                        onClick={() => handleCategory(category.toLowerCase())}
                        className="px-5 py-2 text-sm md:text-base font-medium bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-full hover:from-blue-500 hover:to-blue-700 transition-all"
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="container mx-auto px-6 py-4">
                {newsData ? (
                    <Card data={newsData} />
                ) : (
                    <p className="text-center text-gray-600">You can search news from the search box.</p>
                )}
            </div>
        </div>
    );
};

export default Newsapp;
