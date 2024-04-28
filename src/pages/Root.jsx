import React, { useContext } from 'react'
import Nav from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import { AuthContext } from '../provider/ContextProvider'

function Root() {
  const { dark, setDark } = useContext(AuthContext)
  return (
    <div>
      <Nav />
      <div className={`${dark ? 'bg-[#28282A]  overflow-y-hidden min-h-screen' : 'bg-[#F8F5F0] min-h-screen'}`}>
        <Outlet />
      </div>
    </div>
  )
}

export default Root