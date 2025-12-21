import React, { useState, useEffect } from 'react'
import { Menu, X, ChevronDown, Globe } from 'lucide-react'
import { useTranslation } from '../../hooks/useTranslation'
import { getSafeScrollY } from '../../utils/scroll.utils'
import logo from '../../assets/CabinetLogo.svg'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { t, language, toggleLanguage } = useTranslation()

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = getSafeScrollY()
      // Transition fluide dès 15px de scroll
      setIsScrolled(scrollY > 15)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: t('Immigration'), hasDropdown: true },
    { name: t('Property'), hasDropdown: true },
    { name: t('Matrimonial'), hasDropdown: true },
    { name: t('Personal'), hasDropdown: true },
    { name: t('Business'), hasDropdown: true },
    { name: t('Will'), hasDropdown: true },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        /* Marron atténué avec transparence et flou artistique */
        ? 'bg-[#1a120b]/85 backdrop-blur-md shadow-xl border-b border-amber-900/10' 
        : 'bg-transparent'
    }`}>
      {/* Container pleine largeur sans marges excessives */}
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-28"> {/* Hauteur ajustée pour le logo circulaire */}
          
          {/* LOGO DANS UN CERCLE BLANC */}
          <div className="flex-shrink-0 flex items-center">
            <div className="w-18 h-18 bg-white rounded-full flex items-center justify-center shadow-2xl overflow-hidden border-2 border-amber-600/10 hover:scale-110 transition-transform duration-300">
              <img
                src={logo}
                alt="Logo Cabinet"
                className="w-14 h-14 object-contain"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8 items-center">
            {/* BOUTON LANGUE : Épuré, sans bordures, blanc pur */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 px-3 py-2 text-white hover:text-amber-400 transition-all border-none bg-transparent"
            >
              <Globe className="w-5 h-5 text-amber-500" />
              <span className="font-bold text-sm tracking-widest">{language.toUpperCase()}</span>
            </button>

            {/* Liens : Écritures en blanc pur avec effet de surbrillance */}
            {navItems.map((item) => (
              <a
                key={item.name}
                href="#"
                className="text-white hover:text-amber-400 px-2 py-2 text-sm font-bold transition-colors tracking-wide text-glow"
              >
                {item.name}
                {item.hasDropdown && <ChevronDown className="ml-1 h-3 w-3 inline opacity-70" />}
              </a>
            ))}

            {/* CTA : Rouge Brique Sombre */}
            <button className="bg-[#a82323] hover:bg-red-700 text-white px-7 py-3 rounded-xl text-sm font-bold shadow-xl transition-all active:scale-95">
              Consulter un avocat
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white p-2 focus:outline-none">
              {isMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu : Marron atténué */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#1a120b]/98 border-t border-amber-900/20 shadow-2xl">
          <div className="px-6 py-10 space-y-5">
            <button onClick={toggleLanguage} className="flex items-center space-x-3 text-white border-none bg-transparent">
              <Globe className="w-6 h-6 text-amber-500" />
              <span className="font-bold uppercase tracking-widest">{language === 'fr' ? 'English' : 'Français'}</span>
            </button>
            {navItems.map((item) => (
              <a key={item.name} href="#" className="text-white block text-xl font-bold hover:text-amber-400">{item.name}</a>
            ))}
            <button className="w-full bg-[#a82323] text-white py-5 rounded-2xl font-bold text-lg shadow-lg">
              Consulter un avocat
            </button>
          </div>
        </div>
      )}
    </header>
  )
}