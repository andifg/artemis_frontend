import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import { App } from './routes/App.tsx';
import Hello from './routes/Hello.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <BrowserRouter>
    <Routes>
      <Route path="/app" element={<App />} />
      <Route path="*" element={<Hello />} />
    </Routes>
  </BrowserRouter>
  </StrictMode>,
)
