import { motion } from 'framer-motion'
import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'
import { useState } from 'react'

export function LegalNotice() {
  const [isModalOpen] = useState(false)

  const handleOpenModal = () => {
    // Fonction stub pour Header
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
              Mentions Légales
            </h1>
            <p className="text-[#5d4037] text-lg mb-4">
              Informations légales relatives à notre cabinet et notre site web.
            </p>
            <p className="text-[#7d5d57] text-sm">
              Dernière mise à jour : Janvier 2025
            </p>
          </motion.div>

          {/* Contenu */}
          <div className="space-y-12">
            {/* 1. Identification du cabinet */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-[#3e2723] mb-4 pb-3 border-b-2 border-amber-600">
                1. Identification du Cabinet d'Avocats
              </h2>
              <div className="space-y-3 text-[#5d4037] leading-relaxed">
                <p><strong>Dénomination :</strong> Cabinet d'avocats TCHOUHO & ASSOCIÉS</p>
                <p><strong>Forme juridique :</strong> Entreprise individuelle / Société civile professionnelle</p>
                <p><strong>Gérant :</strong> Me Médard TCHOUHO</p>
                <p><strong>Titre professionnel :</strong> Avocat à la Cour, Barreau du Cameroun</p>
                <p><strong>Numéro de barreau :</strong> [À compléter avec le numéro exact]</p>
                <p><strong>Adresse du siège :</strong> Quartier Omnisport, Rue des Généraux, Yaoundé, Cameroun</p>
                <p><strong>Téléphone :</strong> +237 677 42 31 69</p>
                <p><strong>Email :</strong> medardtcouho@yahoo.com</p>
                <p><strong>Secteur d'activité :</strong> Conseil juridique et représentation juridique</p>
              </div>
            </motion.section>

            {/* 2. Responsabilité professionnelle */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-[#3e2723] mb-4 pb-3 border-b-2 border-amber-600">
                2. Responsabilité Professionnelle
              </h2>
              <div className="space-y-3 text-[#5d4037] leading-relaxed">
                <p>
                  Le cabinet d'avocats TCHOUHO & ASSOCIÉS est soumis aux règles de la profession 
                  d'avocat au Cameroun et aux directives du Barreau du Cameroun.
                </p>
                <p>
                  <strong>Assurance responsabilité civile :</strong> Le cabinet est assuré contre la 
                  responsabilité civile professionnelle conformément aux exigences légales.
                </p>
                <p>
                  <strong>Déontologie :</strong> Le cabinet respecte le code de déontologie de la profession 
                  d'avocat, notamment le secret professionnel et l'indépendance.
                </p>
              </div>
            </motion.section>

            {/* 3. Propriété du site web */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-[#3e2723] mb-4 pb-3 border-b-2 border-amber-600">
                3. Propriété du Site Web
              </h2>
              <div className="space-y-3 text-[#5d4037] leading-relaxed">
                <p><strong>Propriétaire du site :</strong> Cabinet d'avocats TCHOUHO & ASSOCIÉS</p>
                <p><strong>Hébergeur :</strong> [À spécifier - ex: Vercel, Netlify, etc.]</p>
                <p><strong>Développement :</strong> BATOSINE DORIAN</p>
                <p>
                  Tous les contenus, textes, images et éléments visuels du site sont la propriété 
                  du cabinet ou utilisés avec autorisation. Toute reproduction sans autorisation est interdite.
                </p>
              </div>
            </motion.section>

            {/* 4. Conditions d'utilisation */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-[#3e2723] mb-4 pb-3 border-b-2 border-amber-600">
                4. Conditions d'Utilisation du Site
              </h2>
              <div className="space-y-3 text-[#5d4037] leading-relaxed">
                <p>
                  Les informations fournies sur ce site web sont de nature générale et à titre informatif. 
                  Elles ne constituent pas un conseil juridique personnalisé.
                </p>
                <p>
                  <strong>Avertissement :</strong> Toute action entreprise sur la base des contenus de ce site 
                  est à titre personnel et aux risques de l'utilisateur. Le cabinet n'assume aucune responsabilité 
                  pour les dommages directs ou indirects résultant de l'utilisation du site.
                </p>
                <p>
                  L'accès au site implique l'acceptation pleine et entière de ces conditions d'utilisation.
                </p>
              </div>
            </motion.section>

            {/* 5. Secret professionnel */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-[#3e2723] mb-4 pb-3 border-b-2 border-amber-600">
                5. Secret Professionnel
              </h2>
              <div className="space-y-3 text-[#5d4037] leading-relaxed">
                <p>
                  Le cabinet d'avocats est soumis au secret professionnel absolu. Aucune information 
                  relative à un client ne pourra être communiquée à des tiers sans consentement explicite.
                </p>
                <p>
                  Cette obligation s'étend à tous les collaborateurs du cabinet.
                </p>
              </div>
            </motion.section>

            {/* 6. Propriété intellectuelle */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-[#3e2723] mb-4 pb-3 border-b-2 border-amber-600">
                6. Propriété Intellectuelle
              </h2>
              <div className="space-y-3 text-[#5d4037] leading-relaxed">
                <p>
                  Le site web, ses contenus, son design et ses fonctionnalités sont protégés par les droits 
                  d'auteur et les droits de propriété intellectuelle.
                </p>
                <p>
                  <strong>Droits d'auteur © 2025</strong> - Cabinet d'avocats TCHOUHO & ASSOCIÉS
                </p>
                <p>
                  Toute reproduction, modification ou distribution sans autorisation explicite est interdite 
                  et passible de sanctions légales.
                </p>
              </div>
            </motion.section>

            {/* 7. Limitation de responsabilité */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-[#3e2723] mb-4 pb-3 border-b-2 border-amber-600">
                7. Limitation de Responsabilité
              </h2>
              <div className="space-y-3 text-[#5d4037] leading-relaxed">
                <p>
                  Le cabinet n'est pas responsable des dommages ou pertes résultant de :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>L'utilisation ou l'impossibilité d'utiliser le site</li>
                  <li>Les défaillances techniques ou interruptions du service</li>
                  <li>Les informations manquantes ou inexactes</li>
                  <li>Les virus ou accès non autorisé</li>
                  <li>L'utilisation abusive ou non conforme du site</li>
                </ul>
              </div>
            </motion.section>

            {/* 8. Liens externes */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-[#3e2723] mb-4 pb-3 border-b-2 border-amber-600">
                8. Liens Externes
              </h2>
              <div className="space-y-3 text-[#5d4037] leading-relaxed">
                <p>
                  Le site peut contenir des liens vers des sites tiers. Le cabinet n'est pas responsable 
                  du contenu de ces sites externes et ne les endosse pas.
                </p>
                <p>
                  Nous vous recommandons de consulter les conditions d'utilisation et la politique de 
                  confidentialité de ces sites.
                </p>
              </div>
            </motion.section>

            {/* 9. Conformité légale */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-[#3e2723] mb-4 pb-3 border-b-2 border-amber-600">
                9. Conformité Légale
              </h2>
              <div className="space-y-3 text-[#5d4037] leading-relaxed">
                <p>
                  Ce site web respecte :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Le Règlement Général sur la Protection des Données (RGPD)</li>
                  <li>La loi camerounaise sur la protection des données personnelles</li>
                  <li>La législation camerounaise applicable aux professionnels du droit</li>
                  <li>Les normes d'accessibilité web internationales</li>
                </ul>
              </div>
            </motion.section>

            {/* 10. Contact et réclamations */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-amber-50 p-8 rounded-lg"
            >
              <h2 className="text-2xl font-bold text-[#3e2723] mb-4 pb-3 border-b-2 border-amber-600">
                10. Contact et Réclamations
              </h2>
              <div className="space-y-3 text-[#5d4037] leading-relaxed">
                <p>
                  Pour toute question, réclamation ou signalement concernant nos mentions légales :
                </p>
                <div className="bg-white p-6 rounded mt-4 space-y-3">
                  <p><strong>📧 Email :</strong> medardtcouho@yahoo.com</p>
                  <p><strong>📞 Téléphone :</strong> +237 677 42 31 69</p>
                  <p><strong>📍 Adresse :</strong> Quartier Omnisport, Rue des Généraux, Yaoundé, Cameroun</p>
                </div>
              </div>
            </motion.section>
          </div>

          {/* Note finale */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 pt-8 border-t-2 border-amber-600 text-center text-[#7d5d57] text-sm"
          >
            <p>
              Ces mentions légales sont régulièrement mises à jour. 
              <br />
              La dernière mise à jour remonte à janvier 2025.
            </p>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
