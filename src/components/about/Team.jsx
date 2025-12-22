import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from '../../hooks/useTranslation'
import { Mail, Phone, MapPin, Award, X, ArrowRight, Linkedin, Facebook } from 'lucide-react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import metchouhoImage from '../../assets/Metchouho.jpg'

// Correction des icônes Leaflet (obligatoire pour l'affichage du marqueur)
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'
let DefaultIcon = L.icon({
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;

// --- DONNÉES STATIQUES ---
const teamMembersData = [
  {
    name: 'Me TCHOUHO MEDARD',
    roleKey: 'founder-title',
    specialtyKey: 'business-law-specialty',
    experience: '2 ans',
    image: metchouhoImage,
    descriptionKey: 'founder-description',
    credentials: [
      'Avocat au Barreau du Cameroun', 
      'Avocat au Barreau du Rwanda', 
      'Expert en Droit Des Affaires'
    ],
    socials: {
      whatsapp: "https://wa.me/237677423169",
      linkedin: "https://www.linkedin.com/in/me-medard-tchouho-noudimen-03522b233/",
      facebook: "https://web.facebook.com/medard.tchouho/"
    }
  },
  {
    name: 'Me Marie-Christine KOFFI',
    roleKey: 'associate-lawyer',
    specialtyKey: 'family-law-specialty',
    experience: '5 ans',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=256&q=80',
    descriptionKey: 'associate-description',
    credentials: ['Droit de la Famille', 'Droit Civil', 'Procédures judiciaires'],
    socials: { whatsapp: "#", linkedin: "#", facebook: "#" }
  },
  {
    name: 'Me Patrice KOUAKOU',
    roleKey: 'junior-lawyer',
    specialtyKey: 'property-law-specialty',
    experience: '3 ans',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
    descriptionKey: 'junior-description',
    credentials: ['Droit Immobilier', 'Urbanisme', 'Baux commerciaux'],
    socials: { whatsapp: "#", linkedin: "#", facebook: "#" }
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

export function Team({ onOpenModal }) {
  const { t } = useTranslation()
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <section id="team-section" className="py-24 bg-[#fdfaf7] relative overflow-hidden">
      {/* Pattern de fond */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,...")` }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <motion.div className="text-center mb-20" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
          <motion.div variants={fadeInUp} className="inline-flex items-center px-4 py-2 rounded-full bg-amber-100/50 border border-amber-200 text-amber-900 text-sm font-medium mb-6">
            <Award className="w-4 h-4 mr-2" /> Équipe d'experts
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#3e2723] mb-6 font-serif">Notre équipe</h2>
          <p className="text-xl text-[#5d4037] max-w-3xl mx-auto leading-relaxed">Découvrez notre équipe d'experts juridiques dévoués à votre succès.</p>
        </motion.div>

        {/* Grille des avocats */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {teamMembersData.map((member, index) => (
            <TeamMemberCard key={index} member={member} t={t} onImageClick={() => setSelectedImage(member.image)} onOpenModal={onOpenModal} />
          ))}
        </motion.div>

        {/* LA SECTION LOCATION EST APPELÉE ICI */}
        <LocationSection />
      </div>

      <ImageLightbox selectedImage={selectedImage} onClose={() => setSelectedImage(null)} />
    </section>
  )
}

function TeamMemberCard({ member, t, onImageClick, onOpenModal }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const fullDescription = t(member.descriptionKey);

  return (
    <motion.div className="bg-white rounded-2xl shadow-xl overflow-hidden group border border-amber-100/50 flex flex-col h-full" variants={fadeInUp} whileHover={{ y: -8 }}>
      <div className="relative h-80 overflow-hidden cursor-pointer" onClick={onImageClick}>
        <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0a07] via-transparent to-transparent opacity-90" />
        {member.credentials.some(c => c.includes('Rwanda')) && (
          <div className="absolute top-4 right-4 bg-amber-600 text-white text-[9px] font-bold px-2 py-1 rounded uppercase tracking-tighter shadow-lg z-20">Double Barreau</div>
        )}
        <div className="absolute bottom-4 left-6 right-6 z-10">
          <h3 className="text-xl font-bold !text-white drop-shadow-md font-serif">{member.name}</h3>
          <p className="text-amber-300 font-semibold uppercase text-[10px] tracking-widest">{t(member.roleKey)}</p>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow bg-white text-left">
        <div className="flex items-center justify-between mb-4">
          <span className="text-[10px] font-bold text-amber-900 bg-amber-50 px-3 py-1 rounded-full border border-amber-100 uppercase italic">{t(member.specialtyKey)}</span>
          <span className="text-xs font-medium text-slate-400">{member.experience} exp.</span>
        </div>
        
        <div className="mb-4 space-y-1">
          {member.credentials.filter(c => c.includes('Barreau')).map((bar, i) => (
            <div key={i} className="flex items-center text-[#3e2723] text-xs font-bold">
              <Award className="w-3 h-3 mr-2 text-amber-600" /> {bar}
            </div>
          ))}
        </div>

        <div className="mb-6 border-l-2 border-amber-100 pl-3">
          <p className={`text-[#5d4037] text-sm leading-relaxed italic transition-all duration-300 ${!isExpanded ? 'line-clamp-2' : ''}`}>{fullDescription}</p>
          <button onClick={() => setIsExpanded(!isExpanded)} className="text-amber-700 text-[11px] font-bold mt-2 hover:text-amber-900 underline cursor-pointer">{isExpanded ? "Voir moins" : "Voir plus..."}</button>
        </div>

        <div className="mt-auto">
          <div className="flex items-center justify-center gap-4 mb-6 pt-4 border-t border-slate-100">
            <a href={member.socials.whatsapp} target="_blank" className="p-2.5 bg-green-50 text-green-600 rounded-full hover:bg-green-600 hover:text-white transition-all"><WhatsAppIcon /></a>
            <a href={member.socials.linkedin} target="_blank" className="p-2.5 bg-blue-50 text-blue-700 rounded-full hover:bg-blue-700 hover:text-white transition-all"><Linkedin className="w-5 h-5" /></a>
            <a href={member.socials.facebook} target="_blank" className="p-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-700 hover:text-white transition-all"><Facebook className="w-5 h-5" /></a>
          </div>
          <button onClick={onOpenModal} className="w-full bg-[#3e2723] text-white py-4 rounded-xl font-bold text-sm shadow-lg flex items-center justify-center gap-2 cursor-pointer">Prendre rendez-vous <ArrowRight className="w-4 h-4" /></button>
        </div>
      </div>
    </motion.div>
  )
}

function LocationSection() {
  const position = [3.8616853, 11.5202292]; 
  
  // URL configurée pour tracer l'itinéraire depuis la position de l'utilisateur
  const directionsUrl = "https://www.google.com/maps/dir//Rue+des+Generaux,+VG6C%2BM3H+5e.+Rue+Marc+Vivien+FOE,+(ruelle+des+g%C3%A9n%C3%A9raux,+Yaound%C3%A9,+Cameroun/data=!4m9!4m8!1m0!1m5!1m1!19sChIJf0xpfgDPixARCZ0WB0aET3A!2m2!1d11.5202292!2d3.8616853!3e0";

  return (
    <motion.div 
      className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-amber-100 mt-12 text-[#5d4037]" 
      variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
    >
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-10 border-b border-amber-50 pb-8 text-left w-full">
        <div className="flex items-start">
          <div className="p-4 bg-amber-50 rounded-2xl mr-5 shrink-0">
            <MapPin className="w-7 h-7 text-amber-800" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-[#3e2723] mb-2 font-serif">Notre cabinet</h3>
            <p className="leading-relaxed font-medium">
              Quartier Omnisport, Rue des Généraux,<br />
              Yaoundé, Cameroun
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-end gap-4">
          {/* Message de notification pour la localisation */}
          <p className="text-[11px] text-amber-800/70 font-medium italic max-w-[250px] text-center md:text-right">
            Note : Pour tracer votre itinéraire, autorisez Google Maps à accéder à votre position actuelle lors de la redirection.
          </p>
          
          <a 
            href={directionsUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-[#3e2723] hover:bg-[#1a120b] text-white px-8 py-4 rounded-xl font-bold text-base transition-all shadow-xl active:scale-95 group"
          >
            Tracer l'itinéraire
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

      {/* CARTE AGRANDIE (600px) */}
      <div className="relative w-full h-[600px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white z-0">
        <MapContainer 
          center={position} 
          zoom={17} 
          scrollWheelZoom={false} 
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              <div className="text-center p-2">
                <strong className="text-[#3e2723] block mb-1">Cabinet Maître TCHOUHO</strong>
                <span className="text-xs text-amber-800 font-medium italic">Rue des Généraux, Yaoundé</span>
              </div>
            </Popup>
          </Marker>
        </MapContainer>
        <div className="absolute inset-0 bg-amber-900/5 pointer-events-none rounded-3xl z-10" />
      </div>
    </motion.div>
  );
}
function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  );
}

function ImageLightbox({ selectedImage, onClose }) {
  return (
    <AnimatePresence>
      {selectedImage && (
        <motion.div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#0f0a07]/98 backdrop-blur-md" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
          <motion.div className="relative max-w-4xl w-full" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Agrandissement" className="w-full h-auto max-h-[80vh] object-contain rounded-2xl shadow-2xl border-2 border-amber-900/20" />
            <button className="absolute -top-14 right-0 bg-white/10 p-2 rounded-full text-white hover:bg-white/20 transition-all cursor-pointer" onClick={onClose}><X className="w-8 h-8" /></button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}