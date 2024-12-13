import React from 'react'
import Header from '../Header/Header'
import TaskListNumbers from '../TaskListNumbers/TaskListNumbers'
import TaskList from '../TaskList/TaskList.jsx'

const EmployeeDashbord = () => {
  return (
    <div className='p-10 bg-[#1c1c1c] h-screen'>
      <Header/>
      <TaskListNumbers/>
      <TaskList/>
    </div>
  )
}

export default EmployeeDashbord;
