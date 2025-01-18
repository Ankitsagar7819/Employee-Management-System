import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-full w-[310px] p-9  bg-blue-600 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm font-semibold px-4 py-2 rounded-md mb-5'>{data.category}</h3>
                <h4 className='text-sm'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
            <p className='text-sm mt-2'>
                {data.taskDescription}
            </p>
            <div className='mt-8'>
                <button className='w-full  bg-green-600  font-medium py-3 px-1 text-sm rounded-md'>Complete</button>
            </div>
        </div>
  )
}

export default CompleteTask