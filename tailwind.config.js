/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Nouvelle Palette Équilibrée - Cabinet d'Avocats International
        // Bleu Nuit Profond - Couleur dominante (autorité, confiance, structure)
        'primary-dark': '#0A192F',    // Header, Footer, Hero, titres principaux

        // Blanc Pur/Cassé - Couleur de respiration (clarté, lisibilité)
        'neutral-white': '#FFFFFF',   // Sections de contenu, cartes sur fond sombre

        // Marron Chaud/Bronze - Couleur secondaire (stabilité, élégance)
        'secondary-brown': '#8D6E63', // Cartes, bordures, icônes, sous-titres

        // Rouge Vif/Brique - Couleur d'accent (urgence, action)
        'accent-red': '#C62828',      // UNIQUEMENT pour CTA principaux

        // Variations pour la hiérarchie
        'text-primary': '#0A192F',    // Texte principal (Bleu Nuit)
        'text-secondary': '#8D6E63',  // Texte secondaire (Marron)
        'text-accent': '#C62828',     // Texte accent (Rouge)
        'text-light': '#FFFFFF',      // Texte sur fonds sombres

        // Fonds alternés pour le rythme visuel
        'bg-dark': '#0A192F',         // Sections impact (Header, Footer, Hero)
        'bg-light': '#FFFFFF',        // Sections contenu (Services, Équipe)
        'bg-card': '#F8F9FA',         // Cartes sur fond blanc
        'bg-card-dark': '#1a365d',    // Cartes sur fond sombre (légèrement plus clair)

        // Bordures et accents
        'border-light': '#E2E8F0',    // Bordures subtiles
        'border-dark': '#8D6E63',     // Bordures élégantes
        'border-accent': '#C62828',   // Bordures CTA

        // États hover et focus
        'hover-primary': '#1e40af',   // Bleu plus foncé au hover
        'hover-secondary': '#a16207', // Marron plus foncé au hover
        'hover-accent': '#991b1b',    // Rouge plus foncé au hover
      },
      backgroundImage: {
        'hero-dark': "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)",
        'gradient-dark': "linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 100%)",
        'gradient-accent': "linear-gradient(135deg, #ff6b35 0%, #d97706 100%)",
      },
      boxShadow: {
        'dark-soft': '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 10px 15px -3px rgba(0, 0, 0, 0.4)',
        'dark-strong': '0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.4)',
        'accent-glow': '0 0 20px rgba(255, 107, 53, 0.3)',
      },
    },
  },
  plugins: [],
}
