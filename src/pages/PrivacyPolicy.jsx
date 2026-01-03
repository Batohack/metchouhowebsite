import { motion } from 'framer-motion'
import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

export function PrivacyPolicy() {
  const [openSection, setOpenSection] = useState(null)
  const [isModalOpen] = useState(false)

  const handleOpenModal = () => {
    // Fonction stub pour Header
  }

  const sections = [
    {
      title: '1. Responsable du traitement des données',
      content: `Cabinet d'avocats TCHOUHO & ASSOCIÉS
Quartier Omnisport, Rue des Généraux
Yaoundé, Cameroun
Téléphone : +237 677 42 31 69
Email : medardtcouho@yahoo.com

Contact DPO : medardtcouho@yahoo.com`
    },
    {
      title: '2. Données collectées',
      content: `Nous collectons les données personnelles suivantes :
- Données d'identification : nom, prénom, adresse
- Données de contact : email, téléphone
- Données professionnelles : secteur d'activité, entreprise
- Données relatives à votre demande juridique
- Cookies et données de navigation (IP, pages visitées)

Ces données sont collectées via :
- Formulaires de contact
- Communications directes
- Cookies de suivi analytique`
    },
    {
      title: '3. Base légale du traitement',
      content: `Le traitement de vos données est fondé sur :
- Votre consentement explicite
- L'exécution de notre contrat de service
- Nos obligations légales
- L'intérêt légitime du cabinet à améliorer nos services
- Le respect de la loi camerounaise et du RGPD`
    },
    {
      title: '4. Finalités du traitement',
      content: `Vos données sont utilisées pour :
- Répondre à vos demandes juridiques
- Vous contacter concernant nos services
- Améliorer notre site et nos services
- Respecter nos obligations légales
- Prévenir la fraude
- Générer des statistiques anonymisées`
    },
    {
      title: '5. Destinataires des données',
      content: `Vos données peuvent être communiquées à :
- Les avocats du cabinet pour traiter votre dossier
- Les services administratifs et comptables
- Les autorités légales si requises
- Nos prestataires techniques (hébergeur, etc.)

Les données ne sont jamais vendues à des tiers commerciaux.`
    },
    {
      title: '6. Conservation des données',
      content: `Les données sont conservées :
- Pendant la durée de notre relation contractuelle
- Plus 7 ans après la fin de la relation (conformément aux délais de prescription légale)
- Les cookies de navigation : 13 mois maximum
- Les données de contact : jusqu'à consentement révoqué`
    },
    {
      title: '7. Vos droits',
      content: `Conformément au RGPD et à la loi camerounaise, vous disposez de :
- Droit d'accès à vos données
- Droit de rectification
- Droit à l'oubli / suppression
- Droit à la limitation du traitement
- Droit à la portabilité des données
- Droit d'opposition
- Droit de retrait de consentement
- Droit de déposer plainte auprès de l'autorité compétente

Pour exercer ces droits : medardtcouho@yahoo.com`
    },
    {
      title: '8. Sécurité des données',
      content: `Nous mettons en place des mesures de sécurité :
- Chiffrement SSL/TLS pour le site
- Accès restreint aux données sensibles
- Sauvegarde régulière des données
- Politique de confidentialité stricte
- Formation du personnel sur la protection des données

Cependant, aucune transmission sur Internet n'est 100% sécurisée.`
    },
    {
      title: '9. Cookies',
      content: `Notre site utilise :
- Cookies essentiels (fonctionnement du site)
- Cookies analytiques (Google Analytics) - consentement requis
- Cookies de performance

Vous pouvez refuser les cookies non essentiels via votre navigateur.
Chaque cookie de suivi a une durée de 13 mois maximum.`
    },
    {
      title: '10. Modifications de cette politique',
      content: `Nous nous réservons le droit de modifier cette politique de confidentialité.
Les modifications seront notifiées sur cette page avec mise à jour de la date.
L'utilisation continue du site après modification implique l'acceptation des nouveaux termes.

Dernière mise à jour : Janvier 2025`
    }
  ]

  const toggleSection = (idx) => {
    setOpenSection(openSection === idx ? null : idx)
  }

  return (
    <div className="min-h-screen bg-white">
      <Header onOpenModal={handleOpenModal} />
      
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Titre */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-[#3e2723] mb-6">
              Politique de Confidentialité
            </h1>
            <p className="text-[#5d4037] text-lg mb-4">
              Vos données personnelles et votre vie privée sont importantes pour nous.
            </p>
            <p className="text-[#7d5d57] text-sm">
              Dernière mise à jour : Janvier 2025
            </p>
          </motion.div>

          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-amber-50 border-l-4 border-amber-600 p-6 rounded-r-lg mb-12"
          >
            <p className="text-[#3e2723] leading-relaxed">
              Cabinet d'avocats TCHOUHO & ASSOCIÉS respecte la protection de votre vie privée. 
              Cette politique explique comment nous collectons, utilisons et protégeons vos données 
              conformément au <strong>Règlement Général sur la Protection des Données (RGPD)</strong> 
              et à la législation camerounaise.
            </p>
          </motion.div>

          {/* Sections dépliables */}
          <div className="space-y-4">
            {sections.map((section, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
              >
                <button
                  onClick={() => toggleSection(idx)}
                  className="w-full bg-[#f5f1ed] hover:bg-amber-100 transition-colors p-6 rounded-lg text-left flex justify-between items-center group"
                >
                  <h2 className="text-lg font-bold text-[#3e2723] group-hover:text-amber-700">
                    {section.title}
                  </h2>
                  <ChevronDown 
                    className={`w-5 h-5 text-amber-600 transition-transform duration-300 ${
                      openSection === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {openSection === idx && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="bg-white border border-t-0 border-[#e0d7d3] p-6 rounded-b-lg"
                  >
                    <p className="text-[#5d4037] leading-relaxed whitespace-pre-line">
                      {section.content}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-[#3e2723] text-white p-8 rounded-lg"
          >
            <h2 className="text-2xl font-bold mb-4">Questions sur votre vie privée ?</h2>
            <p className="mb-6">
              Pour toute question ou demande concernant cette politique de confidentialité, 
              contactez-nous directement :
            </p>
            <div className="space-y-2 text-amber-300">
              <p>📧 Email : medardtcouho@yahoo.com</p>
              <p>📞 Téléphone : +237 677 42 31 69</p>
              <p>📍 Adresse : Quartier Omnisport, Rue des Généraux, Yaoundé</p>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
