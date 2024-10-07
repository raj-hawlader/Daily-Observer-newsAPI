import React from 'react'

const Card = ({data}) => {
    console.log(data)
  return (
    <div className='flex flex-wrap justify-start'>
        {data.map((curItem,index)=>(
            <div key={index} className='w-[15rem] h-[22rem] m-[.93rem] bg-slate-200 rounded-lg shadow-xl'>
                {curItem.urlToImage ? (<img src={curItem.urlToImage} alt={curItem.urlToImage} className="w-full h-[8rem] object-cover"/>):
                ( <div className='w-full h-[8rem] bg-gray-300 flex items-center justify-center'>
                    <p>No image available.</p>
                </div> )}
                <div className='p-2'>
                    <h3 className="font-bold text-lg mb-1">{`${curItem.title.slice(0,80)}`}</h3>
                    <p className='text-sm mb-2'>{curItem.description ? `${curItem.description.slice(0, 80)}...` 
                    : ( <p>No description available.</p> )}</p>
                    <a href={curItem.url} target="_blank" className='text-blue-600 underline'>Read more...</a>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Card