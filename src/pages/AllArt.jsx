import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../provider/ContextProvider'
import { Link } from 'react-router-dom'

function AllArt() {
  const [allData, setAllData] = useState([])
  const { dark } = useContext(AuthContext)
  const [loading, setloading] = useState(true)
  useEffect(() => {
    setloading(true)
    axios.get('http://localhost:8300/art-2?all=allData}')
      .then(res => {
        setAllData(res.data)
        setloading(false)
      })
  }, [])

  return (
    <div>
      <div className={`${dark ? 'text-white' : 'text-black'} min-h-screen relative`}>
        <h1 className='text-4xl font-semibold mb-5 text-[#B18B5E] flex items-center justify-center py-10'>All Art And Craft</h1>
        <div className="md:px-20 lg:justify-start justify-center flex flex-wrap gap-10">
          <table className="table">
            {/* head */}
            <thead>
              <tr className={`${dark ? "text-white" : "text-black"} text-lg `}>
                <th>Img</th>
                <th>Name</th>
                <th>Price</th>
                <th>rating</th>
                <th></th>
              </tr>
            </thead>
            {
              loading ?
                <div className=" flex  justify-center absolute w-full mt-10">
                  <span className="loading loading-spinner loading-lg"></span>
                </div>
                :
                <tbody>
                  {allData.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td className='w-48'>
                          <img className='rounded-xl' src={item.image} alt="" />
                        </td>
                        <td className='text-xl font-semibold'>{item.item_name}</td>
                        <td className='text-xl font-semibold'>{item.price}$</td>
                        <td className='text-xl font-semibold'>{item.rating}</td>
                        <td>
                          <Link to={`/details2/${item._id}`}>
                            <button className={`btn px-2 border-2 bg-transparent border-[#B18B5E] text-black hover:bg-[#B18B5E] hover:text-white hover:bg-none hover:border-none ${dark ? 'text-white' : 'text-black'}`}>View Details</button>
                          </Link>
                        </td>
                      </tr>
                    )
                  })}

                </tbody>
            }

          </table>
        </div>
      </div>
    </div>
  )
}

export default AllArt



{/* <div className='md:px-20 lg:justify-start justify-center flex flex-wrap gap-10'>
{allData.map(item => {
  return (
    <div key={item._id} className='flex flex-col lg:flex-row flex-wrap gap-10 mb-5  border-2 rounded-xl md:px-10 px-8 py-10 justify-center items-center'>
      <img src={item.image} className='w-60  rounded-xl' />
      <div className='lg:border-l-2 pl-5 border-dashed'>
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
</div> */}