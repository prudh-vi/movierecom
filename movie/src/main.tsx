import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './index.css'
import App from './App'
import GetMovies from './pages/getmovies'
import JoinUs from './pages/JoinUs'

const rootElement = document.getElementById('root')

// Check if the root element exists
if (!rootElement) {
  throw new Error('Root element not found')
}

// Create the root only if it hasn't been created before
const root = createRoot(rootElement)

// Combine the router setup with App component
const AppWithRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="movies" element={<GetMovies />} />
        <Route path="auth" element={<JoinUs />} />
      </Routes>
    </BrowserRouter>
  )
}

// Render the application
root.render(
  <StrictMode>
    <AppWithRouter />
  </StrictMode>
)