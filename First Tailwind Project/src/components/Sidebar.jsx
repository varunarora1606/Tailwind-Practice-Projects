import React from 'react'
import SidebarOptions from './SidebarOptions'
import Logo from './Logo'

function Sidebar() {
  return (
    <div className="bg-white w-64 min-h-screen  py-6 px-4 fixed lg:static -translate-x-full lg:translate-x-0 shadow-md border border-gray-300">
        <div className="flex justify-between items-center mb-8">
          <Logo className="text-xs" />
          <div className="h-8 w-8 bg-[url('https://i.pinimg.com/474x/52/a7/3c/52a73c2214efce3094efcb78693415b5.jpg')] rounded-lg bg-cover"></div>
        </div>
        <SidebarOptions content={"Home"} />
        <SidebarOptions content={"Webinars"} />
        <SidebarOptions content={"Billing"} />
        <SidebarOptions content={"User Management"} />
        <SidebarOptions content={"Settings"} />
      </div>
  )
}

export default Sidebar