import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Scale, Clock, Shield, Smile, BarChart, Award, ArrowRight } from 'lucide-react'


// --- VARIANTES ---
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, staggerChildren: 0.15 } }
}

export function WhyChooseUs() {
  const [hoveredCard, setHoveredCard] = useState(null)

  const benefits = [
    { 
      title: 'Expertise Reconnue', 
      desc: 'Nos avocats disposent de qualifications et d\'expériences internationales pour résoudre vos enjeux juridiques complexes',
      icon: <BarChart />,
      color: 'from-amber-500 to-amber-600'
    },
    { 
      title: 'Confidentialité Absolue', 
      desc: 'Respect strict du secret professionnel et protection maximale de vos données personnelles et professionnelles',
      icon: <Scale />,
      color: 'from-blue-500 to-blue-600'
    },
    { 
      title: 'Résultats Probants', 
      desc: 'Stratégie juridique éprouvée pour maximiser vos chances de succès et protéger vos intérêts',
      icon: <Shield />,
      color: 'from-green-500 to-green-600'
    },
    { 
      title: 'Disponibilité 24/7', 
      desc: 'Support continu pour vos urgences juridiques, nous sommes toujours là pour vous',
      icon: <Clock />,
      color: 'from-red-500 to-red-600'
    },
    { 
      title: 'Accompagnement Personnel', 
      desc: 'Service sur mesure adapté à vos besoins spécifiques avec suivi régulier',
      icon: <Award />,
      color: 'from-purple-500 to-purple-600'
    },
    { 
      title: 'Localisation Stratégique', 
      desc: 'Au cœur du quartier Omnisport à Yaoundé, facilement accessible à tous',
      icon: <Smile />,
      color: 'from-pink-500 to-pink-600'
    },
  ]

  return (
    <section id="about-section" className="py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-[#fdfaf7] to-white relative overflow-hidden">
      {/* Décoration de fond */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100/20 rounded-full blur-3xl -mr-48 -mt-48 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-100/10 rounded-full blur-3xl -ml-48 -mb-48 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#3e2723] mb-4">
            À propos de nous
          </h2>
          <p className="text-[#5d4037] text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            Découvrez les valeurs qui font notre force et notre engagement envers vous
          </p>
          <div className="w-24 h-1.5 bg-gradient-to-r from-amber-600 to-amber-400 mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Grille de cartes moderne */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {benefits.map((benefit, idx) => (
            <motion.div 
              key={idx}
              variants={fadeInUp}
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group h-full cursor-pointer"
            >
              <motion.div 
                className="relative h-full bg-white rounded-3xl p-6 sm:p-8 shadow-lg border border-white overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                whileHover={{ y: -8 }}
              >
                {/* Gradient background */}
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${benefit.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-bl-full`} />
                
                {/* Icon Circle */}
                <motion.div 
                  className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-6 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 6 }}
                >
                  {React.cloneElement(benefit.icon, { className: "w-7 h-7" })}
                </motion.div>

                {/* Titre */}
                <h3 className="text-lg sm:text-xl font-bold text-[#3e2723] mb-3 leading-snug">
                  {benefit.title}
                </h3>

                {/* Divider */}
                <div className={`w-8 h-1 bg-gradient-to-r ${benefit.color} rounded-full mb-4 group-hover:w-16 transition-all duration-300`} />

                {/* Description */}
                <p className="text-sm text-[#5d4037] leading-relaxed mb-4">
                  {benefit.desc}
                </p>

                {/* Arrow icon */}
                <motion.div 
                  className="flex items-center text-amber-700 font-semibold text-sm group-hover:text-amber-900"
                  animate={{ x: hoveredCard === idx ? 8 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  En savoir plus
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </motion.div>

                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${benefit.color} w-0 group-hover:w-full transition-all duration-500`} />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Image section - Bas de la page */}
        <motion.div 
          className="mt-16 sm:mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white bg-white">
            <img
              src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Justice & Droit"
              className="w-full h-64 sm:h-80 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#3e2723]/20 via-transparent to-transparent" />
            
            {/* Overlay text */}
            <div className="absolute inset-0 flex items-end p-6 sm:p-8">
              <div className="text-white">
                <h3 className="text-2xl sm:text-3xl font-bold mb-2">Liberté & Justice</h3>
                <p className="text-sm sm:text-base text-white/90">Votre confiance est notre priorité</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}