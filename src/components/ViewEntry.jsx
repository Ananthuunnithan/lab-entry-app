import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'

const ViewEntry = () => {
    const[data,changeData]=useState([])
    const fetchData=()=>{
        axios.get("http://localhost:3000/view").then(
            (response)=>{
                changeData(response.data)
            }
        ).catch((error)=>{
            console.log(error)
        })
    }

    useEffect(
        ()=>{
            fetchData()
        },[]
    )
    return (
        <div>
<NavBar/>
            <table class="table text-center justify-content">
                <thead className="table-dark" >
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Department</th>
                        <th scope="col">Sem</th>
                        <th scope="col">Course</th>
                        <th scope="col">System Number</th>
                        <th scope="col">Login Time</th>
                        <th scope="col">Logout Time</th>
                        <th scope="col">Date</th>

                    </tr>
                </thead>
                <tbody>
                    {data.map(
                        (value, index) => {
                            return (
                                <tr key={value.id}>
                                    <th scope="row">{value.name}</th>
                                    <td>{value.department}</td>
                                    <td>{value.sem}</td>
                                    <td>{value.course}</td>
                                    <td>{value.systemNumber}</td>
                                    <td>{value.loginTime}</td>
                                    <td>{value.logoutTime}</td>
                                    <td>{value.date}</td>

                                </tr>
                            )
                        }
                    )}


                </tbody>
            </table>


        </div>
    )
}

export default ViewEntry