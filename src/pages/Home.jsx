import React from 'react'
import Hero from '../components/Hero'
import CraftItems from '../components/CraftItems'
import Artisan from '../components/Artisan'
import Resources from '../components/Resources'
import SubCategory from '../components/SubCategory'
import { Helmet } from "react-helmet";

function Home() {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Hero/>
      <CraftItems/>
      <Artisan/>
      <Resources/>
      <SubCategory/>
    </div>
  )
}

export default Home