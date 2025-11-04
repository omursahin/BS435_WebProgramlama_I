import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {AuthProvider} from "./AuthContext.tsx";
import {BrowserRouter} from "react-router";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <AuthProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
      </AuthProvider>
  </StrictMode>,
)
