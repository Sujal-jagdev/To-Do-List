"use client"
import React, { useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Main } from 'next/document'

const page = () => {
  const [title, settitle] = useState('')
  const [desc, setdesc] = useState('')
const [mainTask, setmainTask] = useState([])
  const submit = (e)=>{
    e.preventDefault();
    setmainTask([...mainTask,{title,desc}])
    settitle('')
    setdesc('')
    console.log(mainTask)
  }

const deleteTask = (i)=>{
  let copytask = [...mainTask]
  copytask.splice(i,1)
  setmainTask(copytask)
}

  let noTask = <h5 className='fw-bolder'>No Task Here...</h5>

 if (mainTask.length>0) {
  noTask = mainTask.map(function(t,i){
    return(
    <li className=' list-unstyled d-flex align-items-center justify-content-between '>
        <div>
      <h3 className='fw-bolder'>{t.title}</h3>
      <h6>{t.desc}</h6>
    </div>
    <button className='btn bg-dark text-light fw-bolder col-lg-2 col-md-7' onClick={
      function(i){
        deleteTask()
      }
    }>Delete Task</button>
    </li>

    );
  })
 }
  return (
    <>
      <h1 className='text-center fw-bolder bg-dark text-light p-3'>My To-Do List</h1>
      <div className="container">

        <form className='col-12 d-flex align-items-center justify-content-lg-between justify-content-md-center flex-lg-row flex-column' onSubmit={submit}>
          <input type="text" className='col-lg-4 col-md-7' placeholder='Enter Your Title Here' value={title} onChange={
            function(e){
              settitle(e.target.value)
            }
          }/>
          <input type="text" className='col-lg-4 col-md-7 mt-lg-0 mt-4' placeholder='Enter Your Description Here' value={desc} onChange={
            function(e){
              setdesc(e.target.value)
            }
          }/>
          <button className='btn bg-dark text-light fw-bolder col-lg-2 col-md-7 mt-lg-0 mt-5'>Add Task</button>
        </form>
        <hr />
        <ul className='notask bg-light p-2'>
          {noTask}
        </ul>
      </div>
    </>
  )
}

export default page