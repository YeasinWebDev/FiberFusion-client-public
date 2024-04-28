import React from 'react'
import Hero from '../components/Hero'
import CraftItems from '../components/CraftItems'
import Artisan from '../components/Artisan'
import Resources from '../components/Resources'

function Home() {
  return (
    <div>
      <Hero/>
      <CraftItems/>
      <Artisan/>
      <Resources/>
    </div>
  )
}

export default Home