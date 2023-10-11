import React from 'react'

const Layout = ({ children }) => {
    return (
        <div className='w-full flex flex-col h-screen bg-slate-700 text-white p-5'>
            <div className='flex justify-end my-5 gap-x-3'>
                <p>11:54</p>
                <p>1402/06/05</p>
                <button></button>
            </div>
            <div className='rounded-xl shadow-lg h-full bg-[#fafafa] flex  w-full'>
                <div className=' flex flex-col rounded-r-xl text-slate-950 [*>&]:p-3 '>
                    <button>abc</button>
                    <button>abc</button>
                    <button>abc</button>
                    <button>abc</button>
                </div>
                <div className='flex flex-col rounded-xl bg-slate-800 w-full'>
                    <div className='border-b p-6'>
                        <p>همتا شریف</p>
                    </div>
                    {
                        children
                    }
                </div>
            </div>
        </div>
    )
}

export default Layout