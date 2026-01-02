import React from 'react'
import { motion } from 'framer-motion'
import { Scale, Clock, Shield, Smile, BarChart, Award } from 'lucide-react'


// --- VARIANTES ---
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const scaleIn = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
}

export function WhyChooseUs() {
  

  const benefits = [
    { title: ('expertise-title'), desc: ('expertise-desc'), icon: <BarChart />, pos: "lg:top-10 lg:left-0" },
    { title: ('confidentiality-title'), desc: ('confidentiality-desc'), icon: <Scale />, pos: "lg:top-1/2 lg:-left-20 lg:-translate-y-1/2" },
    { title: ('results-title'), desc: ('results-desc'), icon: <Shield />, pos: "lg:bottom-10 lg:left-0" },
    { title: ('availability-title'), desc: ('availability-desc'), icon: <Clock />, pos: "lg:top-10 lg:right-0" },
    { title: "Service client", desc: "Accompagnement personnalisé et suivi de qualité", icon: <Award />, pos: "lg:top-1/2 lg:-right-20 lg:-translate-y-1/2" },
    { title: "Localisation", desc: "Situé au quartier Omnisport pour votre commodité", icon: <Smile />, pos: "lg:bottom-10 lg:right-0" },
  ]

  return (
    <section id="about-section" className="py-24 bg-[#fdfaf7] relative overflow-hidden">
      {/* Pattern de fond */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%238B4513' fill-opacity='1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")` }} 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#3e2723]">
            {('why-choose-us')}
          </h2>
          <div className="w-24 h-1.5 bg-amber-700 mx-auto mt-6 rounded-full" />
        </motion.div>

        <div className="relative min-h-[600px] flex items-center justify-center">
          
          {/* Image Centrale (Prestigieuse) */}
          <motion.div 
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative z-20 w-64 h-64 md:w-80 md:h-80 rounded-3xl bg-white shadow-2xl flex items-center justify-center border-8 border-white overflow-hidden rotate-3"
          >
            <img
              src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Justice & Droit"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#3e2723]/10" />
          </motion.div>

          {/* Items de bénéfices autour */}
          <div className="absolute inset-0 hidden lg:block">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                className={`absolute ${benefit.pos} w-64 flex items-center gap-4 group`}
                initial={{ opacity: 0, x: benefit.pos.includes('left') ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.8 }}
              >
                {/* Ordre Icône/Texte inversé pour le côté droit */}
                {benefit.pos.includes('right') ? (
                  <>
                    <div className="w-12 h-12 rounded-xl bg-white shadow-md flex items-center justify-center text-amber-800 border border-amber-100 group-hover:bg-amber-700 group-hover:text-white transition-all duration-300">
                      {React.cloneElement(benefit.icon, { className: "w-6 h-6" })}
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold text-[#3e2723] text-sm">{benefit.title}</h3>
                      <p className="text-[11px] text-[#5d4037] leading-tight">{benefit.desc}</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="text-right">
                      <h3 className="font-bold text-[#3e2723] text-sm">{benefit.title}</h3>
                      <p className="text-[11px] text-[#5d4037] leading-tight">{benefit.desc}</p>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-white shadow-md flex items-center justify-center text-amber-800 border border-amber-100 group-hover:bg-amber-700 group-hover:text-white transition-all duration-300">
                      {React.cloneElement(benefit.icon, { className: "w-6 h-6" })}
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>

          {/* Vue Mobile / Tablette (Grille simple) */}
          <div className="lg:hidden grid grid-cols-2 md:grid-cols-3 gap-6 w-full mt-20">
            {benefits.map((benefit, idx) => (
              <motion.div 
                key={idx}
                className="flex flex-col items-center text-center p-4 bg-white rounded-2xl shadow-sm border border-amber-50"
                variants={fadeInUp}
              >
                <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-800 flex items-center justify-center mb-3">
                  {React.cloneElement(benefit.icon, { className: "w-5 h-5" })}
                </div>
                <h3 className="font-bold text-[#3e2723] text-xs mb-1">{benefit.title}</h3>
                <p className="text-[10px] text-slate-500 leading-tight line-clamp-2">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}