import React from 'react'

const Login = () => {

    function onSubmitHandler (e){
        e.preventDefault();
        localStorage.setItem("hamta-login-token",JSON.stringify({user:"admin",pass:"admin"}))
    }

    return (
        <div className='w-screen flex justify-center items-center h-screen bg-blue-800'>
            <div className='flex flex-col bg-white rounded-xl items-center h-fit p-9'>
                Login
                <form onSubmit={onSubmitHandler} className='flex flex-col'>
                    <input type="text" className='my-2 py-2 px-4 rounded bg-slate-200' placeholder='admin' />
                    <input type="password" className='my-2 py-2 px-4 rounded bg-slate-200' placeholder='admin' />
                    <button type="submit" className='py-2 px-4 rounded-md text-white mt-6 bg-orange-500'>ثبت</button>
                </form>
                <div className='flex flex-col items-center'>
                    <p className='my-2'>or</p>
                    <button className='border bg-white px-4 text-center py-2 rounded w-full'>Countinue with Google</button>
                </div>
            </div>
        </div>
    )
}

export default Login