import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Globe, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'
import { useTranslation } from '../../hooks/useTranslation'

export function Footer() {
  const { t } = useTranslation()

  // Définition de la couleur "Bleu Royal" et de la couleur de texte blanche
  const royalBlueBg = 'bg-[#1a237e]' // Un bleu royal profond (type Indigo 900)
  const whiteText = 'text-white'
  const whiteTextHover = 'hover:text-accent-red transition-colors duration-200'

  return (
    // MODIFICATION ICI : Utilisation du bleu royal en background
    <footer className={`${royalBlueBg} ${whiteText} relative overflow-hidden border-t border-blue-900`}>
      {/* Pattern de fond subtil - Opacité légèrement augmentée pour être visible sur le bleu */}
      <div className="absolute inset-0 opacity-[0.05]">
        <div className="absolute inset-0" style={{
          // Le motif est en blanc pour ressortir sur le bleu
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          {/* Cabinet Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* MODIFICATION ICI : Texte en blanc */}
            <h3 className="text-xl font-bold text-white mb-4">Cabinet TCHOUHO</h3>
            <p className="text-white/90 text-sm leading-relaxed mb-6">
              Excellence juridique depuis 2 ans. Spécialisés en droit des affaires
              et accompagnement personnalisé de nos clients.
            </p>
            <div className="flex items-center text-white/90 text-sm font-medium">
              <Globe className="w-4 h-4 mr-2" />
              Yaoundé, Cameroun
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Domaines d'expertise</h4>
            {/* MODIFICATION ICI : Liste en blanc */}
            <ul className="space-y-2 text-sm text-white/90">
              <li>Droit des affaires</li>
              <li>Droit immobilier</li>
              <li>Droit de la famille</li>
              <li>Droit civil</li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            {/* MODIFICATION ICI : Textes en blanc, icônes en rouge (accent) */}
            <div className="space-y-3 text-white/90">
              <div className="flex items-center text-sm">
                <MapPin className="w-4 h-4 mr-3 text-accent-red flex-shrink-0" />
                <span>Quartier Omnisport,<br />Rue des Généraux</span>
              </div>
              <div className="flex items-center text-sm">
                <Phone className="w-4 h-4 mr-3 text-accent-red flex-shrink-0" />
                <span>+225 XX XX XX XX XX</span>
              </div>
              <div className="flex items-center text-sm">
                <Mail className="w-4 h-4 mr-3 text-accent-red flex-shrink-0" />
                <span>contact@tchouho-avocats.com</span>
              </div>
            </div>
          </motion.div>

          {/* Liens utiles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Liens utiles</h4>
            {/* MODIFICATION ICI : Liens blancs avec hover rouge */}
            <ul className="space-y-3">
              <li><a href="#" className={`${whiteText} ${whiteTextHover} text-sm`}>À propos</a></li>
              <li><a href="#" className={`${whiteText} ${whiteTextHover} text-sm`}>Notre équipe</a></li>
              <li><a href="#" className={`${whiteText} ${whiteTextHover} text-sm`}>Services</a></li>
              <li><a href="#" className={`${whiteText} ${whiteTextHover} text-sm`}>Contact</a></li>
            </ul>
          </motion.div>

          {/* Réseaux sociaux */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Suivez-nous</h4>
            {/* MODIFICATION ICI : Boutons sur fond légèrement plus clair, icônes blanches */}
            <div className="flex space-x-4">
              {['Facebook', 'Twitter', 'LinkedIn', 'Instagram'].map((network, index) => {
                const Icon = [Facebook, Twitter, Linkedin, Instagram][index];
                return (
                  <a
                    key={network}
                    href="#"
                    className="w-10 h-10 bg-blue-700/50 hover:bg-accent-red rounded-full flex items-center justify-center transition-colors duration-200 group"
                    aria-label={network}
                  >
                    <Icon className="w-5 h-5 text-white group-hover:text-white" />
                  </a>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          // MODIFICATION ICI : Bordure de séparation plus subtile
          className="border-t border-blue-700/50 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* MODIFICATION ICI : Texte du bas en blanc/90 */}
            <div className="text-white/90 text-sm mb-4 md:mb-0">
              © 2024 Cabinet TCHOUHO. Tous droits réservés.
            </div>

            <div className="flex space-x-6 text-sm text-white/90">
              <a href="#" className="hover:text-accent-red transition-colors duration-200">
                Politique de confidentialité
              </a>
              <a href="#" className="hover:text-accent-red transition-colors duration-200">
                Conditions d'utilisation
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}