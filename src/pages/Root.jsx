import React, { useContext, useEffect, useState } from 'react'
import Nav from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import { AuthContext } from '../provider/ContextProvider'
import Footer from '../components/Footer'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

function Root() {
  const { dark } = useContext(AuthContext)
  const [isLoaded, setIsLoaded] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline()
    tl.from('.text span', { y: '-100', duration: 0.5, delay: 0.3, stagger: 0.3, ease:"power3" })
    tl.to('.text', { y: '-100', duration: 0.5 , delay: 0.3, ease: 'power4'})
    tl.to('.loader', { y: '-100%', duration: 0.3, delay: 0.1, ease: 'power4'})
    tl.to('.loader', { display:'none', delay: -0.5},'s')
    tl.to('.main',{display:'block', delay: -0.5},'s')

    tl.eventCallback('onComplete', () => {
      setIsLoaded(true);
    });

  })

  useEffect(() => {
    if (isLoaded) {
      setIsLoaded(false); 
    }
  }, [isLoaded]);
  return (
    <div className=''>
      <div className="loader  z-10 w-full h-screen flex items-center justify-center bg-[#171212] text-white ">
        <div className='overflow-hidden'>
          <h1 className='text inline-block text-2xl overflow-hidden'>
            <span className='inline-block'>F</span>
            <span className='inline-block'>i</span>
            <span className='inline-block'>b</span>
            <span className='inline-block'>e</span>
            <span className='inline-block'>r</span>
            <span className='inline-block'>F</span>
            <span className='inline-block'>u</span>
            <span className='inline-block'>s</span>
            <span className='inline-block'>i</span>
            <span className='inline-block'>o</span>
            <span className='inline-block'>n</span>

          </h1>
        </div>
      </div>
      <div className='main bg-[#F8F5F0] hidden'>
        <Nav  key={isLoaded}/>
        <div className={`${dark ? 'bg-[#171212]  overflow-y-hidden min-h-screen' : 'bg-[#F8F5F0] min-h-screen'} pt-16`}>
          <Outlet key={isLoaded} />
        </div>
        <Footer />
      </div>
    </div >
  )
}

export default Root