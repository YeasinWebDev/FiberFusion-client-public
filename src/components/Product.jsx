import React, { useContext, useEffect } from 'react'
import 'aos/dist/aos.css';
import AOS from 'aos';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/ContextProvider';

function Product({ data, i }) {
    useEffect(() => {
        AOS.init({ duration: 500, offset: 200, });
    }, [])

    const { dark } = useContext(AuthContext)
    return (
        <div>
            <div data-aos="fade-up" data-aos-delay={i * 100} data-aos-anchor-placement="center-bottom" className="card md:w-96 w-80 shadow-xl border-2 p-6">
                <figure className="">
                    <img src={data.image} />
                </figure>
                <div className={`card-body ${dark ? 'text-white' : 'text-black'}`}>
                    <h2 className="card-title text-2xl " style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>{data.item_name}</h2>
                    
                    <p className='font-semibold text-md'>Category:  <span className='text-md text-[#169141]'>" {data.subcategory_name} "</span></p>
                    <p className='font-semibold text-sm'>Price:  <span className='text-sm'>${data.price}</span></p>
                    <div className="card-actions border-t-2 border-dashed py-4">
                        <Link to={`/details/${data._id}`}>
                            <button className={`btn border-2 bg-transparent border-[#B18B5E] text-black hover:bg-[#B18B5E] hover:text-white hover:bg-none hover:border-none ${dark ? 'text-white' : 'text-black'}`}>View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Product