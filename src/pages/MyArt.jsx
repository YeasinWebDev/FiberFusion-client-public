import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../provider/ContextProvider'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import AOS from 'aos';
import { toast } from 'react-toastify'
import { Fade } from 'react-awesome-reveal'
import { Helmet } from "react-helmet";

function AllArt() {
  const [allData, setAllData] = useState([])
  const [itemData, setItemData] = useState([])
  const [popup, setPopup] = useState(false)
  const { dark, user } = useContext(AuthContext)
  const [load, setLoad] = useState(false)
  const [filter, setFilter] = useState('')
  const [loading, setloading] = useState(true)


  useEffect(() => {
    fetchData()
    AOS.init({ duration: 500, offset: 200, });
  }, [user.email, load, filter]);

  const fetchData = () => {
    setloading(true)
    let url = `https://a10-server-psi.vercel.app/art-2?email=${user.email}`
    if (filter) {
      url = `https://a10-server-psi.vercel.app/art-2?email=${user.email}&filter=${filter}`
    }
    axios.get(url)
      .then(res => {
        setAllData(res.data);
        setloading(false)
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setloading(false)
      });
  }


  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this Art!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`https://a10-server-psi.vercel.app/art-2/${id}`)
          .then(res => {
            setLoad(!load)
          })

        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });

  }


  const updateCarftData = (id) => {
    axios.get(`https://a10-server-psi.vercel.app/art-2/${id}`)
      .then(res => {
        setItemData(res.data);
        setPopup(true)
      })
  }

  const handleUpdateItem = (e) => {
    e.preventDefault()
    const form = e.target
    const user_name = form.user_name.value
    const user_email = form.user_email.value
    const image = form.image.value
    const item_name = form.item_name.value
    const subcategory_name = form.subcategory_name.value
    const short_des = form.short_des.value
    const price = form.price.value
    const rating = form.rating.value
    const processing_time = form.processing_time.value
    const customization = form.customization.value;
    const stock_status = form.stock_status.value;

    const data = {
      user_name,
      user_email,
      image,
      item_name,
      subcategory_name,
      short_des,
      price,
      rating,
      processing_time,
      customization,
      stock_status
    }

    axios.put(`https://a10-server-psi.vercel.app/art-2/${itemData._id}`, data)
      .then(res => {
        toast('Updated Successfully')
        setLoad(!load)
        setPopup(false)
        setloading(false)
      })
  }

  return (
    <div className='relative min-h-screen w-full '>
      <Helmet>
        <title>My Art</title>
      </Helmet>
      <div className={`${dark ? 'text-white' : 'text-black'} `}>
        <h1 className='text-4xl font-semibold mb-5 text-[#B18B5E] flex items-center justify-center py-10'><Fade cascade duration={200}>My Art And Craft</Fade></h1>
        <div className='flex items-center justify-center flex-col'>
          <h1>Filter Craft by Customization</h1>
          <div className="mb-2 flex items-center gap-3 my-5">
            <select className='border-2 bg-transparent mb-2 p-2 rounded-lg px-10 ' name='customization' value={filter} onChange={e => setFilter(e.target.value)}>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>
        {
          loading ?
            <div className="container flex items-center justify-center">
              <span className="loading loading-spinner loading-lg"></span>
            </div>
            :
            <div className='md:px-20 lg:justify-start justify-center flex flex-wrap gap-10 '>
              {allData.map(item => {
                return (
                  <div className='flex flex-col lg:flex-row flex-wrap gap-10 mb-5 w-fit border-2 rounded-xl md:px-10 px-8 py-10  items-center '>
                    <img src={item.image} className='w-60  rounded-xl' />
                    <div className='md:border-l-2 pl-5 border-dashed'>
                      <h1 className='text-2xl font-semibold mb-2'>{item.item_name}</h1>
                      <h2 className='mb-2'>Subcategory: <span className='font-semibold'>{item.subcategory_name}</span></h2>
                      <h3>Rating: <span className='font-semibold'>{item.rating}</span></h3>
                      <h3 className='mb-2'>Price: <span className='font-semibold'>{item.price}$</span></h3>
                      <div className='flex gap-3 flex-wrap'>
                        <Link to={`/details2/${item._id}`}>
                          <button className={`btn px-2 border-2 bg-transparent border-[#B18B5E] text-black hover:bg-[#B18B5E] hover:text-white  hover:border-[#B18B5E] ${dark ? 'text-white' : 'text-black'}`}>View Details</button>
                        </Link>
                        <div onClick={() => updateCarftData(item._id)}>
                          <button className={`btn px-2 border-2 bg-transparent border-[#B18B5E] text-black hover:bg-[#B18B5E] hover:text-white  hover:border-[#B18B5E] ${dark ? 'text-white' : 'text-black'}`}>Update</button>
                        </div>
                        <div onClick={() => handleDelete(item._id)}>
                          <button className={`btn px-2 border-2 bg-transparent border-red-600 text-black hover:bg-red-600 hover:text-white hover:border-red-600  ${dark ? 'text-white' : 'text-black'}`}>Delete</button>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
        }
      </div>

      {/* update data */}
      {
        popup &&
        <div data-aos="fade-down" data-aos-anchor-placement="center-bottom" className='fixed top-0 left-0 w-full h-full flex items-center justify-center  bg-gray-900 bg-opacity-50 '>
          <form onSubmit={handleUpdateItem} className={`w-fit justify-center gap-10 flex relative  flex-wrap px-10 py-10 rounded-xl  ${dark ? 'text-white bg-[#28282A]' : 'text-black bg-[#F8F5F0]'}`}>
            <div>
              <input className=' border-2 bg-transparent mb-5 p-2 rounded-lg px-10 py-5' type="text" name='user_name' placeholder='Your Name' defaultValue={itemData.user_name} />
              <br />
              <input className=' border-2 bg-transparent mb-5 p-2 rounded-lg px-10 py-5' type="email" name='user_email' placeholder='Your Email' defaultValue={itemData.user_email} />
              <br />
              <input className=' border-2 bg-transparent mb-5 p-2 rounded-lg px-10 py-5' type="text" name='image' placeholder='Image URL' defaultValue={itemData.image} />
              <br />
              <input className=' border-2 bg-transparent mb-5 p-2 rounded-lg px-10 py-5' type="text" name='item_name' placeholder='Item Name' defaultValue={itemData.item_name} />
              <br />
              <input className=' border-2 bg-transparent mb-5 p-2 rounded-lg px-10 py-5' type="text" name='subcategory_name' placeholder='Subcategory Name' defaultValue={itemData.subcategory_name} />
              <br />
              <textarea className='border-2 bg-transparent mb-2 p-2 rounded-lg px-10 py-5' name='short_des' placeholder='Short Description' defaultValue={itemData.short_des} />
              <br />
            </div>
            <div>
              <input className=' border-2 bg-transparent mb-5 p-2 rounded-lg px-10 py-5' type="text" name='price' placeholder='Price' defaultValue={itemData.price} />
              <br />
              <input className='border-2 bg-transparent mb-2 p-2 rounded-lg px-10 py-5' type="text" name='rating' placeholder='Rating' defaultValue={itemData.rating} />
              <br />
              <input className=' border-2 bg-transparent mb-5 p-2 rounded-lg px-10 py-5' type="text" name='processing_time' placeholder='Processing Time' defaultValue={itemData.processing_time} />
              <br />
              <div className="mb-2 flex items-center gap-3">
                <label className={`block  text-sm font-bold mb-2 ${dark ? 'text-white' : 'text-gray-700'}`} htmlFor="customization">
                  Customization:
                </label>
                <select className='border-2 bg-transparent mb-2 p-2 rounded-lg px-10 py-5' name='customization' defaultValue={itemData.customization}>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              <br />

              <div className='mb-2 flex items-center gap-3'>
                <label className={`block  text-sm font-bold mb-2 ${dark ? 'text-white' : 'text-gray-700'}`} htmlFor="stock_status" >
                  Stock Status:
                </label>
                <select className='border-2 bg-transparent mb-2 p-2 rounded-lg px-10 py-5' name='stock_status' defaultValue={itemData.stock_status}>
                  <option value="In stock">In stock</option>
                  <option value="Made to Order">Made to Order</option>
                </select>
              </div>
            </div>

            <input className=' border-2 px-6 py-3 bg-transparent rounded-xl absolute bottom-[-70px]' type="submit" value="Add" />
          </form>
        </div>
      }
    </div>
  )
}

export default AllArt