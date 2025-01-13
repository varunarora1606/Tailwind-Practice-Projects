import React from 'react'

function ProfileCard() {
  return (
    <div className="w-48 bg-white -translate-y-10 sm:flex flex-col items-center shadow-md border border-gray-300 rounded-xl ml-8 h-fit hidden">
        <div className=" bg-cyan-400 h-24 w-24 mt-11 mb-6 bg-[url('https://i.pinimg.com/474x/52/a7/3c/52a73c2214efce3094efcb78693415b5.jpg')] bg-cover rounded-xl"></div>
        <b className="mb-2">Prabhleen Kaur</b>
        <p className="text-sm text-gray-900 opacity-55 font-medium">
            prabhleen@gmail.com
        </p>
        <p className="text-sm text-gray-900 opacity-55 font-medium">
            9876593210
        </p>
        <p className="text-sm text-gray-900 opacity-55 font-medium mt-2 mb-7">
            Delhii, India
        </p>
    </div>
  )
}

export default ProfileCard