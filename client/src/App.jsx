import {Router,BrowserRouter} from "react-router-dom"
import './App.css'
import Landing from './views/landing/Landing'
import Home from './views/home/Home'
import Create from './views/create/Create'
import Detail from './views/detail/Detail'

function App() {

  return (
    <BrowserRouter>
      <div>
        <Router path="/" component={<Landing/>}/>
        <Router exact path="/home" component={<Home/>}/>
        <Router path="/create" component={<Create/>}/>
        <Router path="/home/:id" component={<Detail/>}/>
      </div>   
    </BrowserRouter>

  )
}

export default App
