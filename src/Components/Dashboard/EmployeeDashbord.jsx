import React from 'react'
import Header from '../Header/Header'
import TaskListNumbers from '../TaskListNumbers/TaskListNumbers'
import TaskList from '../TaskList/TaskList.jsx'

const EmployeeDashbord = (props) => {

  
  return (
    <div className='p-10 bg-[#1c1c1c] h-screen'>
      
      <Header changeUser={props.changeUser}  data={props.data}/>
      <TaskListNumbers data={props.data}/>
      <TaskList data={props.data} />
    </div>
  )
}

export default EmployeeDashbord;
