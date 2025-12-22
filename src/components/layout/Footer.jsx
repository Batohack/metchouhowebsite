import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Globe, Facebook, Linkedin, MessageCircle } from 'lucide-react'
import { useTranslation } from '../../hooks/useTranslation'

export function Footer() {
  const { t } = useTranslation()

  // Configuration de la palette
  const darkBrownBg = 'bg-[#1a120b]' 
  const accentAmber = 'text-amber-500' 
  const whiteText = 'text-white' 
  const hoverLink = 'hover:text-amber-500 transition-colors duration-300'

  return (
    <footer className={`${darkBrownBg} relative overflow-hidden border-t border-[#3e2723]`}>
      {/* Pattern de fond subtil */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d97706' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Section 1: Cabinet Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <h3 className="text-2xl font-bold text-white mb-6 uppercase tracking-wider">
              Cabinet d'avocat tchouho & associes
            </h3>
            <p className={`${whiteText} text-sm leading-relaxed mb-6 italic`}>
              "Excellence juridique et accompagnement stratégique au cœur de l'Afrique."
            </p>
            <div className="flex items-center text-amber-500/80 text-sm font-medium">
              <Globe className="w-4 h-4 mr-2" />
              Yaoundé, Cameroun
            </div>
          </motion.div>

          {/* Section 2: Expertises */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-white uppercase tracking-widest text-xs">
              Expertises
            </h4>
            <ul className={`space-y-3 text-sm ${whiteText}`}>
              <li className={hoverLink}><a href="#">Droit des affaires</a></li>
              <li className={hoverLink}><a href="#">Droit immobilier</a></li>
              <li className={hoverLink}><a href="#">Droit de la famille</a></li>
              <li className={hoverLink}><a href="#">Conseil Fiscal</a></li>
            </ul>
          </div>

          {/* Section 3: Contact */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-white uppercase tracking-widest text-xs">
              Contact
            </h4>
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
                <span className="break-all">medardtcouho@yahoo.com</span>
              </div>
            </div>
          </div>

          {/* Section 4: Navigation */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-white uppercase tracking-widest text-xs">
              Navigation
            </h4>
            <ul className={`space-y-3 text-sm ${whiteText}`}>
              <li className={hoverLink}><a href="#">À propos du cabinet</a></li>
              <li><a href="#" className={hoverLink}>Nos Avocats</a></li>
              <li><a href="#" className={hoverLink}>Prendre Rendez-vous</a></li>
              <li><a href="#" className={hoverLink}>FAQ</a></li>
            </ul>
          </div>

          {/* Section 5: Réseaux Sociaux mis à jour */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-white uppercase tracking-widest text-xs">
              Suivez-nous
            </h4>
            <div className="flex space-x-3">
              {/* Facebook */}
              <a href="https://web.facebook.com/medard.tchouho/?locale=cs_CZ&_rdc=1&_rdr" className="w-10 h-10 bg-[#3e2723]/50 hover:bg-amber-600 rounded-xl flex items-center justify-center transition-all duration-300 group border border-[#3e2723]">
                <Facebook className="w-5 h-5 text-amber-200 group-hover:text-white" />
              </a>
              
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/me-medard-tchouho-noudimen-03522b233/?originalSubdomain=cm" className="w-10 h-10 bg-[#3e2723]/50 hover:bg-amber-600 rounded-xl flex items-center justify-center transition-all duration-300 group border border-[#3e2723]">
                <Linkedin className="w-5 h-5 text-amber-200 group-hover:text-white" />
              </a>

             {/* WhatsApp Direct avec Logo Officiel Meta */}
                <a 
                  href="https://wa.me/237677423169?text=Bonjour%20Cabinet%20TCHOUHO%2C%20je%20souhaite%20prendre%20rendez-vous." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#3e2723]/50 hover:bg-[#25D366] rounded-xl flex items-center justify-center transition-all duration-300 group border border-[#3e2723]"
                  title="Discuter sur WhatsApp"
                >
                  {/* SVG du logo WhatsApp Officiel */}
                  <svg 
                    viewBox="0 0 24 24" 
                    className="w-5 h-5 fill-amber-200 group-hover:fill-white transition-colors"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#3e2723] pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white text-xs opacity-80">
              © 2025 Cabinet TCHOUHO. Excellence & Intégrité.
            </div>

            <div className="flex space-x-8 text-xs text-white">
              <a href="#" className="hover:text-amber-500 transition-colors">Confidentialité</a>
              <a href="#" className="hover:text-amber-500 transition-colors">Mentions Légales</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}