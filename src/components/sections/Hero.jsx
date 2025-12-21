import { motion } from 'framer-motion'
import { ArrowRight, Award, Users } from 'lucide-react'
import { useTranslation } from '../../hooks/useTranslation'
import { safeScrollToElement } from '../../utils/scroll.utils'
import heroImage from '../../assets/HeroC.png'
import heroImageb from '../../assets/barrea.webp'


export function Hero() {
  const { t } = useTranslation()

  const scrollToTeam = () => {
    // Utilisation de la fonction utilitaire sécurisée
    safeScrollToElement('team-section', {
      behavior: 'smooth',
      block: 'start',
      offset: 80 // Petit offset pour éviter que le header cache le contenu
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
      {/* Image de fond avec blur */}
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

      {/* --- MODIFICATION ICI (Option 1) --- */}
      {/* J'ai passé l'opacité de /30 à /70 pour assombrir le fond */}
      <div className="absolute inset-0 bg-primary-dark/70" />
      {/* ----------------------------------- */}

      {/* Formes géométriques décoratives */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-amber-200/20 rounded-full blur-xl" />
      <div className="absolute bottom-32 left-16 w-24 h-24 bg-terracotta/15 rounded-full blur-lg" />
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-sage/20 rounded-full blur-md" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants} className="space-y-6">
              <motion.div
                className="inline-flex items-center px-4 py-2 rounded-full bg-secondary-brown border border-secondary-brown text-white text-sm font-medium"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Award className="w-4 h-4 mr-2" />
                Cabinet d'avocats au quartier Omnisport
              </motion.div>

              <motion.h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white"
                variants={itemVariants}
              >
                Droit & Justice
                <br />
                en Afrique
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
                className="btn-secondary text-white group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Users className="inline-block w-5 h-5 mr-2" />
                Notre équipe
              </motion.button>
            </motion.div>

            {/* Stats avec design africain */}
            <motion.div
              className="grid grid-cols-3 gap-6 pt-8"
              variants={itemVariants}
            >
              <div className="text-center p-4 bg-primary-dark/60 backdrop-blur-sm rounded-lg border border-secondary-brown">
                <div className="text-3xl font-bold text-accent-red mb-1">2+</div>
                <div className="text-sm text-white">Années d'expérience</div>
              </div>
              <div className="text-center p-4 bg-primary-dark/60 backdrop-blur-sm rounded-lg border border-secondary-brown">
                <div className="text-3xl font-bold text-secondary-brown mb-1">100+</div>
                <div className="text-sm text-white">Clients satisfaits</div>
              </div>
              <div className="text-center p-4 bg-primary-dark/60 backdrop-blur-sm rounded-lg border border-secondary-brown">
                <div className="text-3xl font-bold text-accent-red mb-1">24/7</div>
                <div className="text-sm text-white">Support disponible</div>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Hero Image */}
          <motion.div
            className="relative w-full max-w-lg mx-auto"
            variants={itemVariants}
          >
            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <img
                src={heroImageb}
                alt="Cabinet d'avocats TCHOUHO - Excellence juridique"
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Ligne de séparation élégante */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      />
    </section>
  )
}