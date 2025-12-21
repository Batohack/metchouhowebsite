import React from 'react'
import { motion } from 'framer-motion'
import {
  Clock,
  ThumbsUp,
  Shield,
  MessageCircle,
  Video,
  Phone,
  FileText,
  ArrowRight
} from 'lucide-react'
import { useTranslation } from '../../hooks/useTranslation'

// --- VARIANTES D'ANIMATION ---
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const floating = {
  animate: {
    y: [0, -10, 0],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
  }
}

export function ConsultationFlow() {
  const { t } = useTranslation()

  const steps = [
    { icon: <Clock />, text: "Gagnez du temps et de l'argent", color: "bg-amber-100 text-amber-900" },
    { icon: <ThumbsUp />, text: "Conseils stratégiques", color: "bg-orange-100 text-orange-900" },
    { icon: <Shield />, text: "Appels 100% confidentiels", color: "bg-[#3e2723]/10 text-[#3e2723]" },
    { icon: <MessageCircle />, text: t('step-1-title'), color: "bg-red-50 text-red-900" }
  ]

  return (
    <section className="py-24 bg-[#fdfaf7] relative overflow-hidden">
      {/* Pattern de fond identique */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%238B4513' fill-opacity='1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")` }} 
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Côté Gauche: Visuel Interactif */}
          <div className="relative order-2 lg:order-1">
            
            {/* Éléments de flux (Badges) */}
            <div className="space-y-6 relative z-10">
              {steps.map((step, idx) => (
                <motion.div 
                  key={idx}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-amber-100/50 max-w-sm hover:shadow-md transition-shadow"
                >
                  <div className={`p-3 rounded-xl ${step.color}`}>
                    {React.cloneElement(step.icon, { className: "w-5 h-5" })}
                  </div>
                  <span className="font-bold text-[#3e2723]">{step.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Avatar Central Flottant */}
            <motion.div 
              variants={floating}
              animate="animate"
              className="absolute top-1/2 left-2/3 transform -translate-x-1/2 -translate-y-1/2 hidden md:block"
            >
              <div className="w-32 h-32 rounded-3xl overflow-hidden border-8 border-white shadow-2xl rotate-3">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="Avocat Conseil"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Petits badges d'action flottants autour de l'image */}
              <motion.div className="absolute -top-4 -right-4 bg-white p-3 rounded-xl shadow-lg border border-amber-50" whileHover={{ scale: 1.1 }}>
                <Phone className="w-4 h-4 text-orange-600" />
              </motion.div>
              <motion.div className="absolute -bottom-4 -left-4 bg-white p-3 rounded-xl shadow-lg border border-amber-50" whileHover={{ scale: 1.1 }}>
                <Video className="w-4 h-4 text-green-600" />
              </motion.div>
            </motion.div>

            {/* Décoration de fond (Cercle Marron) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-amber-200/20 rounded-full blur-3xl -z-10" />
          </div>

          {/* Côté Droit: Contenu Texte */}
          <motion.div 
            className="space-y-8 order-1 lg:order-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-[#3e2723] leading-tight">
                {t('consultation-title')}
              </h2>
              <div className="w-20 h-1.5 bg-amber-700 rounded-full" />
            </div>

            <p className="text-[#5d4037] text-lg leading-relaxed">
              Notre processus de consultation est conçu pour être simple et sans friction. 
              De la prise de contact initiale à la résolution de votre dossier, 
              nous utilisons les meilleurs outils technologiques pour rester proches de vous.
            </p>

            <div className="grid grid-cols-2 gap-4 py-4">
                <div className="flex items-center gap-2 text-[#3e2723] font-semibold">
                    <div className="w-2 h-2 bg-amber-700 rounded-full" /> Visio-conférence
                </div>
                <div className="flex items-center gap-2 text-[#3e2723] font-semibold">
                    <div className="w-2 h-2 bg-amber-700 rounded-full" /> Partage de documents
                </div>
            </div>

            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#3e2723] hover:bg-[#5d4037] text-white px-10 py-4 rounded-xl font-bold shadow-xl flex items-center gap-3 transition-all"
            >
              {t('talk-to-lawyer')}
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>

        </div>
      </div>
    </section>
  )
}