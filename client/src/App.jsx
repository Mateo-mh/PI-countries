import './App.css'
import { useEffect } from 'react'
import {Routes,Route,useLocation,useNavigate} from "react-router-dom"
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { getCountries, getActivities } from './redux/countrySlice';
import Landing from './views/landing/Landing'
import Home from './views/home/Home'
import Navbar from './components/navbar/Navbar'
import Create from './views/create/Create'
import Detail from './views/detail/Detail'
import BadRoute from './components/badRoute/badRoute'

function App() {
  const {pathname} = useLocation()

  const dispatch = useDispatch()

  const URL = 'http://localhost:3001/countries'

  const URLA = 'http://localhost:3001/activities'

  useEffect(()=>{
    const getallCountriesAndActivities= async()=>{
        try {
          const {data} = await axios(URL)
          dispatch(getCountries(data))
    
          const res= await axios(URLA)
          dispatch(getActivities(res.data))
            
        }catch (error) {
          throw error.message
        }
    }
    getallCountriesAndActivities();

  },[])

  return (
      <div>
      {pathname!=='/' ? <Navbar/>:''}
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/details/:id" element={<Detail/>}/>
          <Route path="/activity" element={<Create/>}/>
          <Route path='*' element={<BadRoute/>}/>
        </Routes>
      </div>   

  )
}

export default App
