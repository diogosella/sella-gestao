import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Members from './pages/Members'
import Create from './pages/Members/Create'
import Agenda from './pages/Agenda'
import Payments from './pages/Payments'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/members" element={<Members />} />
      <Route path="/create" element={<Create />} />
      <Route path="/agenda" element={<Agenda />} />
      <Route path="/payments" element={<Payments />} />
    </Routes>
  )
}