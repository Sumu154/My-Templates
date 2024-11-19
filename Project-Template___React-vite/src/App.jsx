import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import TestComponent from './Utils/Test/test'

import Sunglass from './Components/Sunglass/Sunglass'
import Watch from './Components/Watch/Watch'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1> React + Vite </h1>
      <h3> Use of Hooks Testing... look at console</h3>
      <TestComponent />

      <br /><br /><br /><br /><br />


      <Sunglass />
      <Watch />


      

    </>
  )
}

export default App 
