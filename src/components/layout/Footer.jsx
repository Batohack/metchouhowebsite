import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Globe, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'
import { useTranslation } from '../../hooks/useTranslation'

export function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 text-white relative overflow-hidden border-t border-slate-700">
      {/* Pattern de fond subtil */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
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
            <h3 className="text-xl font-bold text-amber-400 mb-4">Cabinet TCHOUHO</h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Excellence juridique depuis 2 ans. Spécialisés en droit des affaires
              et accompagnement personnalisé de nos clients.
            </p>
            <div className="flex items-center text-amber-400 text-sm font-medium">
              <Globe className="w-4 h-4 mr-2" />
              Abidjan, Côte d'Ivoire
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
            <ul className="space-y-2 text-sm text-slate-300">
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
            <div className="space-y-3">
              <div className="flex items-center text-slate-300 text-sm">
                <MapPin className="w-4 h-4 mr-3 text-amber-400 flex-shrink-0" />
                <span>Quartier Omnisport,<br />Rue des Généraux</span>
              </div>
              <div className="flex items-center text-slate-300 text-sm">
                <Phone className="w-4 h-4 mr-3 text-sage flex-shrink-0" />
                <span>+225 XX XX XX XX XX</span>
              </div>
              <div className="flex items-center text-slate-300 text-sm">
                <Mail className="w-4 h-4 mr-3 text-terracotta flex-shrink-0" />
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
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-slate-300 hover:text-sage text-sm transition-colors duration-200">
                  À propos
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-sage text-sm transition-colors duration-200">
                  Notre équipe
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-terracotta text-sm transition-colors duration-200">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-earth text-sm transition-colors duration-200">
                  Contact
                </a>
              </li>
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
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 hover:bg-amber-600 rounded-full flex items-center justify-center transition-colors duration-200 group"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-slate-300 group-hover:text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 hover:bg-amber-600 rounded-full flex items-center justify-center transition-colors duration-200 group"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-slate-300 group-hover:text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 hover:bg-amber-600 rounded-full flex items-center justify-center transition-colors duration-200 group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-slate-300 group-hover:text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 hover:bg-amber-600 rounded-full flex items-center justify-center transition-colors duration-200 group"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-slate-300 group-hover:text-white" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-slate-700 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-slate-400 text-sm mb-4 md:mb-0">
              © 2024 Cabinet TCHOUHO. Tous droits réservés.
            </div>

            <div className="flex space-x-6 text-sm text-slate-400">
              <a href="#" className="hover:text-sage transition-colors duration-200">
                Politique de confidentialité
              </a>
              <a href="#" className="hover:text-terracotta transition-colors duration-200">
                Conditions d'utilisation
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
