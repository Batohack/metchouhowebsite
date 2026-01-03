import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import { PrivacyPolicy } from './pages/PrivacyPolicy'
import { LegalNotice } from './pages/LegalNotice'
import { Fees } from './pages/Fees'
import { Contact } from './pages/Contact'

const root = createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter basename="/">
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/honoraires" element={<Fees />} />
      <Route path="/confidentialite" element={<PrivacyPolicy />} />
      <Route path="/mentions-legales" element={<LegalNotice />} />
    </Routes>
  </BrowserRouter>
)
