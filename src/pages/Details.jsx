import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import 'aos/dist/aos.css';
import AOS from 'aos';
import { Helmet } from "react-helmet";
import axios from 'axios';
import { AuthContext } from '../provider/ContextProvider';

function Details() {
    const { id } = useParams()
    const [details, setdetails] = useState({})
    const { dark } = useContext(AuthContext)

    useEffect(() => {
        axios.get(`http://localhost:8300/art-1/${id}`)
            .then(res => {
                setdetails(res.data)
            })
    }, [id])

    return (
        <div className={`flex flex-col gap-5 items-center justify-center py-10  ${dark ? 'text-white' : 'text-black'}`} key={details.id}>
            <Helmet>
                <title>Product-Details</title>
            </Helmet>
            <div className="img md:w-[70vh] px-2 md:px-0 rounded-xl flex items-center">
                <img className='rounded-xl' src={details.image} alt="" />
            </div>

            <div className='flex flex-col xl:mx-[32%]  p-6'>
                <h1 className='font-bold text-4xl'>{details.item_name}</h1>
                <h1 className='font-semibold text-lg py-2 border-b-2 border-dashed'>Category: <span className='text-sm text-green-600'>{details.subcategory_name}</span></h1>
                <p className='py-5 '>
                    <span className='font-semibold text-xl mr-2'> Description:</span> <br />
                    <span className='font-semibold  md:w-[50%] lg:w-[50%]'>{details.short_des}</span>
                </p>
                <div className='flex gap-4 mt-5'>
                    <div>
                        <h1 className='font-normal text-xl pb-3'>processing Time:</h1>
                        <h1 className='font-normal text-xl pb-3'>rating:</h1>
                        <h1 className='font-normal text-xl pb-3'>stock Status:</h1>
                        <h1 className='font-normal text-xl pb-3'>Price:</h1>
                    </div>
                    <div>
                        <h1 className='font-semibold text-xl pb-3'>"{details.processing_time}"</h1>
                        <h1 className='font-semibold text-xl pb-3'>"{details.rating}"</h1>
                        <h1 className='font-semibold text-xl pb-3'>"{details.stock_status}"</h1>
                        <h1 className='font-semibold text-xl pb-3'>"{details.price}" $</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details