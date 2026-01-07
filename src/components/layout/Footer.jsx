import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Globe, Facebook, Linkedin, MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import logo from '../../assets/CabinetLogo.svg'

export function Footer() {
 
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-12 mb-12 sm:mb-16">
          
          {/* Section 1: Logo & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1 flex flex-col items-center sm:items-start text-center sm:text-left order-1"
          >
            {/* Logo + Texte */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 mb-6 w-full">
              {/* Logo circulaire */}
              <div className="bg-white rounded-full shadow-lg overflow-hidden border-2 border-amber-600/10 flex items-center justify-center flex-shrink-0 w-16 h-16">
                <img 
                  src={logo} 
                  alt="Cabinet TCHOUHO" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Texte du cabinet */}
              <div className="flex flex-col justify-center">
                <h4 className="text-white font-bold text-sm tracking-widest text-center sm:text-left">
                  CABINET D'AVOCATS TCHOUHO & ASSOCIÉS
                </h4>
              </div>
            </div>
            
            {/* Description */}
            <p className={`${whiteText} text-xs sm:text-sm leading-relaxed mb-6 italic font-light text-center sm:text-left max-w-[20rem] sm:max-w-none mx-auto sm:mx-0`}>
              Cabinet d'avocats de référence au Cameroun, nous conjuguons expertise pointue et rigueur professionnelle pour défendre vos intérêts avec intégrité et efficacité.
            </p>
            
            {/* Réseaux Sociaux */}
            <div className="flex space-x-4 mt-4 sm:mt-auto justify-center sm:justify-start">
              {/* Facebook */}
              <a href="https://web.facebook.com/medard.tchouho/?locale=cs_CZ&_rdc=1&_rdr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-amber-600/20 hover:bg-amber-600 rounded-full flex items-center justify-center transition-all duration-300 group border border-amber-600/30">
                <Facebook className="w-5 h-5 text-amber-400 group-hover:text-white" />
              </a>
              
              {/* WhatsApp */}
              <a href="https://wa.me/237677423169" target="_blank" rel="noopener noreferrer" aria-label="Ouvrir WhatsApp" className="w-10 h-10 bg-amber-600/20 hover:bg-amber-600 rounded-full flex items-center justify-center transition-all duration-300 group border border-amber-600/30">
                <svg className="w-5 h-5 text-amber-400 group-hover:text-white" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.002 3.2C9.01 3.2 3.6 8.61 3.6 15.6c0 2.74.8 5.27 2.18 7.43L3.2 28.8l6.06-2.02c2.03 1.11 4.35 1.7 6.74 1.7 6.99 0 12.4-5.41 12.4-12.4S22.991 3.2 16.002 3.2z" fill="currentColor" opacity="0.12"/>
                  <path d="M16.002 29.333c-2.04 0-4.03-.54-5.78-1.56l-.41-.24-3.6 1.2 1.2-3.5-.27-.44A12.85 12.85 0 013.2 15.6C3.2 9.13 8.53 3.8 15 3.8c7.44 0 13.2 5.96 13.2 11.8 0 6.28-5.16 11.733-15.398 11.733zM22.89 19.43c-.38-.19-2.26-1.12-2.61-1.25-.35-.13-.61-.19-.87.19-.27.38-1.06 1.25-1.3 1.5-.24.25-.48.28-.87.09-.39-.19-1.66-.61-3.17-1.96-1.17-1.03-1.96-2.3-2.19-2.69-.23-.38-.02-.59.16-.78.16-.16.36-.42.54-.63.18-.22.24-.38.36-.63.12-.25.06-.47-.03-.66-.09-.19-.87-2.1-1.2-2.88-.32-.78-.65-.67-.89-.68-.23-.01-.5-.01-.77-.01-.27 0-.7.09-1.06.42-.36.34-1.37 1.34-1.37 3.26 0 1.92 1.4 3.78 1.6 4.04.2.25 2.78 4.24 6.74 5.92 4.48 1.94 4.48 1.29 5.29 1.21.8-.07 2.6-1.06 2.97-2.08.37-1.02.37-1.9.26-2.08-.12-.19-.36-.3-.73-.49z" fill="currentColor"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/me-medard-tchouho-noudimen-03522b233/?originalSubdomain=cm" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-amber-600/20 hover:bg-amber-600 rounded-full flex items-center justify-center transition-all duration-300 group border border-amber-600/30">
                <Linkedin className="w-5 h-5 text-amber-400 group-hover:text-white" />
              </a>
            </div>
          </motion.div>

          {/* Section 2: Nous Contacter */}
          <motion.div 
            className="space-y-6 px-2 sm:px-0 order-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-lg font-bold text-white uppercase tracking-widest text-xs">
              Nous Contacter
            </h4>
              <div className={`space-y-4 text-sm leading-relaxed ${whiteText}`}>
              <a
                href="https://maps.app.goo.gl/WKUQPcoVQPsSqfL19"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Voir l'adresse du cabinet sur Google Maps"
                className="flex items-start gap-3 hover:underline"
              >
                <MapPin className={`w-4 h-4 flex-shrink-0 mt-1 ${accentAmber}`} />
                <span className="text-xs sm:text-sm break-words">Quartier Omnisport,<br />Rue des Généraux, Yaoundé</span>
              </a>
              <div className="flex items-center gap-3">
                <Phone className={`w-4 h-4 flex-shrink-0 ${accentAmber}`} />
                <span className="text-xs sm:text-sm">+237 677 42 31 69</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className={`w-4 h-4 flex-shrink-0 ${accentAmber}`} />
                <span className="text-xs sm:text-sm break-words">medardtcouho@yahoo.com</span>
              </div>
            </div>
          </motion.div>

          {/* Section 3: Services */}
          <motion.div 
            className="space-y-6 px-2 sm:px-0 order-4 lg:order-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg font-bold text-white uppercase tracking-widest text-xs">
              Domaines d'Expertise
            </h4>
            <ul className={`space-y-2 text-xs sm:text-sm leading-relaxed break-words ${whiteText} max-h-[40vh] overflow-auto sm:max-h-none sm:overflow-visible pr-2`}>
              <li className={hoverLink}><a href="#">Droit Administratif</a></li>
              <li className={hoverLink}><a href="#">Modes Alternatifs de Règlement</a></li>
              <li className={hoverLink}><a href="#">Droit de la Concurrence</a></li>
              <li className={hoverLink}><a href="#">Droit Bancaire</a></li>
              <li className={hoverLink}><a href="#">Droit Commercial</a></li>
              <li className={hoverLink}><a href="#">Droit des Sociétés</a></li>
              <li className={hoverLink}><a href="#">Droit Civil</a></li>
              <li className={hoverLink}><a href="#">Actions Collectives</a></li>
              <li className={hoverLink}><a href="#">Droit Constitutionnel</a></li>
              <li className={hoverLink}><a href="#">Droit de la Consommation</a></li>
              <li className={hoverLink}><a href="#">Droit des Contrats</a></li>
              <li className={hoverLink}><a href="#">Droit Fiscal et Douanier</a></li>
              <li className={hoverLink}><a href="#">Droit d'Assurance</a></li>
              <li className={hoverLink}><a href="#">Droit du Travail</a></li>
              <li className={hoverLink}><a href="#">Propriété Intellectuelle</a></li>
              <li className={hoverLink}><a href="#">Droit Foncier</a></li>
              <li className={hoverLink}><a href="#">Droit de l'Immigration</a></li>
            </ul>
          </motion.div>

          {/* Section 4: Liens Utiles */}
          <motion.div 
            className="space-y-6 px-2 sm:px-0 order-3 lg:order-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-lg font-bold text-white uppercase tracking-widest text-xs">
              Liens Utiles
            </h4>
            <ul className={`space-y-3 text-xs sm:text-sm leading-relaxed break-words ${whiteText}`}>
              <li className={hoverLink}><a href="#">Nous contacter</a></li>
              <li className={hoverLink}><a href="#">Cabinet d'avocat</a></li>
              <li className={hoverLink}><a href="#">Plan du site</a></li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#3e2723] pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white text-xs opacity-80 text-center md:text-left">
              © 2026 Cabinet D' Avocats Tchouho & Associés - Excellence Juridique & Intégrité
            </div>

            <div className="flex space-x-6 text-xs text-white">
              <Link to="/confidentialite" className="hover:text-amber-500 transition-colors">Confidentialité</Link>
              <Link to="/mentions-legales" className="hover:text-amber-500 transition-colors">Mentions Légales</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}