
import { Route, Routes } from 'react-router-dom'
import './App.css'

import HomePage from './pages/home'
import DashboardPage from './pages/dashboard'
import CoinPage from './pages/coin'
import ComparePage from './pages/compare'
import WatchlistPage from './pages/watchlist'
function App() {

  return (
    <div>
      <Routes>
      <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/coin/:id" element={<CoinPage />} />
          <Route path="/compare" element={<ComparePage />} />
          <Route path="/watchlist" element={<WatchlistPage />} />
      </Routes>
   
    </div>
  )
}

export default App
