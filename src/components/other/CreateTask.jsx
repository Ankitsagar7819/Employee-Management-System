import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {

    const [userData, setUserData] = useContext(AuthContext)

    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [asignTo, setAsignTo] = useState('')
    const [category, setCategory] = useState('')

    const [newTask, setNewTask] = useState({})
    const [taskCreated, setTaskCreated] = useState(false)

    const submitHandler = (e) => {
        e.preventDefault()

        if (!taskTitle || !taskDescription || !taskDate || !asignTo || !category) {
            alert("Please fill all fields.")
            return
        }

        const task = { taskTitle, taskDescription, taskDate, category, active: false, newTask: true, failed: false, completed: false }

        setNewTask(task)

        const data = userData
        data.forEach((elem) => {
            if (asignTo === elem.firstName) {
                elem.tasks.push(task)
                elem.taskCounts.newTask = elem.taskCounts.newTask + 1
            }
        })

        setUserData(data)
        setTaskCreated(true)
        
        // Clear fields after task creation
        setTaskTitle('')
        setCategory('')
        setAsignTo('')
        setTaskDate('')
        setTaskDescription('')
    }

    return (
        <div className='bg-[#1c1c1c] p-6 rounded-xl shadow-lg mt-3'>
            <h2 className='text-3xl text-white font-semibold mb-8 text-center '>Create a New Task</h2>
            
            <form onSubmit={submitHandler} className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                
                {/* Left Column */}
                <div className='space-y-4'>
                    <div>
                        <label className='text-sm text-gray-300 mb-2 block'>Task Title</label>
                        <input
                            value={taskTitle}
                            onChange={(e) => setTaskTitle(e.target.value)}
                            className='w-full py-3 px-5 text-sm rounded-lg bg-transparent border-2 border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 placeholder-gray-400'
                            type="text" placeholder='Make a UI design' />
                    </div>

                    <div>
                        <label className='text-sm text-gray-300 mb-2 block'>Date</label>
                        <input
                            value={taskDate}
                            onChange={(e) => setTaskDate(e.target.value)}
                            className='w-full py-3 px-5 text-sm rounded-lg bg-transparent border-2 border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500'
                            type="date" />
                    </div>

                    <div>
                        <label className='text-sm text-gray-300 mb-2 block'>Assign To</label>
                        <input
                            value={asignTo}
                            onChange={(e) => setAsignTo(e.target.value)}
                            className='w-full py-3 px-5 text-sm rounded-lg bg-transparent border-2 border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500'
                            type="text" placeholder='Employee name' />
                    </div>

                    <div>
                        <label className='text-sm text-gray-300 mb-2 block'>Category</label>
                        <input
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className='w-full py-3 px-5 text-sm rounded-lg bg-transparent border-2 border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500'
                            type="text" placeholder='Design, Development, etc.' />
                    </div>
                </div>

                {/* Right Column */}
                <div className='space-y-4'>
                    <div>
                        <label className='text-sm text-gray-300 mb-2 block'>Description</label>
                        <textarea
                            value={taskDescription}
                            onChange={(e) => setTaskDescription(e.target.value)}
                            className='w-full h-36 py-3 px-5 text-sm rounded-lg bg-transparent border-2 border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500'
                            placeholder='Task description...'
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className='w-full mt-4 py-3 text-sm font-semibold rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 focus:ring-2 focus:ring-emerald-500 transition duration-300'
                    >
                        {taskCreated ? 'Task Created!' : 'Create Task'}
                    </button>
                </div>

            </form>
        </div>
    )
}

export default CreateTask
