import { motion, AnimatePresence } from 'framer-motion'
import { X, Award, BookOpen, Heart, MapPin, ArrowRight, ChevronDown } from 'lucide-react'
import { useState } from 'react'

export function LawyerDetailsModal({ lawyer, isOpen, onClose }) {
  const [expandedSections, setExpandedSections] = useState({ about: false })

  if (!lawyer) return null

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop - click to close */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          />

          {/* Modal - Slide up from bottom on mobile, centered on desktop */}
          <motion.div
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={{ type: "spring", stiffness: 400, damping: 40 }}
            className="fixed bottom-0 left-0 right-0 md:inset-0 md:flex md:items-center md:justify-center z-50 md:p-4"
            onClick={onClose}
          >
            {/* Modal content */}
            <motion.div
              onClick={(e) => e.stopPropagation()}
              className="bg-white w-full md:max-w-2xl md:rounded-2xl rounded-t-3xl shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              {/* Header avec close button - Sticky */}
              <div className="sticky top-0 bg-white border-b border-amber-100 p-4 flex items-center justify-between md:rounded-t-2xl z-10">
                <h2 className="text-lg sm:text-xl font-bold text-[#3e2723] flex-1 truncate">
                  {lawyer.name}
                </h2>
                <motion.button
                  onClick={onClose}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 hover:bg-amber-50 rounded-full transition-colors ml-2 flex-shrink-0"
                >
                  <X className="w-6 h-6 text-[#3e2723]" />
                </motion.button>
              </div>

              {/* Image + Role */}
              <div className="relative h-40 sm:h-48 overflow-hidden bg-gradient-to-b from-amber-100 to-orange-50">
                <img
                  src={lawyer.image}
                  alt={lawyer.name}
                  className="w-full h-full object-cover brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                <p className="absolute bottom-3 left-4 text-amber-700 font-bold text-sm uppercase tracking-wider">
                  {lawyer.roleKey}
                </p>
              </div>

              {/* Content - Simple & Clean */}
              <div className="p-4 sm:p-6 space-y-4">
                
                {/* Experience highlight */}
                {lawyer.experience && (
                  <div className="bg-amber-50 border-l-4 border-amber-700 p-4 rounded-r-lg">
                    <p className="text-2xl font-bold text-amber-900">{lawyer.experience}</p>
                    <p className="text-sm text-amber-700 font-medium">d'expérience</p>
                  </div>
                )}

                {/* Spécialités */}
                {lawyer.specialties && lawyer.specialties.length > 0 && (
                  <div>
                    <h3 className="text-base font-bold text-[#3e2723] mb-3 flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-amber-700" />
                      Spécialités
                    </h3>
                    <div className="space-y-2">
                      {lawyer.specialties.map((specialty, idx) => (
                        <div key={idx} className="flex items-center gap-2 p-2 bg-amber-50/50 rounded-lg">
                          <span className="w-2 h-2 bg-amber-700 rounded-full" />
                          <p className="text-sm text-[#3e2723] font-medium">{specialty}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Qualifications */}
                {lawyer.credentials && lawyer.credentials.length > 0 && (
                  <div>
                    <h3 className="text-base font-bold text-[#3e2723] mb-3 flex items-center gap-2">
                      <Award className="w-5 h-5 text-amber-700" />
                      Qualifications
                    </h3>
                    <div className="space-y-2">
                      {lawyer.credentials.map((cred, idx) => (
                        <div key={idx} className="flex items-start gap-2 p-2">
                          <span className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2 flex-shrink-0" />
                          <p className="text-sm text-[#5d4037]">{cred}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* À propos - Expandable on mobile */}
                {lawyer.fullDescription && (
                  <div>
                    <button
                      onClick={() => toggleSection('about')}
                      className="w-full flex items-center justify-between p-3 bg-orange-50 hover:bg-orange-100 rounded-lg transition-colors text-left"
                    >
                      <div className="flex items-center gap-2">
                        <Heart className="w-5 h-5 text-amber-700" />
                        <span className="font-bold text-[#3e2723]">À propos</span>
                      </div>
                      <motion.div
                        animate={{ rotate: expandedSections.about ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="w-5 h-5 text-amber-700" />
                      </motion.div>
                    </button>
                    <motion.div
                      initial={false}
                      animate={{ height: expandedSections.about ? 'auto' : 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-sm text-[#5d4037] leading-relaxed p-4 bg-orange-50/30">
                        {lawyer.fullDescription}
                      </p>
                    </motion.div>
                  </div>
                )}

                {/* Localisation */}
                {lawyer.location && (
                  <div className="flex items-start gap-3 p-3 bg-amber-50 rounded-lg">
                    <MapPin className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-[#3e2723] font-medium">{lawyer.location}</p>
                  </div>
                )}

                {/* CTA Button - Full width and easy to tap */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-amber-700 to-orange-600 hover:from-amber-800 hover:to-orange-700 text-white font-bold py-3 sm:py-4 rounded-lg transition-all flex items-center justify-center gap-2 mt-6 text-sm sm:text-base"
                >
                  Prendre rendez-vous
                  <ArrowRight className="w-4 h-4" />
                </motion.button>

                {/* Bottom padding for mobile safety area */}
                <div className="h-4" />
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
