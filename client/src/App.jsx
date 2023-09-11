import './App.css'
import { useEffect } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom'; // Importa BrowserRouter
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { getCountries, getActivities } from './redux/countrySlice';
import Landing from './views/landing/landing';
import Home from './views/home/home';
import Detail from './views/detail/detail';
import NavBar from './components/navBar/navBar';
import CreateActivity from './components/createActivity/createActivity';
import BadRoute from './components/badRoute/badRoute';

function App() {
  const dispatch = useDispatch();
  const URL = 'http://localhost:3001/countries';
  const URLA = 'http://localhost:3001/activities';

  useEffect(() => {
    const getallCountriesAndActivities = async () => {
      try {
        const { data } = await axios(URL);
        dispatch(getCountries(data));

        const res = await axios(URLA);
        dispatch(getActivities(res.data));
      } catch (error) {
        throw error.message;
      }
    };
    getallCountriesAndActivities();
  }, []);

  return (
    <BrowserRouter> {/* Envuelve tu componente App con BrowserRouter */}
      <div>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/details/:id" element={<Detail />} />
          <Route path="/activity" element={<CreateActivity />} />
          <Route path="*" element={<BadRoute />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
