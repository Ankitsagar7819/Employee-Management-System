import React from 'react'

const AcceptTask = ({data}) => {
   
  return (
    <div className='flex-shrink-0 h-[280px] mb-3 w-[300px] p-4 bg-red-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-5 py-3 font-semibold rounded-lg '>{data.category}</h3>
                <h4 className='text-md text-black'>{data.taskDate}</h4>
            </div>

            <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
            <p className='text-sm mt-3'>
                {data.taskDescription}
            </p>
            <div className='flex justify-between mt-4 gap-2 p-3 rounded-md '>
                <button className='bg-green-500 rounded font-medium py-1 px-2 text-xs w-full'>Mark as Completed</button>
                <button className='bg-red-500 rounded font-medium py-1 px-2 text-xs w-full pb-'>Mark as Failed</button>
            </div>
        </div>
  )
}

export default AcceptTask