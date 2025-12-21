import { useState } from 'react'

const translations = {
  fr: {
    // Header
    'Practice Areas': 'Domaines de compétence',
    'Immigration': 'Immigration',
    'Property': 'Immobilier',
    'Matrimonial': 'Droit de la famille',
    'Personal': 'Droit civil',
    'Business': 'Droit des affaires',
    'Will': 'Successions',
    'Contact': 'Contact',
    'Free Consultation': 'Consultation gratuite',

    // Hero
    'hero-subtitle': 'Cabinet d\'avocats au quartier Omnisport',
    'hero-title': 'Excellence juridique à votre service',
    'hero-description': 'Situé au quartier Omnisport, rue des Généraux, notre cabinet vous accompagne depuis 2 ans dans tous vos projets juridiques avec professionnalisme et rigueur.',
    'talk-to-lawyer': 'Consulter un avocat',
    'video-consultation': 'Consultation vidéo',
    'video-desc': 'Rencontrez votre avocat en visioconférence depuis chez vous',
    'phone-consultation': 'Consultation téléphonique',
    'phone-desc': 'Échangez directement avec nos juristes par téléphone',
    'document-review': 'Révision de documents',
    'document-desc': 'Faites analyser vos contrats par nos experts',

    // Services
    'our-services': 'Nos services',
    'services-subtitle': 'Expertise juridique complète',
    'immigration-title': 'Droit des étrangers',
    'immigration-desc': 'Accompagnement personnalisé pour vos démarches d\'immigration et de naturalisation.',
    'property-title': 'Droit immobilier',
    'property-desc': 'Conseils et représentation pour vos transactions immobilières et litiges fonciers.',
    'family-title': 'Droit de la famille',
    'family-desc': 'Protection de vos intérêts dans les affaires familiales : divorce, garde d\'enfants, successions.',
    'civil-title': 'Droit civil',
    'civil-desc': 'Défense de vos droits dans tous les aspects du droit civil et commercial.',
    'business-title': 'Droit des affaires',
    'business-desc': 'Accompagnement juridique pour votre entreprise : création, contrats, contentieux.',
    'succession-title': 'Droit des successions',
    'succession-desc': 'Conseils et assistance pour la transmission de votre patrimoine.',

    // Consultation Flow
    'consultation-title': 'Processus de consultation',
    'step-1-title': 'Prise de contact',
    'step-1-desc': 'Contactez-nous pour exposer votre situation',
    'step-2-title': 'Analyse de votre dossier',
    'step-2-desc': 'Étude approfondie de votre problématique juridique',
    'step-3-title': 'Stratégie personnalisée',
    'step-3-desc': 'Proposition d\'une solution adaptée à vos besoins',
    'step-4-title': 'Accompagnement',
    'step-4-desc': 'Suivi et mise en œuvre de la stratégie définie',

    // Booking
    'minutes': 'Minutes',
    'valid-days': 'Jours de validité',
    'per-minute': '/ Minute',
    'book-now': 'Réserver maintenant',
    'popular': 'Populaire',

    // Features
    'why-choose-us': 'Pourquoi nous choisir',
    'features-subtitle': 'Notre engagement pour votre satisfaction',
    'expertise-title': 'Expertise reconnue',
    'expertise-desc': 'Plus de 15 ans d\'expérience en droit des affaires',
    'availability-title': 'Disponibilité',
    'availability-desc': 'Réponse sous 24h à toutes vos demandes',
    'confidentiality-title': 'Confidentialité',
    'confidentiality-desc': 'Respect absolu du secret professionnel',
    'results-title': 'Résultats probants',
    'results-desc': 'Taux de succès supérieur à 95% dans nos dossiers',

    // Testimonials
    'testimonials-title': 'Témoignages clients',
    'testimonials-subtitle': 'Ce que disent nos clients',
    'testimonial-1': 'Maître TCHOUHO a géré mon dossier de divorce avec une grande compétence et humanité. Je recommande vivement ses services.',
    'testimonial-2': 'Excellente expertise en droit immobilier. Le cabinet a défendu mes intérêts avec détermination.',
    'testimonial-3': 'Accompagnement juridique de qualité pour la création de mon entreprise. Service professionnel et réactif.',

    // Team Section
    'our-team': 'Notre équipe',
    'team-description': 'Découvrez les avocats passionnés qui composent notre cabinet et leur expertise spécialisée.',
    'founder-title': 'Fondateur & Avocat Principal',
    'associate-lawyer': 'Avocate Associée',
    'junior-lawyer': 'Avocat Junior',
    'business-law-specialty': 'Droit des affaires',
    'family-law-specialty': 'Droit de la famille',
    'property-law-specialty': 'Droit immobilier',
    'founder-description': 'Fondateur du cabinet, Maître TCHOUHO est spécialisé en droit des affaires et accompagne depuis 2 ans les entreprises dans leur développement et leurs contentieux commerciaux.',
    'associate-description': 'Avocate associée spécialisée en droit de la famille, Me KOUASSI gère les dossiers de divorce, garde d\'enfants et successions avec une approche humaine et rigoureuse.',
    'junior-description': 'Avocat junior spécialisé en droit immobilier, Me TANO assiste ses clients dans l\'achat, vente et location de biens immobiliers ainsi que dans les litiges locatifs.',
    'need-consultation': 'Besoin d\'une consultation ?',
    'consultation-description': 'Contactez-nous pour prendre rendez-vous avec l\'avocat de votre choix.',
    'contact-us': 'Nous contacter',

    // Footer
    'about-us': 'À propos',
    'about-desc': 'Cabinet d\'avocats spécialisé en droit des affaires avec plus de 15 ans d\'expérience.',
    'quick-links': 'Liens rapides',
    'contact-info': 'Informations de contact',
    'follow-us': 'Suivez-nous',
    'all-rights': 'Tous droits réservés'
  },
  en: {
    // Header
    'Practice Areas': 'Practice Areas',
    'Immigration': 'Immigration',
    'Property': 'Property',
    'Matrimonial': 'Matrimonial',
    'Personal': 'Personal',
    'Business': 'Business',
    'Will': 'Will',
    'Contact': 'Contact',
    'Free Consultation': 'Free Consultation',

    // Hero
    'hero-subtitle': 'Specialized business law firm',
    'hero-title': 'Legal excellence at your service',
    'hero-description': 'With over 15 years of experience, Maître TCHOUHO and his team support you in all your legal projects with professionalism and rigor.',
    'talk-to-lawyer': 'Talk to a lawyer',
    'video-consultation': 'Video consultation',
    'video-desc': 'Meet your lawyer via video conference from home',
    'phone-consultation': 'Phone consultation',
    'phone-desc': 'Speak directly with our lawyers by phone',
    'document-review': 'Document review',
    'document-desc': 'Have your contracts analyzed by our experts',

    // Services
    'our-services': 'Our services',
    'services-subtitle': 'Complete legal expertise',
    'immigration-title': 'Immigration law',
    'immigration-desc': 'Personalized support for your immigration and naturalization procedures.',
    'property-title': 'Property law',
    'property-desc': 'Advice and representation for your real estate transactions and land disputes.',
    'family-title': 'Family law',
    'family-desc': 'Protection of your interests in family matters: divorce, child custody, successions.',
    'civil-title': 'Civil law',
    'civil-desc': 'Defense of your rights in all aspects of civil and commercial law.',
    'business-title': 'Business law',
    'business-desc': 'Legal support for your business: creation, contracts, litigation.',
    'succession-title': 'Succession law',
    'succession-desc': 'Advice and assistance for the transmission of your estate.',

    // Consultation Flow
    'consultation-title': 'Consultation process',
    'step-1-title': 'Contact',
    'step-1-desc': 'Contact us to present your situation',
    'step-2-title': 'Case analysis',
    'step-2-desc': 'In-depth study of your legal problem',
    'step-3-title': 'Personalized strategy',
    'step-3-desc': 'Proposal of a solution adapted to your needs',
    'step-4-title': 'Support',
    'step-4-desc': 'Follow-up and implementation of the defined strategy',

    // Booking
    'minutes': 'Minutes',
    'valid-days': 'Valid days',
    'per-minute': '/ Minute',
    'book-now': 'Book now',
    'popular': 'Popular',

    // Features
    'why-choose-us': 'Why choose us',
    'features-subtitle': 'Our commitment to your satisfaction',
    'expertise-title': 'Recognized expertise',
    'expertise-desc': 'Over 15 years of experience in business law',
    'availability-title': 'Availability',
    'availability-desc': 'Response within 24 hours to all your requests',
    'confidentiality-title': 'Confidentiality',
    'confidentiality-desc': 'Absolute respect for professional secrecy',
    'results-title': 'Proven results',
    'results-desc': 'Success rate above 95% in our cases',

    // Testimonials
    'testimonials-title': 'Client testimonials',
    'testimonials-subtitle': 'What our clients say',
    'testimonial-1': 'Maître TCHOUHO handled my divorce case with great competence and humanity. I highly recommend his services.',
    'testimonial-2': 'Excellent expertise in property law. The firm defended my interests with determination.',
    'testimonial-3': 'Quality legal support for my company creation. Professional and responsive service.',

    // Footer
    'about-us': 'About us',
    'about-desc': 'Law firm specialized in business law with over 15 years of experience.',
    'quick-links': 'Quick links',
    'contact-info': 'Contact information',
    'follow-us': 'Follow us',
    'all-rights': 'All rights reserved'
  }
}

export const useTranslation = () => {
  const [language, setLanguage] = useState('fr')

  const t = (key) => {
    return translations[language][key] || key
  }

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'fr' ? 'en' : 'fr')
  }

  return { t, language, toggleLanguage }
}
