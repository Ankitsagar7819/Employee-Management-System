import React from 'react'

const FailedTask = ({ data }) => {
  return (
    <div className='flex-shrink-0 h-15 w-[300px] p-10 bg-orange-600 rounded-xl shadow-lg hover:shadow-2xl transition duration-300'>
      {/* Header with Category and Date */}
      <div className='flex justify-between items-center mb-3'>
        <h3 className='bg-red-700 text-white text-xs px-5 py-2 font-semibold rounded-full'>
          {data.category}
        </h3>
        <h4 className='text-sm text-black'>{data.taskDate}</h4>
      </div>

      {/* Task Title */}
      <h2 className='text-2xl font-semibold text-white mb-6'>{data.taskTitle}</h2>

      {/* Task Description */}
      <p className='text-sm text-gray-200 mb-5'>
        {data.taskDescription}
      </p>

      {/* Action Button */}
      <div className='flex justify-center'>
        <button className='bg-red-600 text-white text-xs font-semibold py-3  px-4 rounded-lg shadow-md hover:bg-red-700 transition duration-200 w-full'>
          Mark as Failed
        </button>
      </div>
    </div>
  )
}

export default FailedTask
