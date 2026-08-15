import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthProvider'
import { TooltipProvider } from './components/ui/tooltip'
import OrgProvider from './context/OrgProvider'
import { GoogleOAuthProvider } from '@react-oauth/google'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <TooltipProvider>
          <OrgProvider>
            <GoogleOAuthProvider clientId={import.meta.env.VITE_CLIENT_ID} >
              <App />
            </GoogleOAuthProvider>
          </OrgProvider>
        </TooltipProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
)
