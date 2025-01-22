import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CaptainLogin = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [captainData, setCaptainData] = useState({})

    const submitHandler = (e) => {
        e.preventDefault();
        setCaptainData({
            email: email,
            password: password
        })
        setEmail('')
        setPassword('')
    }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
        <div>
            <img className='w-20 mb-3' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" />
            <form onSubmit={submitHandler}>
                <h3 className='text-lg font-medium mb-2'>What's Your Email?</h3>
                <input type="email" 
                value={email} onChange={(e) => setEmail(e.target.value)} 
                placeholder='email@example.com' 
                className='w-full bg-[#eeeeee] mb-7 rounded px-4 py-2 border text-lg placeholder:text-base' required/>
                <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
                <input type="password" 
                value={password} onChange={(e) => setPassword(e.target.value)} 
                placeholder='Password' 
                className='w-full bg-[#eeeeee] mb-7 rounded px-4 py-2 border text-lg placeholder:text-base' required/>
                <button className='w-full bg-[#111] text-[#fff] font-semibold mb-3 rounded px-4 py-2 text-lg'>Login</button>
            </form>
            <p className='text-center'>Join a fleet? <Link to='/captain-signup' className='text-blue-600 '>Register as a Captain</Link></p>
        </div>
        <div>
            <Link to='/login' className='w-full bg-[#d5622d] flex items-center justify-center text-[#fff] font-semibold mb-5 rounded px-4 py-2 text-lg'>Sign in as a User</Link>
        </div>
    </div>
  )
}

export default CaptainLogin