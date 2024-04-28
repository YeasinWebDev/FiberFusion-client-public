import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import Product from './Product';
import { AuthContext } from '../provider/ContextProvider';
import { Fade } from 'react-awesome-reveal';

function CraftItems() {
  const [data, setdata] = useState([])
  const [loading, setloading] = useState(true)
  useEffect(() => {
    setloading(true)
    axios.get('http://localhost:8300/art-1')
      .then(res => setdata(res.data),setloading(false))
  }, [])
  const { dark } = useContext(AuthContext)
  return (
    <div className='px-32 flex flex-col justify-center relative'>
      <div className='mt-5 mb-20'>
       <h1 className={`flex items-center justify-center text-center whitespace-nowrap text-3xl md:text-4xl font-semibold ${dark ? 'text-white' : 'text-black'}`}><Fade cascade duration={200}> Crafty Creations</Fade></h1>
        {
          loading ?
            <div className="absolute text-black flex items-center w-full pr-10 justify-center">
              <span className="loading loading-spinner loading-lg"></span>
            </div>
            :
            <div className='w-full h-fit flex flex-wrap mt-10 gap-8 items-center justify-center'>
              {
                data.map((item, index) => {
                  return (
                    <Product key={index} i={index} data={item} />
                  )
                })
              }
            </div>
        }
      </div>
    </div>
  )
}

export default CraftItems