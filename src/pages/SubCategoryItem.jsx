import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/ContextProvider';
import axios from 'axios';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';

function SubCategoryItem() {
  const { subCategoryName } = useContext(AuthContext);
  const [subcategoryData, setSubcategoryData] = useState(null);
  const { dark, user,setDetailsValue } = useContext(AuthContext)
  useEffect(() => {
    axios.get(`http://localhost:8300/subcategory?subCategory=${subCategoryName}`)
      .then(res => {
        setSubcategoryData(res.data);
        window.scrollTo(0, 0);
      })
      .catch(err => {
        console.log(err);
      })

  }, [subCategoryName]);

  return (
    <div>
      <h1 className='text-4xl font-semibold mb-5 text-[#B18B5E] flex items-center justify-center py-10'><Fade cascade duration={200}>{subCategoryName}</Fade></h1>

      <div className={`md:px-20 lg:justify-start justify-center flex flex-wrap gap-10  ${dark ? 'text-white' : 'text-black'}`}>
        {subcategoryData?.map(item => {
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
                    <button onClick={() => setDetailsValue(true)} className={`btn px-2 border-2 bg-transparent border-[#B18B5E] text-black hover:bg-[#B18B5E] hover:text-white  hover:border-[#B18B5E] ${dark ? 'text-white' : 'text-black'}`}>View Details</button>
                  </Link>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default SubCategoryItem;
