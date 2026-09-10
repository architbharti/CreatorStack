import React from 'react'
import { useClerk, useUser, Show } from '@clerk/react'
import {
  Eraser,
  FileText,
  Hash,
  House,
  Image as ImageIcon,
  LogOut,
  Scissors,
  SquarePen,
  Users,
} from 'lucide-react'
import { NavLink } from 'react-router-dom'

const navItems = [
  {
    to: '/ai',
    label: 'Dashboard',
    Icon: House
  },
  {
    to: '/ai/article-studio',
    label: 'Article Studio',
    Icon: SquarePen
  },
  {
    to: '/ai/blog-titles',
    label: 'Blog Titles',
    Icon: Hash
  },
  {
    to: '/ai/image-studio',
    label: 'Image Studio',
    Icon: ImageIcon
  },
  {
    to: '/ai/remove-background',
    label: 'Remove Background',
    Icon: Eraser
  },
  {
    to: '/ai/object-eraser',
    label: 'Object Eraser',
    Icon: Scissors
  },
  {
    to: '/ai/resume-insights',
    label: 'Resume Insights',
    Icon: FileText
  },
  {
    to: '/ai/community',
    label: 'Community',
    Icon: Users
  }
]

const Sidebar = ({ sidebar, setSidebar }) => {
  const { user } = useUser()
  const { signOut, openUserProfile } = useClerk()

  return (
    <div
      className={`w-60 bg-[#FFFDFC] border-r border-[#E6E0D8] flex flex-col justify-between items-center
      max-sm:absolute top-16 bottom-0
      ${sidebar ? 'translate-x-0' : 'max-sm:-translate-x-full'}
      transition-all duration-300 ease-in-out z-40`}
    >

      {/* Top Section */}
      <div className="my-7 w-full">

        {/* User Avatar */}
        <img
          src={user?.imageUrl}
          alt="avatar"
          className="w-13 h-13 object-cover rounded-full mx-auto border-2 border-[#E6E0D8]"
        />

        {/* User Name */}
        <h1 className="mt-2 text-center text-[#171717] font-semibold">
          {user?.fullName}
        </h1>

        {/* Navigation */}
        <div className="px-4 mt-7 text-sm font-medium">

          {navItems.map(({ to, label, Icon }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/ai'}
              onClick={() => setSidebar(false)}
              className={({ isActive }) =>
                `relative px-3 py-2.5 mb-1.5 flex items-center gap-3 rounded-md transition-all duration-200
                ${
                  isActive
                    ? 'bg-[#FFF0EA] text-[#E43D12]'
                    : 'text-[#5F5A55] hover:bg-[#F5F1EA] hover:text-[#171717]'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {/* Active indicator */}
                  {isActive && (
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 rounded-r-full bg-[#E43D12]" />
                  )}

                  <Icon
                    className={`w-4.5 h-4.5 shrink-0 ${
                      isActive
                        ? 'text-[#E43D12]'
                        : 'text-[#77716B]'
                    }`}
                  />

                  <span>{label}</span>
                </>
              )}
            </NavLink>
          ))}

        </div>
      </div>


      {/* Bottom User Section */}
      <div className="w-full border-t border-[#E6E0D8] p-4 px-5 flex items-center justify-between bg-[#FFFDFC]">

        {/* Profile */}
        <div
          onClick={() => openUserProfile()}
          className="flex gap-2.5 items-center cursor-pointer min-w-0"
        >

          <img
            src={user?.imageUrl}
            alt="avatar"
            className="w-9 h-9 object-cover rounded-full border border-[#E6E0D8]"
          />

          <div className="min-w-0">

            <h1 className="text-sm font-semibold text-[#171717] truncate">
              {user?.fullName}
            </h1>

            <p className="text-xs text-[#6B6863]">
              <Show
                when={{ plan: 'premium' }}
                fallback="Free"
              >
                Premium
              </Show>{' '}
              Plan
            </p>

          </div>

        </div>


        {/* Sign Out */}
        <LogOut
          onClick={() => signOut()}
          className="w-5 h-5 text-[#8A857F] hover:text-[#E43D12] transition cursor-pointer shrink-0"
        />

      </div>

    </div>
  )
}

export default Sidebar
