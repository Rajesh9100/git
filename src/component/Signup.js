import React from 'react'
import { Link } from 'react-router-dom'

function Signup() {
    return (
        <div className='text-center '>
            <div className=' col-xl-3 border border-info rounded m-3 p-5 mx-auto shadow login '>
                <h1>HRPC Signup</h1><br />
                <input placeholder='Username' className='m-3 border rounded' /><br />
                <input placeholder='Password' className='m-3 border rounded' /><br />
                <input placeholder=' Confirm Password' className='m-3 border rounded' /><br />
                <button className='btn btn-primary' type='button'>Submit</button>
                <Link to='/login' className='text-dark'><h4>Login</h4></Link>
            </div>
        </div>
    )
}

export default Signup
