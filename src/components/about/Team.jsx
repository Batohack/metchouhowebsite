import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Phone, MapPin, Award, X, ArrowRight, Linkedin, Facebook } from 'lucide-react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import metchouhoImage from '../../assets/TChcard.jpeg'
import nouDjomImage from '../../assets/NouDjomCard.jpeg'
import tangImage from '../../assets/Tangcard.jpeg'
import { LawyerDetailsModal } from './LawyerDetailsModal'

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
    roleKey: 'Avocat International & Fondateur',
    image: metchouhoImage,
    experience: '2 ans',
    credentials: [
      'Avocat au Barreau du Cameroun',
      'Expert en Droit des Affaires',
      'Spécialiste en Droit International'
    ],
    specialties: [
      'Droit des Affaires',
      'Droit International',
      'Contentieux Commercial',
      'Conseil Juridique'
    ],
    fullDescription: 'Me Tchouho Medard est le fondateur et directeur du cabinet. Avec 2 ans d\'expérience intensive en droit international et des affaires, il a accompagné de nombreuses entreprises camerounaises et internationales. Son expertise couvre la structuration d\'entreprises, les négociations commerciales complexes et la résolution de litiges stratégiques. Passionné par l\'excellence juridique, il s\'engage à fournir des conseils stratégiques adaptés à chaque client.',
    location: 'Quartier Omnisport, Rue des Généraux, Yaoundé',
    socials: {
      whatsapp: "https://wa.me/237677423169",
      linkedin: "https://www.linkedin.com/in/me-medard-tchouho-noudimen-03522b233/",
      facebook: "https://web.facebook.com/medard.tchouho/"
    }
  },
  {
    name: 'Me NOUDJOM PENE Daniele',
    roleKey: 'Avocat Associé en Droit de la Famille',
    image: nouDjomImage,
    experience: '5 ans',
    credentials: [
      'Spécialiste en Droit de la Famille',
      'Expert en Droit Civil',
      'Procédures Judiciaires',
      'Médiation Familiale'
    ],
    specialties: [
      'Droit de la Famille',
      'Droit Civil',
      'Procédures Judiciaires',
      'Médiation & Conciliation'
    ],
    fullDescription: 'Me Noudjom Pene Daniele est une experte reconue en droit de la famille et droit civil. Avec 5 ans d\'expérience, elle a géré avec succès des dossiers de succession, de divorce et de tutelle. Dotée d\'une grande empathie, elle accompagne ses clients avec sensibilité dans les moments difficiles. Son approche combine rigueur juridique et humanité pour trouver des solutions justes et durables.',
    location: 'Quartier Omnisport, Yaoundé, Cameroun',
    socials: { whatsapp: "#", linkedin: "#", facebook: "#" }
  },
  {
    name: 'Me TANG NDZANA Julie Emmanuel',
    roleKey: 'Avocat Associé - Droit Immobilier',
    image: tangImage,
    experience: '3 ans',
    credentials: [
      'Spécialiste en Droit Immobilier',
      'Expert en Urbanisme et Aménagement',
      'Contrats Commerciaux Immobiliers',
      'Droit de la Propriété'
    ],
    specialties: [
      'Droit Immobilier',
      'Urbanisme & Aménagement',
      'Baux Commerciaux',
      'Transactions Immobilières'
    ],
    fullDescription: 'Me Tang Ndzana Julie Emmanuel apporte son expertise spécialisée en droit immobilier au cabinet. Avec 3 ans d\'expérience, elle maîtrise les enjeux complexes de l\'immobilier et de l\'urbanisme camerounais. Elle conseille entreprises et particuliers dans leurs transactions immobilières, la rédaction de contrats et la gestion des litiges fonciers. Son pragmatisme et sa connaissance approfondie du cadre légal en font une avocate de confiance.',
    location: 'Quartier Omnisport, Yaoundé',
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

  const [selectedImage, setSelectedImage] = useState(null)
  const [selectedLawyer, setSelectedLawyer] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

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
            <TeamMemberCard key={index} member={member} onImageClick={() => setSelectedImage(member.image)} onOpenModal={onOpenModal} onDetailClick={(lawyer) => { setSelectedLawyer(lawyer); setIsModalOpen(true); }} />
          ))}
        </motion.div>

      </div>

      <ImageLightbox selectedImage={selectedImage} onClose={() => setSelectedImage(null)} />
      <LawyerDetailsModal lawyer={selectedLawyer} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}

function TeamMemberCard({ member, t, onImageClick, onOpenModal, onDetailClick }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div className="bg-white rounded-2xl shadow-xl overflow-hidden group border border-amber-100/50 flex flex-col h-full" variants={fadeInUp} whileHover={{ y: -8 }}>
      <div className="relative h-80 overflow-hidden cursor-pointer" onClick={onImageClick}>
        <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0a07] via-transparent to-transparent opacity-90" />

        <div className="absolute bottom-4 left-6 right-6 z-10">
          <h3 className="text-xl font-bold !text-white drop-shadow-md font-serif">{member.name}</h3>
          <p className="text-amber-300 font-semibold uppercase text-[10px] tracking-widest">{member.roleKey}</p>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow bg-white text-left">
        {/* Spécialités */}
        {member.specialties && (
          <div className="mb-4 space-y-1">
            {member.specialties.slice(0, 2).map((specialty, idx) => (
              <span key={idx} className="inline-block text-[10px] font-bold text-amber-900 bg-amber-50 px-2 py-1 rounded-full border border-amber-100 uppercase italic mr-2">
                {specialty}
              </span>
            ))}
          </div>
        )}
        
        {/* Description brève */}
        <div className="mb-6 border-l-2 border-amber-100 pl-3">
          <p className="text-[#5d4037] text-sm leading-relaxed italic">
            {member.experience && <span className="block font-semibold mb-2 text-amber-700">{member.experience} d'expérience</span>}
            {member.credentials && member.credentials[0] && (
              <span className="text-xs text-[#5d4037]">{member.credentials[0]}</span>
            )}
          </p>
        </div>

        <div className="mt-auto space-y-3">
          {/* Bouton En savoir plus */}
          <button 
            onClick={() => onDetailClick(member)}
            className="w-full bg-gradient-to-r from-amber-100 to-orange-100 hover:from-amber-200 hover:to-orange-200 text-amber-900 py-3 rounded-xl font-bold text-sm transition-all duration-300 border border-amber-200 flex items-center justify-center gap-2"
          >
            En savoir plus
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Réseaux sociaux */}
          <div className="flex items-center justify-center gap-4 pt-3 border-t border-slate-100">
            <a href={member.socials.whatsapp} target="_blank" rel="noopener noreferrer" className="p-2.5 bg-green-50 text-green-600 rounded-full hover:bg-green-600 hover:text-white transition-all"><WhatsAppIcon /></a>
            <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-2.5 bg-blue-50 text-blue-700 rounded-full hover:bg-blue-700 hover:text-white transition-all"><Linkedin className="w-5 h-5" /></a>
            <a href={member.socials.facebook} target="_blank" rel="noopener noreferrer" className="p-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-700 hover:text-white transition-all"><Facebook className="w-5 h-5" /></a>
          </div>

          {/* Prendre rendez-vous */}
          <button onClick={onOpenModal} className="w-full bg-[#3e2723] text-white py-3 rounded-xl font-bold text-sm shadow-lg flex items-center justify-center gap-2 cursor-pointer hover:bg-[#2a1a11] transition-all">Prendre rendez-vous <ArrowRight className="w-4 h-4" /></button>
        </div>
      </div>
    </motion.div>
  )
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