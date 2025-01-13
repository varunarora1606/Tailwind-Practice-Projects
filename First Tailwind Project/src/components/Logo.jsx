import React from 'react'

function Logo({className}) {
  return (
    <span className={`py-2 px-3 bg-[#002A5B] rounded-xl ${className}`}>
        <span className="text-white">
            Webinar
        </span>
        <span className="text-[#3FDFD0]">
            .gg
        </span>
    </span>
  )
}

export default Logo