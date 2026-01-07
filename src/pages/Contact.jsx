import { motion } from 'framer-motion'
import { useState } from 'react'
import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'
import { MapPin, Phone, Mail } from 'lucide-react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'

// Configuration des icônes Leaflet
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
})

export function Contact() {
  const [isModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')
  const [mapCenter] = useState([3.8801284, 11.5384978])

  const handleOpenModal = () => {
    // Fonction stub
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulation d'envoi - à adapter avec votre backend
      console.log('Données du formulaire:', formData)
      setSubmitMessage('Votre message a été envoyé avec succès. Nous vous recontacterons dans les 24h.')
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      setTimeout(() => {
        setSubmitMessage('')
      }, 5000)
    } catch (error) {
      setSubmitMessage('Une erreur est survenue. Veuillez réessayer.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Header onOpenModal={handleOpenModal} />
      
      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Titre */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold text-[#3e2723] mb-16"
          >
            CONTACT
          </motion.h1>

          {/* Grille principale */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Colonne gauche - Carte et infos */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Carte */}
              <div className="rounded-lg overflow-hidden shadow-xl h-96 border-4 border-amber-600">
                <MapContainer
                  center={mapCenter}
                  zoom={14}
                  style={{ height: '100%', width: '100%' }}
                >
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; OpenStreetMap contributors'
                  />
                  <Marker position={mapCenter}>
                    <Popup>
                      <div className="text-center">
                        <p className="font-bold text-[#3e2723]">Cabinet TCHOUHO</p>
                        <p className="text-sm">Yaoundé, Cameroun</p>
                      </div>
                    </Popup>
                  </Marker>
                </MapContainer>
              </div>

              {/* Bouton "Obtenir l'itinéraire" vers Google Maps */}
              <a
                href={`https://maps.app.goo.gl/WKUQPcoVQPsSqfL19`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ouvrir l'itinéraire dans Google Maps"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white px-4 py-2 rounded-lg font-semibold shadow-md transition-all"
              >
                Obtenir l'itinéraire
              </a>

              {/* Infos de contact */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-blue-600 mb-6">
                  Contacter TCHOUHO & ASSOCIÉS
                </h2>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-[#3e2723]">Par tél. :</p>
                      <p className="text-[#5d4037]">(+237) 677 42 31 69</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-[#3e2723]">Par mail :</p>
                      <p className="text-[#5d4037]">medardtcouho@yahoo.com</p>
                    </div>
                  </div>

                  <a
                    href="https://maps.app.goo.gl/WKUQPcoVQPsSqfL19"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 hover:underline"
                    aria-label="Voir l'adresse du cabinet sur Google Maps"
                  >
                    <MapPin className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-[#3e2723]">Par courrier postal :</p>
                      <p className="text-[#5d4037]">
                        Quartier Omnisport<br />
                        Rue des Généraux<br />
                        Yaoundé, Cameroun
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Colonne droite - Formulaire */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="text-2xl font-bold text-blue-600 mb-6">
                  Nous écrire
                </h2>

                {/* Message de succès */}
                {submitMessage && (
                  <div className={`p-4 rounded-lg ${
                    submitMessage.includes('succès')
                      ? 'bg-green-100 text-green-700'
                      : 'bg-red-100 text-red-700'
                  }`}>
                    {submitMessage}
                  </div>
                )}

                {/* Nom */}
                <div>
                  <label className="block text-sm font-semibold text-[#3e2723] mb-2">
                    Votre nom (obligatoire)
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600"
                    placeholder="Entrez votre nom complet"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-[#3e2723] mb-2">
                    Votre adresse de messagerie (obligatoire)
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600"
                    placeholder="votre.email@exemple.com"
                  />
                </div>

                {/* Objet */}
                <div>
                  <label className="block text-sm font-semibold text-[#3e2723] mb-2">
                    Objet
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600"
                    placeholder="Sujet de votre message"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-[#3e2723] mb-2">
                    Votre message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 resize-none"
                    placeholder="Décrivez votre demande..."
                  />
                </div>

                {/* Bouton */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3 bg-[#3e2723] hover:bg-[#5d4037] text-white font-bold rounded-lg transition-colors duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? 'Envoi en cours...' : 'ENVOYER'}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
