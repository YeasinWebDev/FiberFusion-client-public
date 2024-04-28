import React, { useContext } from 'react'
import { AuthContext } from '../provider/ContextProvider'
import { Fade } from 'react-awesome-reveal'

function Resources() {
    const { dark } = useContext(AuthContext)
    return (
        <div className={`flex flex-col items-center w-full justify-center py-20 ${dark ? "text-white" : "text-black"}`}>
            <h1 className='flex items-center justify-center text-center text-3xl md:text-4xl font-semibold'><Fade cascade duration={200}>Textile Resources Hub</Fade></h1>
            <div className='flex flex-col lg:w-[60%] w-full items-center mt-10 border-2 md:p-10 p-5 rounded-xl '>
                <h1 className='md:text-3xl text-2xl font-semibold'>Article</h1>
                <h2 className='md:text-2xl text-xl font-semibold my-4'> "Exploring Shibori Techniques"</h2>
                <h2 className='md:text-xl text-lg font-semibold'>Description </h2>
                <h2 className='w-full px-5 md:px-0 py-5  text-center'>
                    Dive into the ancient Japanese art of Shibori, a dyeing technique that involves intricate patterns created through various methods of resist dyeing. Learn about different Shibori styles, tools, and step-by-step instructions to create your own Shibori masterpieces.
                </h2>
                <a href="https://www.architecturaldigest.com/story/what-is-shibori" target='_blank' className='md:text-xl text-lg font-semibold underline'>Read Article</a>
            </div>
            <div className='flex flex-col lg:w-[60%] w-full items-center mt-10 border-2 md:p-10 p-5 rounded-xl'>
                <h1 className='md:text-3xl text-2xl font-semibold'>Tutorial</h1>
                <h2 className='md:text-2xl text-xl font-semibold my-4'> "Introduction to Embroidery Stitching"</h2>
                <h2 className='md:text-xl text-lg font-semibold'>Description </h2>
                <h2 className=' w-full px-5 md:px-0 py-5  text-center'>
                Discover the timeless art of embroidery with our beginner-friendly tutorial. Learn essential embroidery stitches, from the basic running stitch to more advanced techniques like satin stitch and French knots. Follow along with detailed instructions and practice exercises to enhance your embroidery skills.
                </h2>
                <a href="https://www.youtube.com/watch?v=JGa4PoQB408" target='_blank' className='md:text-xl text-lg font-semibold underline'>View Tutorial</a>
            </div>
        </div>
    )
}

export default Resources