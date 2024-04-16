
import { Route, HashRouter as Router, Routes } from 'react-router-dom'
import './assets/styles/main.scss'
import { HomePage } from './pages/HomePage'
import { Convertor } from './pages/Convertor'

export function App() {

  return (
    <Router>
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<Convertor />} path="/convertor" />
      </Routes>
    </Router>
  )
}

