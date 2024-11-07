import React from 'react';

const Card = ({ data }) => {
    console.log(data);

    return (
        <div className="flex flex-wrap justify-center gap-10 p-4">
            {data.map((curItem, index) => {
                if (!curItem.urlToImage) return null;
                
                return (
                    <div key={index} className="w-80 bg-white shadow-lg rounded-lg border border-gray-200 overflow-hidden">
                        <img src={curItem.urlToImage} alt="News Thumbnail" className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <a
                                href={curItem.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-lg font-semibold text-blue-600 hover:underline"
                            >
                                {curItem.title}
                            </a>
                            <p className="mt-2 text-gray-600">{curItem.description}</p>
                            <button
                                onClick={() => window.open(curItem.url)}
                                className="mt-3 px-4 py-2 bg-blue-500 text-white text-sm rounded hover:bg-blue-600"
                            >
                                Read More
                            </button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Card;