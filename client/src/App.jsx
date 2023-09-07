import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Landing from './views/landing/Landing'
import Home from './views/home/Home'
import Create from './views/create/Create'
import Detail from './views/detail/Detail'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Landing/>
      <Home/>
      <Create/>
      <Detail/>
    </>
  )
}

export default App
