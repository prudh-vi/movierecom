import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './index.css'
import App from './App.tsx'
import GetMovies from './pages/getmovies.tsx'

// Combine the router setup with App component
const AppWithRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="getmovies" element={<GetMovies />} />
      </Routes>
    </BrowserRouter>
  )
}

// Render the application
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppWithRouter />
  </StrictMode>
)