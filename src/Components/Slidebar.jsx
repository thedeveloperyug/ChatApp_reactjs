import React from 'react'
import Navbar from './Navbar'
import Search from './Search'
import Chats from './Chats'


const Slidebar = () => {
    return (
        <>
            <div className=' w-3/6 border-r-2  border-gray-600 bg-slate-700' >
                <Navbar />
                <div>
                    <Search />
                </div>
                <div>
                <Chats/>
                </div>
            </div>

        </>
    )
}

export default Slidebar
