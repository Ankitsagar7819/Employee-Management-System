import React from 'react'

const NewTask = ({data}) => {
    return (
        <div className='flex-shrink-0 h-full w-[300px] p-9 bg-green-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-5 py-2 rounded-md '>{data.category}</h3>
                <h4 className='text-sm'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
            <p className='text-sm mt-2'>
                {data.taskDescription}
            </p>
            <div className='mt-10'>
                <button className='bg-blue-600 rounded font-medium py-2 px-3 text-md'>Accept Task</button>
            </div>
        </div>
    )
}

export default NewTask