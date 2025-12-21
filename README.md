# 🏛️ Cabinet TCHOUHO - Frontend

> **Application Web Moderne - Site vitrine du Cabinet d'Avocats TCHOUHO**

[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-4.4.5-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3.3-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-10.16.4-0055FF?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)

## 📋 Table des Matières

- [🏛️ Cabinet TCHOUHO - Frontend](#️-cabinet-tchouho---frontend)
  - [📋 Table des Matières](#-table-des-matières)
  - [🌟 Vue d'ensemble](#-vue-densemble)
  - [✨ Fonctionnalités](#-fonctionnalités)
  - [🏗️ Architecture](#️-architecture)
  - [🚀 Démarrage Rapide](#-démarrage-rapide)
  - [📦 Installation](#-installation)
  - [🏃‍♂️ Développement](#️-développement)
  - [🏗️ Construction](#️-construction)
  - [🧪 Tests](#-tests)
  - [🎨 Design System](#-design-system)
  - [🔧 Technologies Utilisées](#-technologies-utilisées)
  - [📁 Structure du Projet](#-structure-du-projet)
  - [🌍 Internationalisation (i18n)](#-internationalisation-i18n)
  - [📱 Responsive Design](#-responsive-design)
  - [♿ Accessibilité](#-accessibilité)
  - [🔍 SEO & Performance](#-seo--performance)
  - [🚀 Déploiement](#-déploiement)
  - [👥 Contributeurs](#-contributeurs)
  - [📄 Licence](#-licence)

## 🌟 Vue d'ensemble

Le frontend du site web du **Cabinet TCHOUHO** est une application React moderne et performante conçue pour présenter les services d'un cabinet d'avocats international spécialisé en droit des affaires. L'application offre une expérience utilisateur haut de gamme avec des animations fluides, un design responsive et une architecture modulaire.

**🎯 Objectif :** Créer une présence digitale prestigieuse qui inspire confiance et reflète l'excellence juridique du cabinet.

## ✨ Fonctionnalités

### 🏠 **Page d'accueil**
- **Hero Section** : Présentation impactante avec image d'arrière-plan en full cover
- **Navigation Sticky** : Header avec effet glassmorphism au scroll
- **Call-to-Action** : Boutons magnétiques avec animations et smooth scroll
- **Stats Section** : Chiffres clés avec animations au scroll

### 👥 **Section Équipe**
- **Présentation des Avocats** : Cartes élégantes avec photos professionnelles
- **Lightbox Modal** : Affichage des photos en grand format
- **Informations détaillées** : Spécialités, expériences, coordonnées
- **Design responsive** : Adapté à tous les écrans

### ⚖️ **Services Juridiques**
- **Cartes de Services** : Présentation visuelle des domaines d'expertise
- **Animations interactives** : Hover effects et scroll animations
- **Consultation Flow** : Processus de consultation guidé
- **Réservation en ligne** : Formulaire de prise de rendez-vous

### 📞 **Contact & Localisation**
- **Formulaire de Contact** : Interface moderne et intuitive
- **Carte Google Maps** : Localisation précise du cabinet
- **Informations de contact** : Téléphone, email, adresse
- **Réseaux sociaux** : Liens vers LinkedIn, Facebook, etc.

### 🌐 **Multilinguisme**
- **Français** : Langue par défaut
- **Anglais** : Support complet
- **Toggle intuitif** : Changement de langue fluide

## 🏗️ Architecture

```
frontend/
├── public/                 # Assets statiques
├── src/
│   ├── assets/            # Images, icônes, polices
│   ├── components/        # Composants React
│   │   ├── about/         # Section équipe
│   │   ├── layout/        # Header, Footer
│   │   ├── sections/      # Sections principales
│   │   └── services/      # Services juridiques
│   ├── hooks/             # Hooks personnalisés
│   ├── App.jsx            # Composant racine
│   ├── main.jsx           # Point d'entrée
│   └── index.css          # Styles globaux
├── package.json           # Dépendances
├── vite.config.js         # Configuration Vite
├── tailwind.config.js     # Configuration Tailwind
└── eslint.config.js       # Configuration ESLint
```

## 🚀 Démarrage Rapide

### Prérequis
- **Node.js** >= 18.0.0
- **npm** >= 9.0.0 ou **yarn** >= 1.22.0
- **Backend API** en cours d'exécution (port 3001)

### Installation rapide
```bash
# Cloner le repository
git clone <repository-url>
cd frontend

# Installer les dépendances
npm install

# Lancer en mode développement
npm run dev
```

L'application sera accessible sur `http://localhost:5173`

## 📦 Installation

### 1. Clonage du repository
```bash
git clone <repository-url>
cd frontend
```

### 2. Installation des dépendances
```bash
# Avec npm
npm install

# Avec yarn
yarn install
```

### 3. Variables d'environnement
Créer un fichier `.env` à la racine :
```env
VITE_API_URL=http://localhost:3001/api
VITE_APP_TITLE=Cabinet TCHOUHO
VITE_APP_DESCRIPTION=Excellence juridique depuis 2 ans
```

### 4. Lancement du serveur de développement
```bash
npm run dev
```

## 🏃‍♂️ Développement

### Scripts disponibles
```bash
# Développement
npm run dev          # Serveur de développement Vite
npm run build        # Construction pour la production
npm run preview      # Prévisualisation du build
npm run lint         # Vérification ESLint
```

### Structure des composants
- **Fonctionnels** : Composants avec logique métier
- **Présentiels** : Composants d'affichage pur
- **Layout** : Composants de structure (Header, Footer)
- **Sections** : Grandes sections de page

### Gestion d'état
- **React Hooks** : useState, useEffect
- **Context API** : Pour la gestion globale (thème, langue)
- **Props drilling** évité grâce à une architecture modulaire

## 🏗️ Construction

### Build de production
```bash
npm run build
```

### Optimisations incluses
- ✅ **Code splitting** automatique
- ✅ **Tree shaking** des dépendances inutiles
- ✅ **Minification** CSS et JS
- ✅ **Compression** des assets
- ✅ **Preloading** des ressources critiques

### Analyse du bundle
```bash
npm run build -- --analyze
```

## 🧪 Tests

### Configuration des tests
```bash
# Installation des dépendances de test
npm install --save-dev vitest @testing-library/react @testing-library/jest-dom
```

### Scripts de test
```bash
npm run test          # Exécution des tests
npm run test:watch    # Mode watch
npm run test:coverage # Rapport de couverture
```

### Structure des tests
```
src/
├── components/
│   └── Button/
│       ├── Button.jsx
│       ├── Button.test.jsx
│       └── Button.stories.jsx
```

## 🎨 Design System

### Palette de Couleurs
```css
/* Couleurs naturelles africaines */
--color-primary: #2d3748      /* Gris bleu profond */
--color-accent: #d69e2e       /* Or africain */
--color-terracotta: #dd6b20   /* Terracotta */
--color-sage: #84cc16        /* Vert d'eau */
--color-sand: #f7fafc        /* Beige sable */
```

### Typographie
- **Titres** : Playfair Display (serif élégant)
- **Corps** : Inter (sans-serif moderne)
- **Hiérarchie** : Taille et poids cohérents

### Composants de Base
- **Buttons** : Variants primary/secondary avec animations
- **Cards** : Design luxueux avec effets de survol
- **Forms** : Interface moderne et accessible
- **Modals** : Lightbox élégante avec animations

## 🔧 Technologies Utilisées

### Core Framework
- **[React 18](https://reactjs.org/)** - Bibliothèque UI moderne
- **[Vite](https://vitejs.dev/)** - Outil de build ultra-rapide

### Styling & UI
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utilitaire
- **[Framer Motion](https://www.framer.com/motion/)** - Animations React
- **[Lucide React](https://lucide.dev/)** - Icônes modernes

### Développement
- **[ESLint](https://eslint.org/)** - Linting du code
- **[PostCSS](https://postcss.org/)** - Traitement CSS
- **[Autoprefixer](https://autoprefixer.github.io/)** - Préfixes CSS

### Utilitaires
- **Custom Hooks** - Logique réutilisable
- **Intersection Observer** - Animations au scroll
- **Local Storage** - Persistance des préférences

## 📁 Structure du Projet

```
frontend/
├── public/                          # Assets statiques
│   └── vite.svg
├── src/
│   ├── assets/                     # Médias et ressources
│   │   ├── CabinetLogo.svg
│   │   ├── HeroC.png
│   │   └── Metchouho.jpg
│   ├── components/                 # Composants React
│   │   ├── about/                  # Section équipe
│   │   │   └── Team.jsx
│   │   ├── layout/                 # Structure de page
│   │   │   ├── Header.jsx
│   │   │   └── Footer.jsx
│   │   ├── sections/               # Sections principales
│   │   │   ├── Hero.jsx
│   │   │   ├── WhyChooseUs.jsx
│   │   │   └── Testimonials.jsx
│   │   └── services/               # Services juridiques
│   │       └── ServiceCards.jsx
│   ├── hooks/                      # Hooks personnalisés
│   │   └── useTranslation.js
│   ├── App.jsx                     # Composant racine
│   ├── main.jsx                    # Point d'entrée React
│   └── index.css                   # Styles globaux
├── package.json                    # Dépendances & scripts
├── vite.config.js                  # Configuration Vite
├── tailwind.config.js              # Configuration Tailwind
├── eslint.config.js                # Configuration ESLint
└── README.md                       # Documentation
```

## 🌍 Internationalisation (i18n)

### Langues supportées
- **🇫🇷 Français** (par défaut)
- **🇺🇸 Anglais** (support complet)

### Structure des traductions
```javascript
const translations = {
  fr: {
    'hero-title': 'Excellence juridique à votre service',
    'contact-us': 'Nous contacter',
    // ...
  },
  en: {
    'hero-title': 'Legal excellence at your service',
    'contact-us': 'Contact us',
    // ...
  }
}
```

### Hook personnalisé
```jsx
import { useTranslation } from '../hooks/useTranslation'

function MyComponent() {
  const { t, language, toggleLanguage } = useTranslation()

  return (
    <div>
      <h1>{t('hero-title')}</h1>
      <button onClick={toggleLanguage}>
        {language === 'fr' ? 'EN' : 'FR'}
      </button>
    </div>
  )
}
```

## 📱 Responsive Design

### Breakpoints
```css
/* Mobile First Approach */
.sm: 640px   /* Small devices */
.md: 768px   /* Medium devices */
.lg: 1024px  /* Large devices */
.xl: 1280px  /* Extra large devices */
```

### Composants adaptatifs
- **Grid responsive** : Colonnes adaptatives
- **Images fluides** : Aspect ratio maintenu
- **Navigation mobile** : Menu hamburger
- **Touch-friendly** : Cibles tactiles de 44px minimum

## ♿ Accessibilité

### Standards respectés
- ✅ **WCAG 2.1 AA** - Conformité niveau A et AA
- ✅ **Navigation clavier** - Focus visible et logique
- ✅ **Lecteurs d'écran** - Labels et descriptions
- ✅ **Contraste des couleurs** - Ratio minimum 4.5:1

### Fonctionnalités incluses
- **ARIA labels** sur les éléments interactifs
- **Skip links** pour la navigation
- **Focus management** dans les modals
- **Text alternatives** pour les images

## 🔍 SEO & Performance

### Optimisations SEO
- ✅ **Meta tags** dynamiques
- ✅ **Open Graph** pour les réseaux sociaux
- ✅ **Structured Data** (JSON-LD)
- ✅ **URLs propres** et descriptives

### Performance
- ✅ **Core Web Vitals** optimisés
- ✅ **Lazy loading** des images
- ✅ **Code splitting** automatique
- ✅ **Compression** GZIP/Brotli

## 🚀 Déploiement

### Préparation du déploiement
```bash
# Build de production
npm run build

# Test du build localement
npm run preview
```

### Plateformes recommandées
- **[Vercel](https://vercel.com/)** - Déploiement automatique
- **[Netlify](https://netlify.com/)** - CDN global
- **[Railway](https://railway.app/)** - Full-stack deployment

### Configuration CI/CD
```yaml
# .github/workflows/deploy.yml
name: Deploy Frontend
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm ci
      - run: npm run build
      - run: # Deploy to your platform
```

## 👥 Contributeurs

### Équipe de Développement
- **Lead Developer** : [BATOSINE DORIAN]
- **UI/UX Designer** : [BATOSINE DORIAN]
- **Project Manager** : [BATOSINE DORIAN]

### Contribution
Voir le [guide de contribution](../CONTRIBUTING.md) pour les détails.

## 📄 Licence

**© 2024 Cabinet TCHOUHO**

Tous droits réservés. Ce projet est la propriété intellectuelle du Cabinet TCHOUHO.

---

<div align="center">

**🏛️ Cabinet TCHOUHO - Excellence juridique depuis 2 ans**

*Site web développé avec ❤️ pour servir la justice*

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/company/cabinet-tchouho)
[![Website](https://img.shields.io/badge/Website-000000?style=for-the-badge&logo=google-chrome&logoColor=white)](https://cabinet-tchouho.com)

</div>
