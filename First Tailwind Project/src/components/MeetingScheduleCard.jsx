import React from 'react'
import Timeline from './Timeline'

function MeetingScheduleCard() {
  return (
    <div className="md:w-8/12 rounded-xl shadow-md border border-gray-300 p-4 h-fit md:my-0 my-8 md:order-first">
        <div className="bg-gray-100 rounded-md px-2 py-1 font-medium text-gray-700 mb-3">
            Monday, 14 October 2024
        </div>
        <div className="overflow-y-auto h-56 no-scrollbar">
            <Timeline />
            <Timeline />
            <Timeline />
            <Timeline />
            <Timeline />
        </div>
    </div>
  )
}

export default MeetingScheduleCard