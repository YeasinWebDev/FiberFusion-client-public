import React from 'react'
import { Link } from 'react-router-dom'

function ErrorPage() {
  return (
    <div className='flex flex-col items-center justify-center gap-6 h-screen'>
        <h1 className='text-4xl font-semibold'>404 Page Not Found</h1>
        <Link to={'/'}><button className='p-3 border-green-600 border-2 cursor-pointer rounded-xl hover:text-black hover:bg-green-600'>Back to Home</button></Link>
    </div>
  )
}

export default ErrorPage