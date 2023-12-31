import './App.css'

import { useEffect } from 'react'
import {Routes , Route , useLocation , useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux'

import axios from 'axios'

import { getCountries, getActivities } from './redux/countrySlice';
import LandingPage from './views/landing/landingPage'
import HomePage from './views/home/homePage'
import DetailPage from './views/detail/detaiPage'
import NavBar from './components/navBar/navBar'
import ActivityForm from './components/createActivity/activityForm'
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
    <div >

      {pathname!=='/' ? <NavBar/>:''}

      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/home' element={<HomePage/>}/>
        <Route path='/details/:id' element={<DetailPage/>}/>
        <Route path='/activity' element={<ActivityForm/>}/>
        <Route path='*' element={<BadRoute/>}/>
      </Routes>

    </div>
  )
}

export default App
