import React from 'react'
import { motion } from 'framer-motion'
import {
  FileText,
  Building,
  Gavel,
  FileCheck,
  Landmark,
  Scale,
  Award
} from 'lucide-react'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

export function FeaturesGrid() {
  const features = [
    { title: 'Immigration assistance', icon: <FileText /> },
    { title: 'Intellectual property', icon: <Building /> },
    { title: 'Compliance lawyer', icon: <Gavel /> },
    { title: 'Making a will', icon: <FileCheck /> },
    { title: 'Legal documentation', icon: <Scale /> },
    { title: 'Estate planning', icon: <Landmark /> },
  ]

  return (
    <section className="py-24 bg-[#fdfaf7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* En-tête de section */}
        <motion.div 
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-100/50 border border-amber-200 text-amber-900 text-xs font-bold uppercase tracking-widest mb-6">
            <Award className="w-4 h-4 mr-2" /> Plateforme Innovante
          </div>
          <h2 className="text-2xl text-[#5d4037] mb-2 font-medium">Découvrez une solution juridique</h2>
          <h2 className="text-4xl md:text-5xl font-bold text-[#3e2723]">
            plus intelligente à portée de main
          </h2>
          <div className="w-24 h-1.5 bg-amber-700 mx-auto mt-8 rounded-full" />
        </motion.div>

        {/* Grille de fonctionnalités */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group relative p-4 transition-all duration-300"
            >
              {/* Icône avec cercle décoratif subtil */}
              <div className="relative mb-6">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-amber-100 flex items-center justify-center text-amber-800 group-hover:bg-[#3e2723] group-hover:text-white transition-all duration-300 z-10 relative">
                  {React.cloneElement(feature.icon, { className: "w-6 h-6" })}
                </div>
                <div className="absolute -top-2 -left-2 w-14 h-14 bg-amber-200/20 rounded-2xl group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300" />
              </div>

              <h3 className="text-xl font-bold text-[#3e2723] mb-3 group-hover:text-amber-800 transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-[#5d4037] text-sm leading-relaxed mb-4 border-l-2 border-amber-100 pl-4">
                Une approche moderne et simplifiée pour gérer vos besoins en {feature.title.toLowerCase()} avec nos experts.
              </p>
              
              <div className="h-px w-full bg-gradient-to-r from-amber-200/50 to-transparent mt-6" />
            </motion.div>
          ))}
        </motion.div>

        {/* Action Button */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.button 
            whileHover={{ scale: 1.05, backgroundColor: "#5d4037" }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#3e2723] text-white px-10 py-4 rounded-xl font-bold shadow-xl transition-all"
          >
            Consulter un avocat
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}