import { motion } from 'framer-motion'
import { Video, Phone, FileText, ArrowRight, Award, Users, Clock } from 'lucide-react'
import { useTranslation } from '../../hooks/useTranslation'
import heroImage from '../../assets/HeroC.png'
import patternImage from '../../assets/mon-motif-africain.webp'

export function Hero() {
  const { t } = useTranslation()

  const scrollToTeam = () => {
    const teamSection = document.getElementById('team-section')
    if (teamSection) {
      teamSection.scrollIntoView({ behavior: 'smooth' })
    }
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
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay sombre pour améliorer la lisibilité du texte */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Background naturel avec tons africains */}
      <div className="absolute inset-0 gradient-natural" />

      {/* Motifs africains subtils */}
      <div className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none">
          <div 
            className="absolute inset-0 bg-repeat" 
            style={{
              // On utilise l'image importée ici
              backgroundImage: `url(${patternImage})`,
              // Optionnel : ajuste la taille du motif si besoin (ex: 100px, 200px, ou 'cover')
              backgroundSize: '150px' 
            }} 
          />
</div>

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
                className="inline-flex items-center px-4 py-2 rounded-full bg-sage-50 border border-sage-200 text-sage-800 text-sm font-medium"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Award className="w-4 h-4 mr-2" />
                {t('hero-subtitle')}
              </motion.div>

              <motion.h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-slate-800"
                variants={itemVariants}
              >
                Droit & <span className="text-terracotta">Justice</span>
                <br />
                en Afrique
              </motion.h1>

              <motion.p
                className="text-xl text-slate-600 max-w-xl leading-relaxed"
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
                className="btn-primary group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={scrollToTeam}
              >
                {t('talk-to-lawyer')}
                <ArrowRight className="inline-block w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                className="btn-secondary group"
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
              <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-lg border border-white/20">
                <div className="text-3xl font-bold text-terracotta mb-1">2+</div>
                <div className="text-sm text-slate-600">Années d'expérience</div>
              </div>
              <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-lg border border-white/20">
                <div className="text-3xl font-bold text-sage-600 mb-1">100+</div>
                <div className="text-sm text-slate-600">Clients satisfaits</div>
              </div>
              <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-lg border border-white/20">
                <div className="text-3xl font-bold text-earth mb-1">24/7</div>
                <div className="text-sm text-slate-600">Support disponible</div>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Stats & Services Cards */}
          <div className="relative">
            <motion.div
              className="relative w-full max-w-lg mx-auto"
              variants={itemVariants}
            >

              {/* Cartes flottantes avec animations */}
              <motion.div
                className="absolute -top-6 -left-6 bg-white rounded-xl shadow-xl p-4 border border-slate-100"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-50 rounded-lg text-green-600">
                    <Video className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900">{t('video-consultation')}</h4>
                    <p className="text-xs text-slate-600">{t('video-desc')}</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-4 border border-slate-100"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.0, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900">{t('phone-consultation')}</h4>
                    <p className="text-xs text-slate-600">{t('phone-desc')}</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute top-1/2 -right-12 bg-white rounded-xl shadow-xl p-4 border border-slate-100"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-50 rounded-lg text-purple-600">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900">{t('document-review')}</h4>
                    <p className="text-xs text-slate-600">{t('document-desc')}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
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
