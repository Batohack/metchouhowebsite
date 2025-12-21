import React, { useState, useEffect } from 'react'
import { Menu, X, ChevronDown, Globe } from 'lucide-react'
import { useTranslation } from '../../hooks/useTranslation'
import { getSafeScrollY } from '../../utils/scroll.utils'
import logo from '../../assets/CabinetLogo.svg'

// Ajout de la prop onOpenModal pour déclencher la page de rendez-vous
export function Header({ onOpenModal }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { t, language, toggleLanguage } = useTranslation()

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = getSafeScrollY()
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
    <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
      isScrolled 
        ? 'bg-[#1a120b]/85 backdrop-blur-md shadow-xl border-b border-amber-900/10 py-1' 
        : 'bg-transparent py-3'
    }`}>
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo dans un Cercle Blanc */}
          <div className="flex-shrink-0 flex items-center">
            <div className={`bg-white rounded-full flex items-center justify-center shadow-lg overflow-hidden border-2 border-amber-600/10 hover:scale-105 transition-all duration-300 ${
              isScrolled ? 'w-14 h-14' : 'w-16 h-16'
            }`}>
              <img
                src={logo}
                alt="Logo Cabinet"
                className="w-10 h-10 object-contain"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8 items-center">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 px-3 py-2 text-white hover:text-amber-400 transition-all border-none bg-transparent cursor-pointer"
            >
              <Globe className="w-5 h-5 text-amber-500" />
              <span className="font-bold text-sm tracking-widest">{language.toUpperCase()}</span>
            </button>

            {navItems.map((item) => (
              <a
                key={item.name}
                href="#"
                className="text-white hover:text-amber-400 px-2 py-2 text-sm font-bold transition-colors tracking-wide"
              >
                {item.name}
                {item.hasDropdown && <ChevronDown className="ml-1 h-3 w-3 inline opacity-50" />}
              </a>
            ))}

            {/* BOUTON AJUSTÉ : Appel de la fonction onOpenModal */}
            <button 
              onClick={onOpenModal}
              className="bg-[#a82323] hover:bg-red-700 text-white px-6 py-3 rounded-xl text-sm font-bold shadow-xl transition-all active:scale-95 transform hover:-translate-y-0.5"
            >
              Consulter un avocat
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white p-2">
              {isMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#1a120b] border-t border-amber-900/20 shadow-2xl">
          <div className="px-6 py-8 space-y-5">
            <button onClick={toggleLanguage} className="flex items-center space-x-3 text-white w-full py-2">
              <Globe className="w-6 h-6 text-amber-500" />
              <span className="font-bold uppercase tracking-widest">{language === 'fr' ? 'English' : 'Français'}</span>
            </button>
            {navItems.map((item) => (
              <a key={item.name} href="#" className="text-white block text-lg font-bold hover:text-amber-400">{item.name}</a>
            ))}
            <button 
              onClick={() => { setIsMenuOpen(false); onOpenModal(); }}
              className="w-full bg-[#a82323] text-white py-4 rounded-xl font-bold shadow-lg"
            >
              Consulter un avocat
            </button>
          </div>
        </div>
      )}
    </header>
  )
}