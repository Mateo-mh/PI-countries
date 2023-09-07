import {Routes,Route,BrowserRouter} from "react-router-dom"
import './App.css'
import Landing from './views/landing/Landing'
import Home from './views/home/Home'
import Create from './views/create/Create'
import Detail from './views/detail/Detail'

function App() {

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route exact path="/home" element={<Home/>}/>
          <Route path="/create" element={<Create/>}/>
          <Route path="/home/:id" element={<Detail/>}/>
        </Routes>
      </div>   
    </BrowserRouter>

  )
}

export default App
