import React from 'react'
import { motion } from 'framer-motion'
import { FileText, Users, Heart, Briefcase, Scale, Award } from 'lucide-react'
import { useTranslation } from '../../hooks/useTranslation'

// --- VARIANTES D'ANIMATION ---
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
}

export function ServiceCards() {
  const { t } = useTranslation()

  const services = [
    { title: t('immigration-title'), description: t('immigration-desc'), icon: <FileText /> },
    { title: t('property-title'), description: t('property-desc'), icon: <Briefcase />, highlight: true },
    { title: t('family-title'), description: t('family-desc'), icon: <Heart /> },
    { title: t('civil-title'), description: t('civil-desc'), icon: <Users /> },
    { title: t('business-title'), description: t('business-desc'), icon: <Scale /> },
    { title: t('succession-title'), description: t('succession-desc'), icon: <Briefcase /> },
  ]

  return (
    <section className="py-24 bg-[#fdfaf7] relative overflow-hidden">
      {/* Pattern de fond identique à la section Team pour la continuité */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%238B4513' fill-opacity='1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")` }} 
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
          
          {/* Texte d'introduction (Côté Gauche) */}
          <motion.div 
            className="lg:col-span-2 space-y-6 lg:sticky lg:top-32"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-100/50 border border-amber-200 text-amber-900 text-xs font-bold uppercase tracking-widest">
              <Award className="w-4 h-4 mr-2" /> Expertise Juridique
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#3e2723]">Nos services</span>
              <br />
              <span className="text-amber-700">juridiques</span>
            </h2>
            <p className="text-[#5d4037] text-lg leading-relaxed max-w-md">
              Notre cabinet vous offre une expertise complète. De la création d'entreprise 
              aux contentieux complexes, nous vous accompagnons avec détermination.
            </p>
            <motion.button 
              whileHover={{ x: 5 }}
              className="flex items-center text-[#3e2723] font-bold border-b-2 border-amber-700 pb-1"
            >
              Découvrir tous nos domaines <ArrowRightIcon className="ml-2 w-4 h-4" />
            </motion.button>
          </motion.div>

          {/* Grille de Cartes (Côté Droit) */}
          <motion.div 
            className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5, boxShadow: "0 20px 40px -15px rgba(62, 39, 35, 0.1)" }}
                className={`group p-8 rounded-2xl border transition-all duration-300 cursor-pointer
                  ${service.highlight 
                    ? 'bg-[#3e2723] border-[#3e2723] shadow-xl' 
                    : 'bg-white border-amber-100/50 shadow-sm hover:border-amber-200'
                  }`}
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300
                  ${service.highlight ? 'bg-amber-700/20 text-amber-200' : 'bg-amber-50 text-amber-800'}`}>
                  {React.cloneElement(service.icon, { className: "w-7 h-7" })}
                </div>
                
                <h3 className={`text-xl font-bold mb-3 ${service.highlight ? 'text-white' : 'text-[#3e2723]'}`}>
                  {service.title}
                </h3>
                
                <p className={`text-sm leading-relaxed ${service.highlight ? 'text-white/80' : 'text-slate-600'}`}>
                  {service.description}
                </p>

                <div className={`mt-6 flex items-center text-xs font-bold uppercase tracking-wider transition-opacity duration-300
                  ${service.highlight ? 'text-amber-200' : 'text-amber-800 opacity-0 group-hover:opacity-100'}`}>
                  En savoir plus <ArrowRightIcon className="ml-2 w-3 h-3" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Petit composant icône interne
function ArrowRightIcon(props) {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  )
}