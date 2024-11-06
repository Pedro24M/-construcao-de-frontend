import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {AuthProvider} from './context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <provider2>
        <provider1>
          <App />
        </provider1>
      </provider2>
    </AuthProvider>
  </StrictMode>,
)
