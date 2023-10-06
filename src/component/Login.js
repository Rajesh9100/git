import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <div className='text-center'>
            <div className=' col-xl-3 border border-info rounded m-3 p-5 mx-auto shadow login '>
                <h1>HRPC Login</h1><br />
                <input placeholder='Username' className='m-3 border rounded' /><br />
                <input placeholder='Password' className='m-3 border rounded' /><br />
                <button className='btn btn-primary  ' type='button'>Submit</button>
                <h4 className='text-decoration-underline '> <Link to='/signup' className='text-dark'>Signup</Link></h4>
            </div>
        </div>
    )
}

export default Login
