import { motion, AnimatePresence } from 'framer-motion'
import { X, Award, BookOpen, Heart, MapPin, ArrowRight } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
}

export function LawyerDetailsModal({ lawyer, isOpen, onClose }) {
  if (!lawyer) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop avec blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          />

          {/* Modal container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 40 }}
            transition={{ type: "spring", stiffness: 300, damping: 25, duration: 0.4 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 lg:p-8"
            onClick={onClose}
          >
            {/* Modal content */}
            <motion.div
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl w-full max-w-2xl max-h-[95vh] sm:max-h-[90vh] overflow-y-auto scrollbar-hide"
              layoutId={`lawyer-modal-${lawyer.name}`}
            >
              {/* Header avec image */}
              <motion.div className="relative h-48 sm:h-64 md:h-80 overflow-hidden bg-gradient-to-b from-amber-100 to-orange-50">
                {/* Image avec parallax */}
                <motion.img
                  src={lawyer.image}
                  alt={lawyer.name}
                  className="w-full h-full object-cover brightness-110"
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
                
                {/* Gradient overlay */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-[#0f0a07] via-transparent to-transparent opacity-80"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.8 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                />

                {/* Close button */}
                <motion.button
                  onClick={onClose}
                  type="button"
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute top-3 sm:top-4 right-3 sm:right-4 p-2.5 sm:p-3 bg-white hover:bg-amber-50 rounded-full shadow-lg hover:shadow-xl z-50 pointer-events-auto cursor-pointer transition-all duration-300 border border-white/50 hover:border-amber-200 backdrop-blur-md"
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6 text-[#3e2723] stroke-[2.5]" />
                </motion.button>

                {/* Title overlay */}
                <motion.div 
                  className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 right-3 sm:right-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 sm:mb-2 font-serif drop-shadow-lg">
                    {lawyer.name}
                  </h2>
                  <motion.p 
                    className="text-amber-300 font-semibold uppercase text-xs sm:text-sm tracking-widest drop-shadow"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                  >
                    {lawyer.roleKey}
                  </motion.p>
                </motion.div>
              </motion.div>

              {/* Content */}
              <motion.div 
                className="p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {/* Expérience highlight */}
                {lawyer.experience && (
                  <motion.div
                    variants={itemVariants}
                    className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-700 rounded-xl p-4 sm:p-5"
                  >
                    <p className="text-2xl sm:text-3xl font-bold text-amber-900">
                      {lawyer.experience}
                    </p>
                    <p className="text-sm sm:text-base text-amber-800 font-medium">
                      d'expérience professionnelle
                    </p>
                  </motion.div>
                )}

                {/* Spécialités */}
                {lawyer.specialties && lawyer.specialties.length > 0 && (
                  <motion.div variants={itemVariants}>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#3e2723] mb-3 sm:mb-4 flex items-center gap-2">
                      <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-amber-700 flex-shrink-0" />
                      Spécialités
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                      {lawyer.specialties.map((specialty, idx) => (
                        <motion.div
                          key={idx}
                          variants={itemVariants}
                          whileHover={{ y: -4, boxShadow: "0 8px 16px rgba(180, 83, 9, 0.15)" }}
                          className="bg-white border-2 border-amber-200 hover:border-amber-400 rounded-xl p-3 sm:p-4 transition-all duration-300 cursor-default"
                        >
                          <div className="flex items-start gap-2">
                            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-gradient-to-br from-amber-600 to-orange-600 rounded-full mt-1.5 flex-shrink-0" />
                            <p className="text-xs sm:text-sm font-semibold text-[#3e2723] leading-tight">
                              {specialty}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Qualifications */}
                {lawyer.credentials && lawyer.credentials.length > 0 && (
                  <motion.div variants={itemVariants}>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#3e2723] mb-3 sm:mb-4 flex items-center gap-2">
                      <Award className="w-5 h-5 sm:w-6 sm:h-6 text-amber-700 flex-shrink-0" />
                      Qualifications
                    </h3>
                    <div className="space-y-2 sm:space-y-3">
                      {lawyer.credentials.map((cred, idx) => (
                        <motion.div 
                          key={idx}
                          variants={itemVariants}
                          className="flex items-start gap-3 p-2 sm:p-3 rounded-lg hover:bg-amber-50/50 transition-colors duration-300"
                        >
                          <motion.div 
                            className="w-2 h-2 bg-gradient-to-br from-amber-600 to-orange-600 rounded-full mt-2 flex-shrink-0"
                            whileHover={{ scale: 1.5 }}
                          />
                          <p className="text-xs sm:text-sm text-[#5d4037] font-medium">
                            {cred}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Description complète */}
                {lawyer.fullDescription && (
                  <motion.div variants={itemVariants}>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#3e2723] mb-3 sm:mb-4 flex items-center gap-2">
                      <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-amber-700 flex-shrink-0" />
                      À propos
                    </h3>
                    <motion.p 
                      className="text-xs sm:text-sm md:text-base text-[#5d4037] leading-relaxed text-justify p-4 sm:p-5 bg-gradient-to-br from-orange-50/50 to-amber-50/50 rounded-xl border border-amber-100"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5, duration: 0.6 }}
                    >
                      {lawyer.fullDescription}
                    </motion.p>
                  </motion.div>
                )}

                {/* Localisation */}
                {lawyer.location && (
                  <motion.div 
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 hover:border-amber-400 rounded-xl p-4 sm:p-5 transition-all duration-300 cursor-default"
                  >
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-amber-700 mt-0.5 flex-shrink-0" />
                      <p className="text-xs sm:text-sm md:text-base text-[#3e2723] font-semibold">
                        {lawyer.location}
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* CTA Button */}
                <motion.button 
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, boxShadow: "0 12px 24px rgba(180, 83, 9, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-amber-700 via-amber-600 to-orange-600 hover:from-amber-800 hover:via-amber-700 hover:to-orange-700 text-white font-bold py-3 sm:py-4 rounded-xl transition-all duration-300 transform flex items-center justify-center gap-2 shadow-lg text-sm sm:text-base"
                >
                  <span>Prendre rendez-vous</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
