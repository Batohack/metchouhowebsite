import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Globe, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'
import { useTranslation } from '../../hooks/useTranslation'

export function Footer() {
  const { t } = useTranslation()

  // Palette harmonisée avec le reste du site
  const darkBrownBg = 'bg-[#1a120b]' // Brun très sombre pour le prestige
  const accentAmber = 'text-amber-500'
  const whiteText = 'text-white/90'
  const hoverLink = 'hover:text-amber-500 transition-colors duration-300'

  return (
    <footer className={`${darkBrownBg} relative overflow-hidden border-t border-[#3e2723]`}>
      {/* Pattern de fond subtil (Cercles ambrés très discrets) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d97706' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Cabinet Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Cabinet TCHOUHO</h3>
            <p className={`${whiteText} text-sm leading-relaxed mb-6 italic`}>
              "Excellence juridique et accompagnement stratégique au cœur de l'Afrique."
            </p>
            <div className="flex items-center text-amber-500/80 text-sm font-medium">
              <Globe className="w-4 h-4 mr-2" />
              Yaoundé, Cameroun
            </div>
          </motion.div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-white uppercase tracking-widest text-xs">Expertises</h4>
            <ul className={`space-y-3 text-sm ${whiteText}`}>
              <li className={hoverLink}><a href="#">Droit des affaires</a></li>
              <li className={hoverLink}><a href="#">Droit immobilier</a></li>
              <li className={hoverLink}><a href="#">Droit de la famille</a></li>
              <li className={hoverLink}><a href="#">Conseil Fiscal</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-white uppercase tracking-widest text-xs">Contact</h4>
            <div className={`space-y-4 text-sm ${whiteText}`}>
              <div className="flex items-start">
                <MapPin className={`w-4 h-4 mr-3 ${accentAmber} mt-1`} />
                <span>Quartier Omnisport,<br />Rue des Généraux</span>
              </div>
              <div className="flex items-center">
                <Phone className={`w-4 h-4 mr-3 ${accentAmber}`} />
                <span>+237 677 42 31 69</span>
              </div>
              <div className="flex items-center">
                <Mail className={`w-4 h-4 mr-3 ${accentAmber}`} />
                <span className="break-all">contact@tchouho.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-white uppercase tracking-widest text-xs">Navigation</h4>
            <ul className={`space-y-3 text-sm ${whiteText}`}>
              <li><a href="#" className={hoverLink}>À propos du cabinet</a></li>
              <li><a href="#" className={hoverLink}>Nos Avocats</a></li>
              <li><a href="#" className={hoverLink}>Prendre Rendez-vous</a></li>
              <li><a href="#" className={hoverLink}>FAQ</a></li>
            </ul>
          </div>

          {/* Social & CTA */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-white uppercase tracking-widest text-xs">Suivez-nous</h4>
            <div className="flex space-x-3">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-10 h-10 bg-[#3e2723]/50 hover:bg-amber-600 rounded-xl flex items-center justify-center transition-all duration-300 group border border-[#3e2723]"
                >
                  <Icon className="w-5 h-5 text-amber-200 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#3e2723] pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white/40 text-xs">
              © 2025 Cabinet TCHOUHO. Excellence & Intégrité.
            </div>

            <div className="flex space-x-8 text-xs text-white/40">
              <a href="#" className="hover:text-amber-500 transition-colors">Confidentialité</a>
              <a href="#" className="hover:text-amber-500 transition-colors">Mentions Légales</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}