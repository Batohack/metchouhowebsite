import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from '../../hooks/useTranslation'
import { Mail, Phone, MapPin, Award, X } from 'lucide-react'
import metchouhoImage from '../../assets/Metchouho.jpg'

// --- DONNÉES STATIQUES ---
const teamMembersData = [
  {
    name: 'Maître TCHOUHO MEDARD',
    roleKey: 'founder-title',
    specialtyKey: 'business-law-specialty',
    experience: '2 ans',
    image: metchouhoImage,
    descriptionKey: 'founder-description',
    credentials: ['Barreau Du Cameroun', 'Barreau Du Rwanda', 'Droit Des Affaires']
  },
  {
    name: 'Me Marie-Christine KOFFI',
    roleKey: 'associate-lawyer',
    specialtyKey: 'family-law-specialty',
    experience: '5 ans',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
    descriptionKey: 'associate-description',
    credentials: ['Droit de la Famille', 'Droit Civil', 'Procédures judiciaires']
  },
  {
    name: 'Me Patrice KOUAKOU',
    roleKey: 'junior-lawyer',
    specialtyKey: 'property-law-specialty',
    experience: '3 ans',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
    descriptionKey: 'junior-description',
    credentials: ['Droit Immobilier', 'Urbanisme', 'Baux commerciaux']
  }
]

// --- VARIANTES D'ANIMATION ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, staggerChildren: 0.2 } }
}

// --- COMPOSANT PRINCIPAL ---
export function Team() {
  const { t } = useTranslation()
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <section id="team-section" className="py-24 bg-[#fdfaf7] relative overflow-hidden">
      {/* Pattern de fond marron subtil */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none" 
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%238B4513' fill-opacity='1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")` }} 
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div className="text-center mb-20" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
          <motion.div variants={fadeInUp} className="inline-flex items-center px-4 py-2 rounded-full bg-amber-100/50 border border-amber-200 text-amber-900 text-sm font-medium mb-6">
            <Award className="w-4 h-4 mr-2" /> Équipe d'experts
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-[#3e2723] mb-6">
            Notre équipe
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl text-[#5d4037] max-w-3xl mx-auto leading-relaxed">
            Découvrez notre équipe d'experts juridiques dévoués à votre succès.
          </motion.p>
        </motion.div>

        {/* Grille des membres */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {teamMembersData.map((member, index) => (
            <TeamMemberCard key={index} member={member} t={t} onImageClick={() => setSelectedImage(member.image)} />
          ))}
        </motion.div>

        {/* Section Localisation */}
        <LocationSection />
      </div>

      {/* Lightbox Modal */}
      <ImageLightbox selectedImage={selectedImage} onClose={() => setSelectedImage(null)} />
    </section>
  )
}

// --- SOUS-COMPOSANTS ---

function TeamMemberCard({ member, t, onImageClick }) {
  return (
    <motion.div 
      className="bg-white rounded-2xl shadow-xl overflow-hidden group border border-amber-100/50"
      variants={fadeInUp} 
      whileHover={{ y: -8 }}
    >
      {/* Zone Image */}
      <div className="relative h-80 overflow-hidden cursor-pointer" onClick={onImageClick}>
        <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a120b] via-[#1a120b]/40 to-transparent opacity-90" />

        {/* Informations sur l'image (Écritures blanches) */}
        <div className="absolute bottom-6 left-6 right-6 text-white">
          <h3 className="text-2xl font-bold mb-1 text-white drop-shadow-md">{member.name}</h3>
          <p className="text-amber-200 font-medium mb-3 drop-shadow-sm">{t(member.roleKey)}</p>
          <div className="flex flex-wrap gap-2">
            {member.credentials.slice(0, 2).map((cred, idx) => (
              <span key={idx} className="text-[10px] uppercase tracking-wider bg-white/20 backdrop-blur-md px-2 py-1 rounded border border-white/30 text-white">
                {cred}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Contenu textuel */}
      <div className="p-8 bg-white">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-bold text-amber-900 bg-amber-50 px-3 py-1.5 rounded-full border border-amber-100">
            {t(member.specialtyKey)}
          </span>
          <span className="text-xs font-medium text-slate-500">{member.experience}</span>
        </div>
        <p className="text-slate-600 text-sm leading-relaxed mb-6">{t(member.descriptionKey)}</p>
        
        <div className="mb-6">
          <h4 className="text-xs font-bold text-[#3e2723] uppercase tracking-widest mb-3">Expertise</h4>
          <div className="flex flex-wrap gap-2">
            {member.credentials.map((cred, idx) => (
              <span key={idx} className="text-[11px] bg-slate-50 text-slate-600 px-2.5 py-1 rounded border border-slate-100">{cred}</span>
            ))}
          </div>
        </div>
        
        <motion.button 
          whileHover={{ scale: 1.02 }} 
          whileTap={{ scale: 0.98 }} 
          className="w-full bg-[#3e2723] hover:bg-[#5d4037] text-white py-3.5 rounded-xl font-bold text-sm transition-all shadow-lg"
        >
          Prendre rendez-vous
        </motion.button>
      </div>
    </motion.div>
  )
}

function LocationSection() {
  return (
    <motion.div 
      className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-amber-100"
      variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="flex items-start">
            <div className="p-4 bg-amber-50 rounded-2xl mr-5">
              <MapPin className="w-7 h-7 text-amber-800" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#3e2723] mb-2">Notre cabinet</h3>
              <p className="text-[#5d4037] leading-relaxed">Quartier Omnisport, Rue des Généraux,<br />Yaoundé, Cameroun</p>
            </div>
          </div>
          <div className="space-y-4 pl-2">
            <div className="flex items-center text-[#5d4037]"><Phone className="w-5 h-5 mr-4 text-amber-700" /><span>+237 677 42 31 69</span></div>
            <div className="flex items-center text-[#5d4037]"><Mail className="w-5 h-5 mr-4 text-amber-700" /><span>contact@tchouho.com</span></div>
          </div>
        </div>
        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-inner border-4 border-slate-50">
          <img 
            src="https://maps.googleapis.com/maps/api/staticmap?center=Yaounde,Cameroon&zoom=14&size=600x300&maptype=roadmap&markers=color:red%7CYaounde&key=VOTRE_CLE_API" 
            alt="Carte Cabinet" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#3e2723]/20 to-transparent pointer-events-none" />
        </div>
      </div>
    </motion.div>
  )
}

function ImageLightbox({ selectedImage, onClose }) {
  return (
    <AnimatePresence>
      {selectedImage && (
        <motion.div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#1a120b]/95 backdrop-blur-md"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} 
          onClick={onClose}
        >
          <motion.div 
            className="relative max-w-5xl w-full"
            initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <img src={selectedImage} alt="Agrandissement" className="w-full h-auto max-h-[85vh] object-contain rounded-xl shadow-2xl border-4 border-white/10" />
            <button 
              className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors"
              onClick={onClose}
            >
              <X className="w-8 h-8" />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}