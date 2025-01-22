import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const UserLogin = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userData, setUserData] = useState({})

    const submitHandler = (e) => {
        e.preventDefault();
        setUserData({
            email: email,
            password: password
        })
        console.log(userData)
        setEmail('')
        setPassword('')
    }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
        <div>
            <img className='w-16 mb-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYQy-OIkA6In0fTvVwZADPmFFibjmszu2A0g&s" alt="" />
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
            <p className='text-center'>New here? <Link to='/signup' className='text-blue-600 '>Create new account</Link></p>
        </div>
        <div>
            <Link to='/captain-login' className='w-full bg-[#10b461] flex items-center justify-center text-[#fff] font-semibold mb-5 rounded px-4 py-2 text-lg'>Sign in as a Captain</Link>
        </div>
    </div>
  )
}

export default UserLogin