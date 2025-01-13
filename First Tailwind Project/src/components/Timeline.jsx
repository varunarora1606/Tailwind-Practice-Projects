import React from 'react'

function Timeline() {
  return (
    <div className="flex pb-3 mb-1 pt-2 border-b-2">
      <p className="w-[5.5rem] border-r-2 border-[#5FE5D7] pl-2 font-medium text-gray-700">00:00 AM</p>
      <div className="pl-2">
        <div className="text-xs text-gray-900 opacity-55 font-medium">Live</div>
        <p className="font-medium text-gray-700">UX Webinar</p>
      </div>
    </div>
  );
}

export default Timeline;
