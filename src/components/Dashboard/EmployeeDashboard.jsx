import React from 'react'
import Header from '../other/Header'
import TaskListNumbers from '../other/TaskNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {
  const { data } = props;

  return (
    <div className='p-10 bg-[#1C1C1C] h-screen overflow-hidden'>
      {/* Header Section */}
      <Header changeUser={props.changeUser} data={data} />

      {/* Task Numbers Section */}
      <div className='mt-8'>
        <TaskListNumbers data={data} />
      </div>

      {/* Task List Section */}
      <div className='mt-8 bg-gray-800 p-6 rounded-lg shadow-md'>
        <TaskList data={data} />
      </div>
    </div>
  )
}

export default EmployeeDashboard
