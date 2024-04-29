import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../provider/ContextProvider'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Fade } from 'react-awesome-reveal'

function SubCategory() {
  const { dark, setSubCategoryName } = useContext(AuthContext)
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get('https://a10-server-psi.vercel.app/art-1')
      .then(res => setData(res.data))
  }, [])
  return (
    <div>
      <h1 className={`flex items-center justify-center text-center whitespace-nowrap text-3xl md:text-4xl font-semibold py-10 ${dark ? 'text-white' : 'text-black'}`}>
      <Fade cascade duration={200}>SubCategory</Fade>
      </h1>
      <div className='flex flex-wrap gap-10 justify-center items-center mx-20 py-10'>
        {
          data.map(item => {
            return (
              <Link to={`/subCategoryItem/${item.subcategory_name}`}>
                <div className="relative md:w-96 w-80 image-full cursor-pointer">
                  <figure><img className='brightness-75 rounded-2xl' src={item.image} alt="dataimg" /></figure>
                  <div className="card-body flex items-center justify-center absolute z-10 top-0 text-white my-auto">
                    <h2 className="text-2xl font-semibold pt-10">{item.subcategory_name}</h2>
                    <p className='text-center text-sm'>{item.short_des}</p>
                  </div>
                </div>
              </Link>
            )
          })
        }
      </div>
    </div>
  )
}

export default SubCategory