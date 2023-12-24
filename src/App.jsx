
import { Route, Routes } from 'react-router-dom'
import './App.css'

import HomePage from './pages/HomePage'
import DashboardPage from './pages/DashboardPage'
import CoinPage from './pages/CoinPage'
import ComparePage from './pages/ComparePage'
function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/dashboard' element={<DashboardPage/>}></Route>
        <Route path='/coin/:id' element={<CoinPage/>}></Route>
        <Route path='/comparepage' element={<ComparePage/>}></Route>
      </Routes>
   
    </div>
  )
}

export default App
