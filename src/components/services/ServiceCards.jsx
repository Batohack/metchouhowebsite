import React from 'react'
import { motion } from 'framer-motion'
import { FileText, Users, Heart, Briefcase, Scale, Award, ArrowRight } from 'lucide-react'
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
    { title: t('business-title'), description: t('business-desc'), icon: <Scale />, highlight: true },
    { title: t('succession-title'), description: t('succession-desc'), icon: <Briefcase /> },
  ]

  return (
    <section className="py-24 bg-[#fdfaf7] relative overflow-hidden">
      {/* Pattern de fond subtil */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%238B4513' fill-opacity='1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")` }} 
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
          
          {/* Texte d'introduction */}
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
          </motion.div>

          {/* Grille de Cartes */}
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
                whileHover={{ 
                  y: -8, 
                  transition: { duration: 0.3 },
                  boxShadow: service.highlight 
                    ? "0 0 30px rgba(217, 119, 6, 0.3)" // Glow plus diffus
                    : "0 20px 40px -15px rgba(62, 39, 35, 0.1)" 
                }}
                // MODIFICATION : bg-[#2d1b18] est plus clair que #1a120b mais reste prestigieux
                className={`group p-8 rounded-3xl border transition-all duration-300 cursor-pointer relative overflow-hidden
                  ${service.highlight 
                    ? 'bg-[#2d1b18] border-amber-800/30' 
                    : 'bg-white border-amber-100/50 shadow-sm'
                  }`}
              >
                {/* Effet de reflet interne pour éclaircir la carte sombre */}
                {service.highlight && (
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
                )}

                {/* Icône */}
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm transition-transform group-hover:scale-110 duration-300
                  ${service.highlight ? 'bg-amber-600/40 text-white' : 'bg-amber-50 text-amber-800'}`}>
                  {React.cloneElement(service.icon, { className: "w-7 h-7" })}
                </div>
                
                {/* Titre */}
                <h3 className={`text-xl font-bold mb-3 tracking-tight ${service.highlight ? 'text-white brightness-110' : 'text-[#3e2723]'}`}>
                  {service.title}
                </h3>
                
                {/* Description - Plus claire (Blanc pur) */}
                <p className={`text-sm leading-relaxed mb-6 font-medium ${service.highlight ? 'text-white' : 'text-[#5d4037]'}`}>
                  {service.description}
                </p>

                {/* Lien interactif */}
                <div className={`flex items-center text-xs font-bold uppercase tracking-widest transition-all duration-300
                  ${service.highlight ? 'text-amber-400' : 'text-amber-800 opacity-60 group-hover:opacity-100'}`}>
                  En savoir plus 
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}