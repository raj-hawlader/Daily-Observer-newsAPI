import React from 'react'
import { IoSearchOutline } from "react-icons/io5";

const Newsapp = () => {
  return (
    <div>
        <nav>
            <div className='flex justify-between mx-11 my-3'>
                <h2>date:
                    <br />
                    Time:
                </h2>
                <h1 className='font-mono'>Daily Observer</h1>
                <IoSearchOutline/>
            </div>
            <div className='mx-10 my-8'>
                <hr />
                <hr />
            </div>
            
        </nav>
    </div>
  )
}

export default Newsapp