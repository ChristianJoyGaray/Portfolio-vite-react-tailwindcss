import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Navbar from "./components/Navbar"
import ContainerOne from './components/ContainerOne'
import ContainerTwo from './components/ContainerTwo'
import ContainerThree from './components/ContainerThree'
import ContainerFour from './components/ContainerFour'
import ContainerFive from './components/ContainerFive'

function App() {
  

  return (
    <>
      <Navbar />
      <ContainerOne />
      <ContainerTwo />
      <ContainerThree />
      <ContainerFour />
      <ContainerFive />
    </>
  )
}

export default App
