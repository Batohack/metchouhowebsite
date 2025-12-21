import { motion } from 'framer-motion'
import { ArrowRight, Award, Users } from 'lucide-react'
import { useTranslation } from '../../hooks/useTranslation'
import { safeScrollToElement } from '../../utils/scroll.utils'
import heroImage from '../../assets/HeroC.png'
import heroImageb from '../../assets/barrea.webp'

export function Hero() {
  const { t } = useTranslation()

  const scrollToTeam = () => {
    safeScrollToElement('team-section', {
      behavior: 'smooth',
      block: 'start',
      offset: 80 
    })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image avec Blur */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'blur(6px)'
        }}
      ></div>

      {/* Overlay Sombre pour la lisibilité */}
      <div className="absolute inset-0 bg-primary-dark/70" />

      {/* Formes décoratives en arrière-plan */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-amber-200/20 rounded-full blur-xl" />
      <div className="absolute bottom-32 left-16 w-24 h-24 bg-terracotta/15 rounded-full blur-lg" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Contenu de gauche (Texte et Boutons) */}
          <div className="space-y-8">
            <motion.div variants={itemVariants} className="space-y-6">
              <motion.div
                className="inline-flex items-center px-4 py-2 rounded-full bg-secondary-brown border border-secondary-brown text-white text-sm font-medium"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Award className="w-4 h-4 mr-2 text-amber-400" />
                Cabinet d'avocats au quartier Omnisport
              </motion.div>

              <motion.h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white text-glow"
                variants={itemVariants}
              >
                Droit & Justice
                <br />
                <span className="text-white brightness-110">en Afrique</span>
              </motion.h1>

              <motion.p
                className="text-xl text-white max-w-xl leading-relaxed"
                variants={itemVariants}
              >
                Cabinet d'avocats international spécialisé en droit des affaires,
                situé au quartier Omnisport. 2 ans d'excellence juridique
                au service de votre réussite.
              </motion.p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-6"
              variants={itemVariants}
            >
              <motion.button
                className="btn-primary text-white group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={scrollToTeam}
              >
                {t('talk-to-lawyer')}
                <ArrowRight className="inline-block w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.button
                className="flex items-center justify-center px-8 py-4 rounded-xl border border-white/30 text-white font-bold hover:bg-white/10 transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Users className="w-5 h-5 mr-2" />
                Notre équipe
              </motion.button>
            </motion.div>

            {/* Stats en bas à gauche */}
            <motion.div
              className="grid grid-cols-3 gap-6 pt-8"
              variants={itemVariants}
            >
              <div className="text-center p-4 bg-primary-dark/60 backdrop-blur-sm rounded-lg border border-secondary-brown">
                <div className="text-3xl font-bold text-accent-red mb-1">2+</div>
                <div className="text-sm text-white">Années d'expérience</div>
              </div>

              <div className="text-center p-4 bg-primary-dark/60 backdrop-blur-sm rounded-lg border border-secondary-brown">
                <div className="text-3xl font-bold text-accent-red mb-1">100+</div>
                <div className="text-sm text-white">Clients satisfaits</div>
              </div>

              <div className="text-center p-4 bg-primary-dark/60 backdrop-blur-sm rounded-lg border border-secondary-brown">
                <div className="text-3xl font-bold text-accent-red mb-1">24/7</div>
                <div className="text-sm text-white">Support disponible</div>
              </div>
            </motion.div>
          </div>

          {/* Contenu de droite (Image poussée vers le bord) */}
          <motion.div
            className="relative w-full max-w-none lg:ml-auto lg:pl-12"
            variants={itemVariants}
          >
            <motion.div
              className="relative rounded-3xl overflow-hidden shadow-2xl lg:float-right border border-white/10"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <img
                src={heroImageb}
                alt="Cabinet d'avocats TCHOUHO - Excellence juridique"
                className="w-full max-w-3xl h-auto object-cover"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Ligne de séparation élégante en bas */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      />
    </section>
  )
}