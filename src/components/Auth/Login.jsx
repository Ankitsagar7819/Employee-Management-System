import React, { useState } from 'react'

const Login = ({ handleLogin }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        handleLogin(email, password)
        setEmail("")
        setPassword("")
    }

    return (
        <div className='flex h-screen w-screen items-center justify-center bg-gray-100'>
            <div className='border-2 rounded-xl border-emerald-600 p-10 shadow-lg transition-all hover:shadow-2xl'>
                <form 
                    onSubmit={(e) => submitHandler(e)} 
                    className='flex flex-col items-center justify-center space-y-6'
                >
                    <div className='w-full'>
                        <label htmlFor="email" className='text-lg font-medium text-gray-700 mb-2 block'>
                            Email
                        </label>
                        <input
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className='w-full outline-none bg-transparent border-2 border-emerald-600 text-black text-lg py-2 px-6 rounded-full placeholder:text-gray-700 focus:ring-2 focus:ring-emerald-500 transition duration-300'
                            type="email"
                            placeholder='Enter your email'
                        />
                    </div>

                    <div className='w-full'>
                        <label htmlFor="password" className='text-lg font-medium text-gray-700 mb-2 block'>
                            Password
                        </label>
                        <input
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className='w-full outline-none bg-transparent border-2 border-emerald-600 text-black text-lg py-2 px-6 rounded-full mt-3 placeholder:text-gray-700 focus:ring-2 focus:ring-emerald-500 transition duration-300'
                            type="password"
                            placeholder='Enter password'
                        />
                    </div>

                    <button 
                        type="submit"
                        className='mt-7 text-white font-semibold bg-emerald-600 text-lg py-2 px-8 w-full rounded-full hover:bg-emerald-700 transition-all duration-300'
                    >
                        Log in
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login
