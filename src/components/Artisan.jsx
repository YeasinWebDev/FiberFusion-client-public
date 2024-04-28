import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../provider/ContextProvider'
import axios from 'axios'

function Artisan() {
    const { dark } = useContext(AuthContext)
    const [data, setdata] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8300/artists')
            .then(res => {
                setdata(res.data)

            })
    }, [])

    return (
        <div className={`flex flex-col items-center justify-center ${dark ? "text-white" : "text-black"}`}>
            <h1 className='flex items-center justify-center text-center text-3xl md:text-4xl font-semibold'>Artisan Spotlight</h1>
            <div className='flex flex-wrap gap-5 justify-center'>
                {
                    data.map(item => {
                        return (
                            <div key={item._id} className="card w-96 h-fit rounded-xl shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img src={item.img} alt="data" className="rounded-xl" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">{item.name}</h2>
                                    <p>{item.bio}</p>
                                    <h2 className='pt-5 border-b-2 border-black border-dashed '>FeaturedWork</h2>
                                    <h2 className='font-semibold'><span>{item.featuredWork}</span></h2>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Artisan