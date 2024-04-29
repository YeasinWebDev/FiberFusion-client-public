import React, { useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from '../provider/ContextProvider';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Fade } from 'react-awesome-reveal';
import { Helmet } from "react-helmet";
function AddCraft() {

    const { user,dark } = useContext(AuthContext)
    console.log(user)

    const handleAddItem = (e) => {
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

            // art-2
     axios.post('https://a10-server-psi.vercel.app/art-2', data)
     .then(res => {
        if(res.data.insertedId){
            toast("Art Data Added successfully")
            form.reset()
        }
     })
     .catch(err => console.log(err))

    }

    return (
        <div>
            <Helmet>
                <title>Add Craft</title>
            </Helmet>
            <div className={`flex flex-col items-center justify-center py-20 ${dark ? 'text-white' : 'text-black'}`}>
                <h2 className='text-4xl font-semibold mb-5 text-[#B18B5E]'><Fade cascade duration={200}>Add New Craft Item</Fade></h2>
                <form onSubmit={handleAddItem} className='w-full justify-center gap-10 flex relative  flex-wrap'>
                    <div>
                        <input className=' border-2 bg-transparent mb-5 p-2 rounded-lg px-10 py-5' type="text" name='user_name' placeholder='Your Name' defaultValue={user.displayName} />
                        <br />
                        <input className=' border-2 bg-transparent mb-5 p-2 rounded-lg px-10 py-5' type="email" name='user_email' placeholder='Your Email' defaultValue={user.email}/>
                        <br />
                        <input className=' border-2 bg-transparent mb-5 p-2 rounded-lg px-10 py-5' type="text" name='image' placeholder='Image URL' />
                        <br />
                        <input className=' border-2 bg-transparent mb-5 p-2 rounded-lg px-10 py-5' type="text" name='item_name' placeholder='Item Name' />
                        <br />
                        <input className=' border-2 bg-transparent mb-5 p-2 rounded-lg px-10 py-5' type="text" name='subcategory_name' placeholder='Subcategory Name' />
                        <br />
                        <textarea className='border-2 bg-transparent mb-2 p-2 rounded-lg px-10 py-5' name='short_des' placeholder='Short Description' />
                        <br />
                    </div>
                    <div>
                        <input className=' border-2 bg-transparent mb-5 p-2 rounded-lg px-10 py-5' type="text" name='price' placeholder='Price' />
                        <br />
                        <input className='border-2 bg-transparent mb-2 p-2 rounded-lg px-10 py-5' type="text" name='rating' placeholder='Rating' />
                        <br />
                        <input className=' border-2 bg-transparent mb-5 p-2 rounded-lg px-10 py-5' type="text" name='processing_time' placeholder='Processing Time' />
                        <br />
                        <div className="mb-2 flex items-center gap-3">
                            <label className={`block  text-sm font-bold mb-2 ${dark? 'text-white': 'text-gray-700'}`} htmlFor="customization">
                                Customization:
                            </label>
                            <select className='border-2 bg-transparent mb-2 p-2 rounded-lg px-10 py-5' name='customization'>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>
                        <br />

                        <div className='mb-2 flex items-center gap-3'>
                            <label className={`block  text-sm font-bold mb-2 ${dark? 'text-white': 'text-gray-700'}`} htmlFor="stock_status">
                                Stock Status:
                            </label>
                            <select className='border-2 bg-transparent mb-2 p-2 rounded-lg px-10 py-5' name='stock_status'>
                                <option value="In stock">In stock</option>
                                <option value="Made to Order">Made to Order</option>
                            </select>
                        </div>
                    </div>

                    <input className=' border-2 px-6 py-3 bg-transparent rounded-xl absolute bottom-[-70px]' type="submit" value="Add" />
                </form>
            </div>
        </div>
    );
}

export default AddCraft;
