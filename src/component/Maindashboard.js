import React from 'react'
import { Link } from 'react-router-dom'
const Data = [
    {
        id: 1,
        name: 'Rajesh Kumar',
        designation: 'Developer',
        place: 'vizag',
        age: '29',
        status: 'live'
    },
    {
        id: 2,
        name: 'Suresh Kumar',
        designation: 'Tester',
        place: 'Hyderabad',
        age: '29',
        status: 'live'
    },
    {
        id: 3,
        name: 'Rajesh Kumar',
        designation: 'Developer',
        place: 'vizag',
        age: '29',
        status: 'live'
    },
    {
        id: 4,
        name: 'Suresh Kumar',
        designation: 'Tester',
        place: 'Hyderabad',
        age: '29',
        status: 'live'
    },
    {
        id: 5,
        name: 'Rajesh Kumar',
        designation: 'Developer',
        place: 'vizag',
        age: '29',
        status: 'live'
    },
    {
        id: 6,
        name: 'Suresh Kumar',
        designation: 'Tester',
        place: 'Hyderabad',
        age: '29',
        status: 'live'
    },
    {
        id: 7,
        name: 'Rajesh Kumar',
        designation: 'Developer',
        place: 'vizag',
        age: '29',
        status: 'live'
    },
    {
        id: 8,
        name: 'Suresh Kumar',
        designation: 'Tester',
        place: 'Hyderabad',
        age: '29',
        status: 'live'
    },
    {
        id: 9,
        name: 'Rajesh Kumar',
        designation: 'Developer',
        place: 'vizag',
        age: '29',
        status: 'live'
    },
    {
        id: 10,
        name: 'Suresh Kumar',
        designation: 'Tester',
        place: 'Hyderabad',
        age: '29',
        status: 'live'
    },

]
function Maindashboard() {
    return (
        <div className='p-5 d-flex c'>
            <div className='main-dashboard col-xl-3 '>
                <h2 className='text-center text-decoration-underline'>HRPC</h2>
                <ul className='dashboard-lists m-3 '>
                    <li className='p-3'>Dashboard</li>
                    <li className='p-3'>Event</li>
                    <li className='p-3'>JOb Posts</li>
                </ul>
            </div>
            <div className='m-2 p-3 col-xl-9 rounded '>
                <div className='d-flex justify-content-between'>
                    <input placeholder='Search' className='rounded border mb-3 mr-4' />
                    <p>Dylan Hunter </p>
                </div>
                <div className='d-flex justify-content-between'>
                    <h4>HR Results</h4>
                    <Link to='/dashboard'>  <button type='button' className='btn btn-primary btn-sm '>Add HR</button></Link>
                </div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Emp Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Designation</th>
                            <th scope="col">Place</th>
                            <th scope="col">Age</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Data.map((each) => {
                            return (
                                <tr>
                                    <td>{each.id}</td>
                                    <td>{each.name}</td>
                                    <td>{each.designation}</td>
                                    <td>{each.place}</td>
                                    <td>{each.age}</td>
                                    <td>{each.status}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Maindashboard
