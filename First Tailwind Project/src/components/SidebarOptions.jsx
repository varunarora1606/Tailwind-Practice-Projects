import React from 'react'

function SidebarOptions({content}) {
  return (
    <div className="mt-1 mb-2 p-2 hover:bg-[#E4EAEE] rounded-lg hover:text-[#002A5B] hover:opacity-100 text-gray-900 opacity-55 text-[0.90rem] cursor-pointer font-medium">
        <p>{content}</p>
    </div>
  )
}

export default SidebarOptions