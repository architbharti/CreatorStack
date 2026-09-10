import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'
import { Menu, X } from 'lucide-react'
import Sidebar from '../Components/Sidebar'
import { SignIn, useUser } from '@clerk/react'

const Workspace = () => {
  const navigate = useNavigate()
  const [sidebar, setSidebar] = useState(false)
  const { user } = useUser()

  return user ? (
    <div className="flex flex-col items-start justify-start h-screen bg-[#EBE9E1]">

      {/* Navbar */}
      <nav className="w-full px-6 sm:px-8 h-16 flex items-center justify-between bg-[#FFFDFC] border-b border-[#E6E0D8]">

        <img
          src={assets.logo}
          alt="logo"
          className="cursor-pointer w-32 sm:w-44"
          onClick={() => navigate('/')}
        />

        {sidebar ? (
          <X
            className="w-6 h-6 text-[#171717] sm:hidden cursor-pointer hover:text-[#E43D12] transition-colors"
            onClick={() => setSidebar(false)}
          />
        ) : (
          <Menu
            className="w-6 h-6 text-[#171717] sm:hidden cursor-pointer hover:text-[#E43D12] transition-colors"
            onClick={() => setSidebar(true)}
          />
        )}

      </nav>

      {/* Main content */}
      <div className="flex-1 w-full flex h-[calc(100vh-64px)]">

        <Sidebar
          sidebar={sidebar}
          setSidebar={setSidebar}
        />

        <div className="flex-1 bg-[#F5F1EA] overflow-hidden">
          <Outlet />
        </div>

      </div>

    </div>
  ) : (
    <div className="flex items-center justify-center h-screen bg-[#EBE9E1]">
      <SignIn />
    </div>
  )
}

export default Workspace
