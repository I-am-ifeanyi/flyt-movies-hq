import React from 'react'
import  {Link} from "react-router-dom"

const ErrorPage = () => {
  return (
    <div className='max-w-[50%] flex flex-col gap-3 m-auto items-center'>
        <h1 className='text-8xl p-2 bg-clip-text text-transparent font-extrabold bg-gradient-to-r from-purple-500 to-pink-500'>Oops!</h1>
        <p className='font-bold'>404 - PAGE NOT FOUND</p>
        <p>The page you are looking for is currently unavailable</p>
        <p>Either you entered the wrong domain or the page has been changed or temporarily removed</p>
        <button className='border p-1 rounded bg-[#1f2c3a] text-white'><Link to="/">Go to Home Page</Link></button>
    </div>
  )
}

export default ErrorPage
