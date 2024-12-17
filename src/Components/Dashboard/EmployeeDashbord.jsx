import React from 'react'
import Header from '../Header/Header'
import TaskListNumbers from '../TaskListNumbers/TaskListNumbers'
import TaskList from '../TaskList/TaskList.jsx'

const EmployeeDashbord = ({data}) => {

  
  return (
    <div className='p-10 bg-[#1c1c1c] h-screen'>
      
      <Header data={data}/>
      <TaskListNumbers data={data}/>
      <TaskList data={data} />
    </div>
  )
}

export default EmployeeDashbord;
