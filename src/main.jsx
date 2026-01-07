import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import { PrivacyPolicy } from './pages/PrivacyPolicy'
import { LegalNotice } from './pages/LegalNotice'
import { Fees } from './pages/Fees'
import { Contact } from './pages/Contact'
import TeamPage from './pages/TeamPage'

const root = createRoot(document.getElementById('root'))

// Global handlers to reduce noisy uncaught errors and surface actionable logs
window.addEventListener('unhandledrejection', (event) => {
  // Log concise warning and prevent default noisy console output (often from extensions)
  console.warn('Unhandled promise rejection caught:', event.reason)
  try { event.preventDefault() } catch (e) { /* ignore */ }
})

window.addEventListener('error', (event) => {
  // Suppress known benign selection errors originating from browser content scripts
  if (event && event.message && event.message.includes("getRangeAt")) {
    console.warn('Suppressed selection error from content script:', event.message)
    try { event.preventDefault() } catch (e) { /* ignore */ }
  }
})

root.render(
  <BrowserRouter basename="/">
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/honoraires" element={<Fees />} />
      <Route path="/equipe" element={<TeamPage />} />
      <Route path="/confidentialite" element={<PrivacyPolicy />} />
      <Route path="/mentions-legales" element={<LegalNotice />} />
    </Routes>
  </BrowserRouter>
)
