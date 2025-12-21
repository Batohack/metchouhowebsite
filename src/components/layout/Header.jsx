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
      setIsScrolled(scrollY > 20)
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
      isScrolled ? 'bg-[#0f0a07]/95 backdrop-blur-lg shadow-2xl' : 'bg-transparent'
    }`}>
      {/* Container sans marges latérales excessives */}
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          
          {/* Logo dans un Cercle Blanc */}
          <div className="flex-shrink-0 flex items-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg overflow-hidden border-2 border-amber-600/20 hover:scale-105 transition-transform duration-300">
              <img
                src={logo}
                alt="Logo Cabinet"
                className="w-12 h-12 object-contain"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8 items-center">
            {/* Language Toggle : Épuré sans bordures */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 px-3 py-2 text-white hover:text-amber-400 transition-all"
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
                {item.hasDropdown && <ChevronDown className="ml-1 h-3 w-3 inline opacity-70" />}
              </a>
            ))}

            <button className="bg-[#a82323] hover:bg-red-700 text-white px-6 py-3 rounded-xl text-sm font-bold shadow-xl transition-all active:scale-95">
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
        <div className="lg:hidden bg-[#0f0a07] border-t border-amber-900/20">
          <div className="px-5 py-8 space-y-4">
            <button onClick={toggleLanguage} className="flex items-center space-x-3 text-white">
              <Globe className="w-6 h-6 text-amber-500" />
              <span className="font-bold uppercase tracking-tighter">{language === 'fr' ? 'English' : 'Français'}</span>
            </button>
            {navItems.map((item) => (
              <a key={item.name} href="#" className="text-white block text-lg font-medium">{item.name}</a>
            ))}
            <button className="w-full bg-[#a82323] text-white py-4 rounded-xl font-bold">Consulter un avocat</button>
          </div>
        </div>
      )}
    </header>
  )
}