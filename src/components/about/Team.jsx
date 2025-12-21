import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from '../../hooks/useTranslation'
import { Mail, Phone, MapPin, Award, X, ArrowRight } from 'lucide-react'
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

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, staggerChildren: 0.2 } }
}

export function Team() {
  const { t } = useTranslation()
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <section id="team-section" className="py-24 bg-[#fdfaf7] relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none" 
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%238B4513' fill-opacity='1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")` }} 
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header : Correction Photo 1 (Texte Sombre sur fond clair) */}
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

        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {teamMembersData.map((member, index) => (
            <TeamMemberCard key={index} member={member} t={t} onImageClick={() => setSelectedImage(member.image)} />
          ))}
        </motion.div>

        <LocationSection />
      </div>

      <ImageLightbox selectedImage={selectedImage} onClose={() => setSelectedImage(null)} />
    </section>
  )
}

function TeamMemberCard({ member, t, onImageClick }) {
  return (
    <motion.div 
      className="bg-white rounded-2xl shadow-xl overflow-hidden group border border-amber-100/50"
      variants={fadeInUp} 
      whileHover={{ y: -8 }}
    >
      <div className="relative h-96 overflow-hidden cursor-pointer" onClick={onImageClick}>
        <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        
        {/* Overlay pour protéger le texte blanc sur l'image */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0a07] via-[#0f0a07]/40 to-transparent opacity-90" />

        <div className="absolute bottom-6 left-6 right-6 z-20">
          <h3 className="text-2xl font-bold mb-1 !text-white drop-shadow-md">
            {member.name}
          </h3>
          <p className="text-amber-300 font-semibold mb-3 drop-shadow-sm uppercase text-xs tracking-wider">
            {t(member.roleKey)}
          </p>
          <div className="flex flex-wrap gap-2">
            {member.credentials.slice(0, 2).map((cred, idx) => (
              <span key={idx} className="text-[10px] uppercase tracking-wider bg-white/10 backdrop-blur-md px-2 py-1 rounded border border-white/20 !text-white">
                {cred}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="p-8 bg-white">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-bold text-amber-900 bg-amber-50 px-3 py-1.5 rounded-full border border-amber-100">
            {t(member.specialtyKey)}
          </span>
          <span className="text-xs font-medium text-slate-500">{member.experience}</span>
        </div>
        <p className="text-[#5d4037] text-sm leading-relaxed mb-6 h-12 line-clamp-2">{t(member.descriptionKey)}</p>
        
        <div className="mb-6">
          <h4 className="text-xs font-bold text-[#3e2723] uppercase tracking-widest mb-3">Expertise</h4>
          <div className="flex flex-wrap gap-2">
            {member.credentials.map((cred, idx) => (
              <span key={idx} className="text-[11px] bg-slate-50 text-[#5d4037] px-2.5 py-1 rounded border border-slate-100">{cred}</span>
            ))}
          </div>
        </div>
        
        <motion.button 
          whileHover={{ scale: 1.02, backgroundColor: "#1a120b" }} 
          whileTap={{ scale: 0.98 }} 
          className="w-full bg-[#3e2723] text-white py-4 rounded-xl font-bold text-sm transition-all shadow-lg flex items-center justify-center gap-2"
        >
          Prendre rendez-vous <ArrowRight className="w-4 h-4" />
        </motion.button>
      </div>
    </motion.div>
  )
}

function LocationSection() {
  return (
    <motion.div 
      className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-amber-100 mt-12"
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
            src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Carte Cabinet" 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" 
          />
          <div className="absolute inset-0 bg-amber-900/10 pointer-events-none" />
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
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#0f0a07]/98 backdrop-blur-md"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} 
          onClick={onClose}
        >
          <motion.div 
            className="relative max-w-4xl w-full"
            initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <img src={selectedImage} alt="Agrandissement" className="w-full h-auto max-h-[80vh] object-contain rounded-2xl shadow-2xl border-2 border-amber-900/20" />
            <button 
              className="absolute -top-14 right-0 bg-white/10 p-2 rounded-full text-white hover:bg-white/20 transition-all"
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