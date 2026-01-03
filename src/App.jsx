import React, { useState } from 'react'
import { Header } from './components/layout/Header'
import { Hero } from './components/sections/Hero'
import { ExpertiseDomains } from './components/sections/ExpertiseDomains'
import { WhyChooseUs } from './components/sections/WhyChooseUs'
import { Team } from './components/about/Team'
import { Footer } from './components/layout/Footer'
import { AppointmentModal } from './components/services/AppointmentModal'

function App() {
  // État pour contrôler l'ouverture de la modale de rendez-vous
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fonction simple pour ouvrir la modale
  const openModal = () => setIsModalOpen(true);
  // Fonction simple pour fermer la modale
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-neutral-beige font-sans text-text-dark">
      {/* On passe la fonction d'ouverture au Header pour son bouton rouge */}
      <Header onOpenModal={openModal} />
      
      <main>
        <Hero onOpenModal={openModal} />
        <Team onOpenModal={openModal} />
        <ExpertiseDomains />
        <WhyChooseUs />
      </main>

      <Footer />

      {/* La Modale est placée à la racine pour couvrir tout l'écran avec le flou */}
      <AppointmentModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
      />
    </div>
  )
}

export default App