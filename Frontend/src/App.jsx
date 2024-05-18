import { useEffect, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import DoctorsList from './DoctorsList'
import Appointments from './Appointments'
import Prescription from './Prescription'
import PrescriptionsTable from './PrescriptionsList'
import MyAccount from './MyAccount'
import MedicinesList from './MedicinesList'
import DoctorPage from './DoctorPage'
import MedicinePage from './MedicinePage'
import { useDispatch, useSelector } from 'react-redux'
import { setStartTime, setEndTime } from './metricsSlice'
import axios from 'axios'
import { getState } from './metricsSlice'

function App() {
  const [count, setCount] = useState(0)
  const dispatch = useDispatch()
  const state = useSelector(getState)
  const recordCloseTime = async () => {
    localStorage.clear();
    const closeTime = new Date();
    console.log('here unloading')
    dispatch(setEndTime(closeTime))
    // console.log(elapsedTime)
    // await axios.post('http://localhost:4000/toCSV', { ...state }).then(response => {
    //   console.log('here')
    // })
    console.log('Website closed at:', closeTime);

  };
  useEffect(() => {
    // Check if opening time has already been recorded during the current session
    const openingTimeRecorded = localStorage.getItem('openingTimeRecorded');
    console.log(openingTimeRecorded);

    // Execute logic only if opening time is not recorded
    if (!openingTimeRecorded) {
      const openTime = new Date();
      dispatch(setStartTime(openTime));
      console.log('Website opened at:', openTime);
      localStorage.setItem('openingTimeRecorded', 'true');
    }

    window.onbeforeunload = recordCloseTime;
    return () => {
      // Remove event listener on cleanup
      window.onbeforeunload = null;
    };
  }, []);
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/account' element={<MyAccount />} />
      <Route path='/doctors' element={<DoctorsList />} />
      <Route path='/doctorPage' element={<DoctorPage />} />
      <Route path='/medicines' element={<MedicinesList />} />
      <Route path='/medicinePage' element={<MedicinePage />} />
      <Route path='/appointments' element={<Appointments />} />
      <Route path='/prescriptions' element={<PrescriptionsTable />} />
    </Routes>
    // <>
    //   <div>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>
  )
}

export default App
