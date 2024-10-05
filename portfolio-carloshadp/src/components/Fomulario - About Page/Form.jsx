import { useState,  } from 'react'
import React from 'react'

export default function Form() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: ""
  })
  
  
  
  function handleInput(event){
    const newObject = {...values, [event.target.name]: event.target.value}
    setValues(newObject)
  }

  function Submit(event){
    event.preventDefault();
    console.log(values.name)
    console.log(values.email)
    console.log(values.password)
  }
  

  return (
    <section className="bg-cinzento-escuro text-white rounded-xl flex flex-col items-center justify-center h-60 w-64">
      <h2 className="text-lg">Contact Form</h2>
      <form>
        <div className="ml-3">
          <label className="mr-3" htmlFor="name">Name:</label>
          <input className="bg-zinc-600 rounded-xl" type="text" placeholder="Type your Name" name="name" onChange={handleInput}/>
        </div>

        <div className="ml-3">
          <label className="mr-3" htmlFor="email">Email:</label>
          <input className="bg-zinc-600 rounded-xl" type="email" name="email" placeholder="Type your Email" onChange={handleInput}/>
        </div>

        <div className="ml-3">
          <label className="mr-3" htmlFor="password">Password:</label>
          <input className="bg-zinc-600 rounded-xl" type="password" name="password" placeholder="Type your Password" onChange={handleInput}/>
        </div>

      </form>
        <div>
          <button className="bg-zinc-900 border-[1px] px-[10px] py[15px] rounded-xl mt-3" onClick={Submit}>Submit</button>
        </div>
    </section>
  )
}
