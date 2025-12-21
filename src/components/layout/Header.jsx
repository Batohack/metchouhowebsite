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
      setIsScrolled(scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    {
      name: t('Immigration'),
      hasDropdown: true,
    },
    {
      name: t('Property'),
      hasDropdown: true,
    },
    {
      name: t('Matrimonial'),
      hasDropdown: true,
    },
    {
      name: t('Personal'),
      hasDropdown: true,
    },
    {
      name: t('Business'),
      hasDropdown: true,
    },
    {
      name: t('Will'),
      hasDropdown: true,
    },
  ]
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-blue-night/95 backdrop-blur-md shadow-lg'
        // MODIFICATION ICI : Ajout d'un fond noir léger (20% d'opacité) au lieu de 'bg-transparent'
        : 'bg-black/20 backdrop-blur-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img
              src={logo}
              alt="Cabinet TCHOUHO - Avocats"
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6 items-center">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              // MODIFICATION ICI : Texte en blanc ('text-white') au lieu de 'text-text-light'
              className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-secondary-brown hover:bg-hover-secondary text-white text-sm font-semibold"
              title={`Changer de langue (${language === 'fr' ? 'English' : 'Français'})`}
            >
              <Globe className="w-4 h-4" />
              <span>{language.toUpperCase()}</span>
            </button>
            {navItems.map((item) => (
              <a
                key={item.name}
                href="#"
                // MODIFICATION ICI : Texte en blanc ('text-white') au lieu de 'text-slate-200'
                className="text-white hover:text-accent-red px-3 py-2 text-sm font-medium flex items-center rounded-lg hover:bg-primary-dark"
              >
                {item.name}
                {item.hasDropdown && <ChevronDown className="ml-1 h-3 w-3" />}
              </a>
            ))}
            {/* MODIFICATION ICI : Texte en blanc ('text-white') */}
            <button className="bg-accent-red hover:bg-hover-accent text-white px-6 py-2 rounded-lg text-sm font-semibold">
              Consulter un avocat
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              // MODIFICATION ICI : Texte en blanc ('text-white')
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-accent-primary focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-primary-dark border-t border-secondary-brown">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {/* Language Toggle Mobile */}
            <button
              onClick={toggleLanguage}
              // MODIFICATION ICI : Texte en blanc ('text-white')
              className="flex items-center space-x-2 px-3 py-2 rounded-md bg-secondary-brown hover:bg-hover-secondary text-white w-full text-left"
            >
              <Globe className="w-4 h-4" />
              <span>{language === 'fr' ? 'English' : 'Français'}</span>
            </button>

            {navItems.map((item) => (
              <a
                key={item.name}
                href="#"
                // MODIFICATION ICI : Texte en blanc ('text-white')
                className="text-white hover:text-accent-red hover:bg-primary-dark block px-3 py-2 rounded-md text-base font-medium"
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4 pb-2">
              {/* MODIFICATION ICI : Texte en blanc ('text-white') */}
              <button className="w-full bg-accent-red hover:bg-hover-accent text-white px-6 py-3 rounded-lg text-base font-semibold">
                Consulter un avocat
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}