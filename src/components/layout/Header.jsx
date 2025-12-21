import React, { useState, useEffect } from 'react'
import { Menu, X, ChevronDown, Globe } from 'lucide-react'
import { useTranslation } from '../../hooks/useTranslation'
import logo from '../../assets/CabinetLogo.svg'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { t, language, toggleLanguage } = useTranslation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
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
    <header className={`header-sticky ${isScrolled ? 'scrolled' : ''}`}>
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
              className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-sky-600 hover:bg-sky-700 text-white text-sm font-semibold"
              title={`Changer de langue (${language === 'fr' ? 'English' : 'Français'})`}
            >
              <Globe className="w-4 h-4" />
              <span>{language.toUpperCase()}</span>
            </button>
            {navItems.map((item) => (
              <a
                key={item.name}
                href="#"
                className="text-slate-700 hover:text-sky-600 px-3 py-2 text-sm font-medium flex items-center rounded-lg hover:bg-slate-50"
              >
                {item.name}
                {item.hasDropdown && <ChevronDown className="ml-1 h-3 w-3" />}
              </a>
            ))}
            <button className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-2 rounded-lg text-sm font-semibold">
              {t('Contact')}
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#FF0000] focus:outline-none"
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
        <div className="lg:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {/* Language Toggle Mobile */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 px-3 py-2 rounded-md bg-[#2C5F5F] hover:bg-[#1a3a3a] text-white w-full text-left"
            >
              <Globe className="w-4 h-4" />
              <span>{language === 'fr' ? 'English' : 'Français'}</span>
            </button>

            {navItems.map((item) => (
              <a
                key={item.name}
                href="#"
                className="text-gray-700 hover:text-[#FF0000] hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium"
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4 pb-2">
              <button className="w-full bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 rounded-lg text-base font-semibold">
                {t('Contact')}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
