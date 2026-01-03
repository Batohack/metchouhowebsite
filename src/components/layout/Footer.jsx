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
            className="lg:col-span-1 flex flex-col"
          >
            {/* Logo + Texte */}
            <div className="flex items-start gap-3 mb-6">
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
                <h4 className="text-white font-bold text-sm tracking-widest">
                  TCHOUHO & ASSOCIÉS
                </h4>
              </div>
            </div>
            
            {/* Description */}
            <p className={`${whiteText} text-xs sm:text-sm leading-relaxed mb-6 italic font-light text-center`}>
              Cabinet d'avocats de référence au Cameroun, nous conjuguons expertise pointue et rigueur professionnelle pour défendre vos intérêts avec intégrité et efficacité.
            </p>
            
            {/* Réseaux Sociaux */}
            <div className="flex space-x-4 mt-auto">
              {/* Facebook */}
              <a href="https://web.facebook.com/medard.tchouho/?locale=cs_CZ&_rdc=1&_rdr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-amber-600/20 hover:bg-amber-600 rounded-full flex items-center justify-center transition-all duration-300 group border border-amber-600/30">
                <Facebook className="w-5 h-5 text-amber-400 group-hover:text-white" />
              </a>
              
              {/* Instagram */}
              <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-amber-600/20 hover:bg-amber-600 rounded-full flex items-center justify-center transition-all duration-300 group border border-amber-600/30">
                <svg className="w-5 h-5 text-amber-400 group-hover:text-white fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001Z"/></svg>
              </a>

              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/me-medard-tchouho-noudimen-03522b233/?originalSubdomain=cm" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-amber-600/20 hover:bg-amber-600 rounded-full flex items-center justify-center transition-all duration-300 group border border-amber-600/30">
                <Linkedin className="w-5 h-5 text-amber-400 group-hover:text-white" />
              </a>
            </div>
          </motion.div>

          {/* Section 2: Nous Contacter */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-lg font-bold text-white uppercase tracking-widest text-xs">
              Nous Contacter
            </h4>
            <div className={`space-y-4 text-sm ${whiteText}`}>
              <div className="flex items-start gap-3">
                <MapPin className={`w-4 h-4 flex-shrink-0 mt-1 ${accentAmber}`} />
                <span className="text-xs sm:text-sm">Quartier Omnisport,<br />Rue des Généraux, Yaoundé</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className={`w-4 h-4 flex-shrink-0 ${accentAmber}`} />
                <span className="text-xs sm:text-sm">+237 677 42 31 69</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className={`w-4 h-4 flex-shrink-0 ${accentAmber}`} />
                <span className="text-xs sm:text-sm break-all">medardtcouho@yahoo.com</span>
              </div>
            </div>
          </motion.div>

          {/* Section 3: Services */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg font-bold text-white uppercase tracking-widest text-xs">
              Domaines d'Expertise
            </h4>
            <ul className={`space-y-2 text-xs sm:text-sm ${whiteText}`}>
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
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-lg font-bold text-white uppercase tracking-widest text-xs">
              Liens Utiles
            </h4>
            <ul className={`space-y-3 text-xs sm:text-sm ${whiteText}`}>
              <li className={hoverLink}><a href="#">Nous contacter</a></li>
              <li className={hoverLink}><a href="#">Mentions légales</a></li>
              <li className={hoverLink}><a href="#">Cabinet d'avocat</a></li>
              <li className={hoverLink}><a href="#">Plan du site</a></li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#3e2723] pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white text-xs opacity-80 text-center md:text-left">
              © 2025 Cabinet TCHOUHO & Associés - Excellence Juridique & Intégrité
            </div>

            <div className="flex space-x-6 text-xs text-white">
              <Link to="/confidentialite" className="hover:text-amber-500 transition-colors">Confidentialité</Link>
              <Link to="/mentions-legales" className="hover:text-amber-500 transition-colors">Mentions Légales</Link>
            </div>
          </div>

          {/* Developer Credit */}
          <div className="text-center mt-6 pt-6 border-t border-[#3e2723]">
            <p className="text-white text-xs opacity-70 font-light">
              Développé par <span className="font-semibold text-amber-400">BATOSINE DORIAN</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}