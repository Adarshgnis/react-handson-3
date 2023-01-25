import React from 'react'
import { useState } from 'react'
import "./App.css"

const App = () => {

  const [user, setUser] = useState({ Username: "", Department: "", Rating: "" })
  const onChangeUser = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const [arr1, setArr1] = useState([])
  const [Switch, setSwitch] = useState(true)

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    if (Switch) {
      setArr1([...arr1, user])
      console.log(arr1);
    }

    setSwitch(!Switch)

  }

  return (
    <div className="container">
      <div>
        <form onSubmit={onSubmit}>
          <h1 className='heading'>Employee Feedback Form</h1>
          {Switch ? 
          <div id='formdiv'>
              <h1>Input your Feedback</h1>
              <label htmlFor="Username">Name:</label>
              <input type="text" name="Username" value={user.Username} onChange={onChangeUser} /> <br />
              <label htmlFor="Department">Department:</label>
              <input type="text" name="Department" value={user.Department} onChange={onChangeUser} /> <br />
              <label htmlFor="Rating">Rating:</label>
              <input type="number" name="Rating" value={user.Rating} onChange={onChangeUser} /> <br />
          </div>
          :<div>
              <h1 id='heading2'>User Data</h1>
              <div className='section'>
              {
                arr1.map((value, index) => {
                  return (
                      <div key={index} className="card">
                        <p key={index}>Name: {value.Username} | Department: {value.Department} | Rating: {value.Rating} </p>
                      </div>
                  )
                })
              }
              </div>
          </div>}
          <button id='btn' type="submit">{Switch ? <span>Submit</span> : <span>Go Back</span>}</button>
        </form>
      </div>
    </div>
  )
}

export default App
