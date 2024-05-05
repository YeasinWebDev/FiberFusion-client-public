import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { MdOutlineArrowForward } from "react-icons/md";

import 'aos/dist/aos.css';
import AOS from 'aos';
import { Link } from 'react-router-dom';

export default function Hero() {
    useEffect(() => {
        AOS.init({ duration: 1000, offset: 200, });
    }, [])
    return (
        <div data-aos="fade-up" data-aos-easing="ease-in-sine" className=' w-full pt-10'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Navigation,Autoplay ]}
                className="mySwiper"
            >
                <SwiperSlide style={{ backgroundImage: 'url(https://i.ibb.co/rp5zv0D/bg-1.jpg)', width: '100%', height: '100%', backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                    <div className='flex items-center justify-center flex-col w-full py-[9rem] h-full backdrop-blur-[2px]'>
                        <h1 className='font-bold xl:text-7xl md:text-5xl  text-2xl my-6 text-white'>Exquisite Textile Creations</h1>
                        <p className='text-white lg:w-[30%] md:w-[50%] px-2 md:px-0 my-3 flex items-center justify-center text-center'>
                            Discover our curated textile artworks, showcasing intricate craftsmanship and vibrant creativity.
                        </p>
                        <Link to={'/all-Art'}><button className='md:px-8 md:py-5 p-4 bg-transparent border-2 text-white hover:bg-gradient-to-r from-[#B18B5E] to-[#856034] hover:text-white hover:border-[#B18B5E] rounded-lg flex gap-3 items-center text-xl group transition-all duration-300 mt-8'>
                            Our Art
                            <div className='transition-transform transform-gpu group-hover:rotate-[-45deg]'><MdOutlineArrowForward size={25} /></div>
                        </button></Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide style={{ backgroundImage: 'url(https://i.ibb.co/hyjcGSG/bg-2.jpg)', width: '100%', height: '100%', backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                    <div className='flex items-center justify-center flex-col w-full py-[9rem] h-full backdrop-blur-[2px]'>
                        <h1 className='font-bold xl:text-7xl md:text-5xl  text-2xl my-6 text-white text-center'>Artistry in Fabric</h1>
                        <p className='text-white lg:w-[30%] md:w-[50%] px-2 md:px-0 my-3 flex items-center justify-center text-center'>
                            Explore handcrafted masterpieces, from elegant quilts to delicate beadwork, celebrating the artistry of textiles.
                        </p>
                        <Link to={'/all-Art'}><button className='md:px-8 md:py-5 p-4 bg-transparent border-2 text-white hover:bg-gradient-to-r from-[#B18B5E] to-[#856034] hover:text-white hover:border-[#B18B5E]  rounded-lg flex gap-3 items-center text-xl group transition-all duration-300 mt-8'>
                            Our Art
                            <div className='transition-transform transform-gpu group-hover:rotate-[-45deg]'><MdOutlineArrowForward size={25} /></div>
                        </button></Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide style={{ backgroundImage: 'url(https://i.ibb.co/k6tD4Xc/zuzana-kacerova-Ur-NI482b-HWU-unsplash.jpg)', width: '100%', height: '100%', backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                    <div className='flex items-center justify-center flex-col w-full py-[9rem] h-full backdrop-blur-[2px]'>
                        <h1 className='font-bold xl:text-7xl md:text-5xl  text-2xl my-6 text-white'>Unleash Your Creativity</h1>
                        <p className='text-white lg:w-[30%] md:w-[50%] px-2 md:px-0 my-3 flex items-center justify-center text-center'>
                            Find inspiration and supplies for your textile arts journey, from DIY kits to expert resources
                        </p>
                        <Link to={'/all-Art'}><button className='md:px-8 md:py-5 p-4 bg-transparent border-2 text-white hover:bg-gradient-to-r from-[#B18B5E] to-[#856034] hover:text-white hover:border-[#B18B5E]  rounded-lg flex gap-3 items-center text-xl group transition-all duration-300 mt-8'>
                            Our Art
                            <div className='transition-transform transform-gpu group-hover:rotate-[-45deg]'><MdOutlineArrowForward size={25} /></div>
                        </button></Link>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
} 