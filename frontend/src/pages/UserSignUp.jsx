import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const UserSignUp = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userData, setUserData] = useState({})

    const submitHandler = (e) => {
        e.preventDefault();
        setUserData({
            fullName: {
                firstName: firstName,
                lastName: lastName,
            },
            email: email,
            password: password
        })
        setFirstname('')
        setLastname('')
        setEmail('')
        setPassword('')
    }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
        <div>
            <img className='w-16 mb-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYQy-OIkA6In0fTvVwZADPmFFibjmszu2A0g&s" alt="" />
            <form onSubmit={submitHandler}>
                <h3 className='text-base font-medium mb-2'>What's Your Name?</h3>
                <div className='flex gap-4 mb-5'>
                    <input type="text" 
                    value={firstName} onChange={(e) => setFirstName(e.target.value)}
                    placeholder='Your Firstname' 
                    className='w-1/2 bg-[#eeeeee] rounded px-4 py-2 border text-base placeholder:text-base' required/>
                    <input type="text" 
                    value={lastName} onChange={(e) => setLastName(e.target.value)}
                    placeholder='Your Lastname'
                    className='w-1/2 bg-[#eeeeee] rounded px-4 py-2 border text-base placeholder:text-base' required/>
                </div>
                <h3 className='text-base font-medium mb-2'>What's Your Email?</h3>
                <input type="email" 
                value={email} onChange={(e) => setEmail(e.target.value)}
                placeholder='email@example.com' 
                className='w-full bg-[#eeeeee] mb-5 rounded px-4 py-2 border text-base placeholder:text-base' required/>
                <h3 className='text-base font-medium mb-2'>Enter Password</h3>
                <input type="password" 
                value={password} onChange={(e) => setPassword(e.target.value)}
                placeholder='Password' 
                className='w-full bg-[#eeeeee] mb-5 rounded px-4 py-2 border text-base placeholder:text-base' required/>
                <button className='w-full bg-[#111] text-[#fff] font-semibold mb-3 rounded px-4 py-2 text-lg'>Sign Up</button>
            </form>
            <p className='text-center'>Already have an account? <Link to='/login' className='text-blue-600 '>Login here</Link></p>
        </div>
        <div>
            <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy
            Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
        </div>
    </div>
  )
}

export default UserSignUp