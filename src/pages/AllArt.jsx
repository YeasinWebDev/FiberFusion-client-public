import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../provider/ContextProvider'
import { Link } from 'react-router-dom'

function AllArt() {
  const [allData, setAllData] = useState([])
  const { dark } = useContext(AuthContext)
  useEffect(() => {
    axios.get('http://localhost:8300/art-2')
      .then(res => {
        setAllData(res.data)
      })
  }, [])

  console.log(allData)
  return (
    <div>
      <div className={`${dark ? 'text-white' : 'text-black'} h-full`}>
        <h1 className='text-4xl font-semibold mb-5 text-[#B18B5E] flex items-center justify-center py-10'>All Art And Craft</h1>
        <div className='md:px-20 md:justify-start justify-center flex flex-wrap gap-10'>
          {allData.map(item => {
            return (
              <div className='flex flex-col md:flex-row flex-wrap gap-10 mb-5 w-fit border-2 rounded-xl md:px-10 px-8 py-10  items-center '>
                <img src={item.image} className='w-60  rounded-xl' />
                <div className='md:border-l-2 pl-5 border-dashed'>
                  <h1 className='text-2xl font-semibold mb-2'>{item.item_name}</h1>
                  <h2 className='mb-2'>Subcategory: <span className='font-semibold'>{item.subcategory_name}</span></h2>
                  <h3>Rating: <span className='font-semibold'>{item.rating}</span></h3>
                  <h3 className='mb-2'>Price: <span className='font-semibold'>{item.price}$</span></h3>
                  <Link to={`/details2/${item._id}`}>
                    <button className={`btn px-2 border-2 bg-transparent border-[#B18B5E] text-black hover:bg-[#B18B5E] hover:text-white hover:bg-none hover:border-none ${dark ? 'text-white' : 'text-black'}`}>View Details</button>
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default AllArt