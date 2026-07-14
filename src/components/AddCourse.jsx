import axios from 'axios'
import React, { useState } from 'react'

const AddCourse = () => {
    const [input, changeInput] = useState(
        {
            name: "",
            department: "",
            sem: "",
            course: "",
            systemNumber: "",
            loginTime: "",
            logoutTime: "",
            date: "",
        }
    )
    const inputHandler = (event) => {
        changeInput({ ...input, [event.target.name]: event.target.value })
    }
    const readValue = () => {
        console.log(input)
        axios.post("localhost:3000/add-entry", input).then(
            (response) => {
                console.log(response.data)
                alert("Entry added successfully")
            }
        ).catch(
            (error) => {
                console.log(error.response.data);
                alert(error.response.data.message);
            })
    }
  return (
    <div>

<div className="container mt-4 mb-4">
                <div className="row">
                    <div className="col col-12">

                        <div className="row g-4">
                            <div className="col col-12 col-sm-6 col-md-4">

                                <label htmlFor="" className="form-label">Name</label>
                                <input type="text" className="form-control" name="name" placeholder="Registration Number" value={input.name} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-4">

                                <label htmlFor="" className="form-label">Department</label>
                                <input type="text" className="form-control" name="department" placeholder="Brand" value={input.department} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-4">

                                <label htmlFor="" className="form-label">Sem</label>
                                <input type="text" className="form-control" name="sem" placeholder="Model" value={input.sem} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-4">

                                <label htmlFor="" className="form-label">Course</label>
                                <input type="text" className="form-control" name="course" placeholder="Model" value={input.course} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-4">

                                <label htmlFor="" className="form-label">System Number</label>
                                <input type="text" className="form-control" name="systemNumber" placeholder="Model" value={input.systemNumber} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-4">

                                <label htmlFor="" className="form-label">Login Time</label>
                                <input type="text" className="form-control" name="loginTime" placeholder="Model" value={input.loginTime} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-4">
                                <label htmlFor="" className="form-form">Logout Time</label>
                                <input type="text" className="form-control" placeholder="logoutTime" name="seating_capacity" value={input.logoutTime} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-4">
                                <label htmlFor="" className="form-form">Date</label>
                                <input type="date" className="form-control" placeholder="date" name="rent_per_day" value={input.date} onChange={inputHandler} />
                            </div>
                            <div className="col col-12">

                                <button className="btn btn-success" onClick={readValue}>Submit</button>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

    </div>
  )
}

export default AddCourse