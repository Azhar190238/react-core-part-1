import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  return (
    <>
      <h1>Vite + React</h1>
     <Person name ='Azharuddin' age= '23' ></Person>
     <Person name ='Azhar' age= '25' ></Person>
     <Person></Person>
  
    </>
  )
}
// const {name, age} = { name:'rahim', age:'24'}
function Person({name,age}){

  return (
    <div className='details'>
  <h1>My name is {name}</h1>
  <h2>My age is {age}</h2>
  </div>
  )
}

export default App
