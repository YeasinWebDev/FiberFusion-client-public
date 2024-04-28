import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import Product from './Product';
import { AuthContext } from '../provider/ContextProvider';

function CraftItems() {
  const [data, setdata] = useState([])
  useEffect(() => {
    axios.get('http://localhost:8300/art-1')
      .then(res => setdata(res.data))
  }, [])
  const {dark} = useContext(AuthContext)
  return (
    <div className='px-32 flex flex-col justify-center'>
      <div className='mt-5 mb-20'>
        <h1 className={`flex items-center justify-center text-center whitespace-nowrap text-3xl md:text-4xl font-semibold ${dark ? 'text-white' : 'text-black'}`}>Crafty Creations</h1>
        <div className='w-full h-fit flex flex-wrap mt-10 gap-8 items-center justify-center'>
          {
            data.map((item, index) => {
              return (
                <Product key={index} i={index} data={item} />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default CraftItems