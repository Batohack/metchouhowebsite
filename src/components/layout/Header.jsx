import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { getSafeScrollY, safeScrollToElement } from '../../utils/scroll.utils'
import logo from '../../assets/CabinetLogo.svg'

export function Header({ onOpenModal }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
 

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = getSafeScrollY()
      setIsScrolled(scrollY > 15)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Fonction pour remonter en haut de page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navItems = [
    { name: "À propos de Nous", id: 'about-section' },
  ]

  const location = useLocation()
  const navigate = useNavigate()

  const handleTeamClick = (e) => {
    e.preventDefault()
    setIsMenuOpen(false)
    const scrollOptions = { behavior: 'smooth', block: 'start', offset: 80 }
    if (location.pathname === '/') {
      safeScrollToElement('team-section', scrollOptions)
    } else {
      navigate('/')
      // wait for route change and DOM mount, then scroll
      setTimeout(() => safeScrollToElement('team-section', scrollOptions), 180)
    }
  }

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    setIsMenuOpen(false);
    safeScrollToElement(sectionId, {
      behavior: 'smooth',
      block: 'start',
      offset: 80
    });
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-500 bg-[#1a120b]/95 backdrop-blur-md shadow-xl border-b border-amber-900/10 py-2`}>
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* LOGO + TEXTE */}
          <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer hover:opacity-90 transition-opacity" onClick={scrollToTop}>
            {/* Logo circulaire */}
            <div className={`bg-white rounded-full shadow-lg overflow-hidden border-2 border-amber-600/10 flex items-center justify-center flex-shrink-0 ${
              isScrolled ? 'w-14 h-14' : 'w-16 h-16'
            }`}>
              <img
                src={logo}
                alt="Logo Cabinet"
                className="w-full h-full object-cover" 
              />
            </div>
            
            {/* Texte du cabinet */}
            <div className="hidden sm:flex flex-col">
             
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8 items-center">
            <a
              href="/"
              onClick={handleTeamClick}
              className="text-white hover:text-amber-400 px-2 py-2 text-sm font-bold transition-colors tracking-wide"
            >
              Équipe
            </a>

            {navItems.map((item) => (
              <a
                key={item.name}
                href="#"
                onClick={(e) => handleNavClick(e, item.id)}
                className="text-white hover:text-amber-400 px-2 py-2 text-sm font-bold transition-colors tracking-wide"
              >
                {item.name}
                <ChevronDown className="ml-1 h-3 w-3 inline opacity-50" />
              </a>
            ))}

            <Link 
              to="/honoraires"
              className="text-white hover:text-amber-400 px-2 py-2 text-sm font-bold transition-colors tracking-wide"
            >
              Honoraires
            </Link>

            <Link 
              to="/contact"
              className="text-white hover:text-amber-400 px-2 py-2 text-sm font-bold transition-colors tracking-wide"
            >
              Contact
            </Link>

            <button 
              onClick={onOpenModal}
              className="bg-[#a82323] hover:bg-red-700 text-white px-6 py-3 rounded-xl text-sm font-bold shadow-xl transition-all active:scale-95 transform hover:-translate-y-0.5 cursor-pointer"
            >
              Consulter un avocat
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white p-2 cursor-pointer">
              {isMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#1a120b] border-t border-amber-900/20 shadow-2xl">
          <div className="px-6 py-8 space-y-5">
            <a href="/" onClick={handleTeamClick} className="text-white block text-lg font-bold hover:text-amber-400">Équipe</a>
            {navItems.map((item) => (
              <a 
                key={item.name} 
                href="#" 
                onClick={(e) => handleNavClick(e, item.id)}
                className="text-white block text-lg font-bold hover:text-amber-400"
              >
                {item.name}
              </a>
            ))}
            <Link 
              to="/honoraires"
              onClick={() => setIsMenuOpen(false)}
              className="text-white block text-lg font-bold hover:text-amber-400"
            >
              Honoraires
            </Link>
            <Link 
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="text-white block text-lg font-bold hover:text-amber-400"
            >
              Contact
            </Link>
            <button 
              onClick={() => { setIsMenuOpen(false); onOpenModal(); }}
              className="w-full bg-[#a82323] text-white py-4 rounded-xl font-bold shadow-lg cursor-pointer"
            >
              Consulter un avocat
            </button>
          </div>
        </div>
      )}
      </header>

      {/* Spacer to push content below fixed header on small screens */}
      <div aria-hidden="true" className="lg:hidden h-20" />
    </>
  )
}