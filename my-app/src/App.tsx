import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Members from './pages/Members'
import Create from './pages/Members/Create'
import Agenda from './pages/Agenda'

export default function App() {
  return (
    <Routes>
      <Route path="/pages/Home/index.tsx" element={<Home />} />
      <Route path="/pages/Members/index.tsx" element={<Members />} />
      <Route path="/pages/Members/Create/index.tsx" element={<Create />} />
      <Route path="/pages/Agenda/index.tsx" element={<Agenda />} />
    </Routes>
  )
}