import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import EmployeeDetails from './Employee.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EmployeeDetails></EmployeeDetails> 
  </StrictMode>,
)
