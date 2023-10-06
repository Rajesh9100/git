import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import { BsFillPersonFill } from "react-icons/bs";
function Dashboard() {
  return (
    <div className='main-div d-flex col-sm-12 row '>
      <div className='sub-div col-xl-3 ' >
        <h1 className='text-center text-decoration-underline'>HRPC</h1>
        <ul className='lists m-3 '>
          <li>Dashboard</li>
          <li>Event</li>
          <li>Job Posts</li>
        </ul>
      </div>
      <div className='col-xl-9 p-5 col-md-6' >
        <div className='d-flex justify-content-between'>
          <input placeholder='Search' className='rounded border mb-3 mr-4' />
          <p>Dylan Hunter <BsFillPersonFill /></p>
        </div>
        <div className='child-div col-xl-9'>
          <h2>Add HR</h2>
          <div className='d-flex row'>
            <div className='col-xl-4'>
              <label>Username</label>
              <input className=' form-control' type='text' />
            </div>
            <div className='col-xl-4'>
              <label>Username</label>
              <input className=' form-control' type='text' />
            </div>
            <div className='col-xl-4'>
              <label>Username</label>
              <input className='rounded border form-control ' type='text' />
            </div>
          </div >
          <div className='d-flex row'>
            <div className='col-xl-4'>
              <label>Username</label>
              <input className='rounded border form-control' type='text' />
            </div>
            <div className='col-xl-4'>
              <label>Username</label>
              <input className='rounded border form-control' type='text' />
            </div>
            <div className='col-xl-4'>
              <label>Username</label>
              <input className='rounded border form-control' type='text' />
            </div>
          </div>
          <div className='d-flex row'>
            <div className='col-xl-4'>
              <label>Username</label>
              <input className='rounded border form-control' type='text' />
            </div>
            <div className='col-xl-4'>
              <label>Username</label>
              <input className='rounded border form-control' type='text' />
            </div>
            <div className='col-xl-4'>
              <label>Username</label>
              <input className='rounded border form-control' type='text' />
            </div>
          </div>
          <button type='button' className='btn btn-primary btn-lg m-3 '>Submit</button>
          <Link to='/maindashboard'> <button type='button' className='btn btn-primary  btn-lg m-3 '>Dashboard</button></Link>
        </div>

      </div >


    </div >

  )
}

export default Dashboard
