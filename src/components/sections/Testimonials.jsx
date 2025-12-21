import React from 'react'
import { motion } from 'framer-motion'
import { Quote, Star, Award } from 'lucide-react'
import { useTranslation } from '../../hooks/useTranslation'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
}

export function Testimonials() {
  const { t } = useTranslation()

  const testimonials = [
    {
      name: 'Marie-Laure KONE',
      role: 'Entrepreneure - Création SARL',
      content: t('testimonial-1'),
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=256&q=80',
    },
    {
      name: 'Jean-Pierre DIABATE',
      role: 'Propriétaire - Vente appartement',
      content: t('testimonial-2'),
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=256&q=80',
    },
    {
      name: 'Sophie TRAORE',
      role: 'Chef d\'entreprise - Contentieux commercial',
      content: t('testimonial-3'),
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=256&q=80',
    },
  ]

  return (
    <section className="py-24 bg-[#fdfaf7] relative overflow-hidden">
      {/* Pattern de fond subtil */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%238B4513' fill-opacity='1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")` }} 
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-100/50 border border-amber-200 text-amber-900 text-xs font-bold uppercase tracking-widest mb-6">
            <Award className="w-4 h-4 mr-2" /> Témoignages Clients
          </div>
          <h2 className="text-2xl text-[#5d4037] mb-2 font-medium">{t('testimonials-subtitle')}</h2>
          <h2 className="text-4xl md:text-5xl font-bold text-[#3e2723]">
            {t('testimonials-title')}
          </h2>
        </motion.div>

        {/* Grille de témoignages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-3xl border border-amber-100/50 shadow-xl shadow-amber-900/5 relative group transition-all duration-300"
            >
              {/* Icône de citation stylisée */}
              <div className="absolute top-6 right-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-12 h-12 text-[#3e2723]" />
              </div>

              <div className="flex flex-col items-center text-center">
                {/* Image avec bordure animée */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg relative z-10">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute inset-0 bg-amber-200 rounded-full blur-md opacity-40 scale-110 -z-0" />
                </div>

                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                  ))}
                </div>

                <p className="text-[#5d4037] italic leading-relaxed mb-8 relative z-10">
                  "{item.content}"
                </p>

                <div className="mt-auto">
                  <h3 className="text-lg font-bold text-[#3e2723]">{item.name}</h3>
                  <p className="text-xs font-semibold text-amber-700 uppercase tracking-widest">{item.role}</p>
                </div>
              </div>

              {/* Barre de décoration en bas */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-amber-700 rounded-t-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}