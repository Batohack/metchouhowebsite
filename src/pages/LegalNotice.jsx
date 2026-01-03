import { motion } from 'framer-motion'
import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'

export function LegalNotice() {
  const handleOpenModal = () => {
    // Stub - Header requires this prop
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
          <div className="space-y-8 text-[#5d4037] leading-relaxed">
            
            {/* Introduction */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-justify">
                Les présentes mentions légales ont pour objet de définir les modalités d'accès et d'utilisation 
                du site accessible à partir de l'adresse <strong>www.tcouhoavocats-cameroun.com</strong>, proposé 
                aux internautes par le Cabinet TCHOUHO & ASSOCIÉS.
              </p>
            </motion.section>

            {/* 1. ÉDITION */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border-t-2 border-amber-600 pt-8"
            >
              <h2 className="text-2xl font-bold text-[#3e2723] mb-6">1. ÉDITION</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-[#3e2723] mb-2">Cabinet TCHOUHO & ASSOCIÉS :</h3>
                  <p className="ml-4">
                    Quartier Omnisport, Rue des Généraux<br />
                    Yaoundé, Cameroun<br />
                    Téléphone : +237 677 42 31 69<br />
                    Email : medardtcouho@yahoo.com
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-[#3e2723] mb-2">Éditeur du site :</h3>
                  <p className="ml-4">
                    <strong>Me Médard TCHOUHO</strong><br />
                    Avocat inscrit au Barreau du Cameroun<br />
                    Managing Partner du Cabinet TCHOUHO & ASSOCIÉS<br />
                    Adresse : Quartier Omnisport, Rue des Généraux, Yaoundé, Cameroun<br />
                    Téléphone : +237 677 42 31 69<br />
                    Email : medardtcouho@yahoo.com
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-[#3e2723] mb-2">Directeur de la publication du site :</h3>
                  <p className="ml-4">
                    <strong>Me Médard TCHOUHO</strong><br />
                    Avocat inscrit au Barreau du Cameroun<br />
                    Managing Partner du Cabinet TCHOUHO & ASSOCIÉS<br />
                    Adresse : Quartier Omnisport, Rue des Généraux, Yaoundé, Cameroun<br />
                    Téléphone : +237 677 42 31 69<br />
                    Email : medardtcouho@yahoo.com
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-[#3e2723] mb-2">Hébergeur du site :</h3>
                  <p className="ml-4">
                    Vercel Inc.<br />
                    440 N Barranca Ave<br />
                    Covina, CA 91723<br />
                    États-Unis
                  </p>
                </div>
              </div>
            </motion.section>

            {/* 2. CONCEPTION ET DÉVELOPPEMENT */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border-t-2 border-amber-600 pt-8"
            >
              <h2 className="text-2xl font-bold text-[#3e2723] mb-6">2. CONCEPTION ET DÉVELOPPEMENT</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-[#3e2723] mb-2">Développement du site :</h3>
                  <p className="ml-4">
                    <strong>BATOSINE DORIAN</strong><br />
                    Développeur Web Full-Stack<br />
                    Email : dorianbat8@gmail.com
                  </p>
                </div>
              </div>
            </motion.section>

            {/* 3. CONDITIONS D'UTILISATION DU SITE */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border-t-2 border-amber-600 pt-8"
            >
              <h2 className="text-2xl font-bold text-[#3e2723] mb-6">3. CONDITIONS D'UTILISATION DU SITE</h2>
              
              <h3 className="font-bold text-[#3e2723] mb-4">Protection des données personnelles</h3>
              <p className="mb-4">
                Le traitement des données à caractère personnel mis en œuvre par le site a pour finalité la gestion 
                de vos messages adressés au cabinet par le biais du formulaire de contact sur le site. Les destinataires 
                de vos données sont les services concernés du cabinet. Les messages et les données qu'ils contiennent ne 
                sont conservés que pendant la durée de leur traitement.
              </p>
              <p className="mb-4">
                Conformément à la loi camerounaise sur la protection des données et au Règlement Général sur la Protection 
                des Données (RGPD), vous disposez d'un droit d'accès, d'interrogation, de limitation, de modification et de 
                rectification des informations vous concernant. Vous disposez également d'un droit d'opposition au traitement 
                de vos données à caractère personnel, ainsi que d'un droit d'opposition à ce que ces données soient utilisées 
                à des fins de prospection commerciale. Ces droits s'exercent auprès du cabinet à l'adresse 
                <strong> medardtcouho@yahoo.com</strong>.
              </p>

              <h3 className="font-bold text-[#3e2723] mb-4 mt-6">Conservation des données</h3>
              <p className="mb-4">
                Les données collectées ne sont conservées que dans la stricte mesure des besoins des opérations de collecte 
                et dans le respect des règles en vigueur. Les données de contact sont conservées jusqu'à révocation du consentement.
              </p>

              <h3 className="font-bold text-[#3e2723] mb-4 mt-6">Responsable du traitement des données :</h3>
              <p className="ml-4 mb-4">
                <strong>Me Médard TCHOUHO</strong><br />
                Quartier Omnisport, Rue des Généraux, Yaoundé, Cameroun<br />
                Téléphone : +237 677 42 31 69<br />
                Email : medardtcouho@yahoo.com
              </p>

              <h3 className="font-bold text-[#3e2723] mb-4 mt-6">Cookies</h3>
              <p className="mb-4">
                Les cookies sont des traceurs déposés dans l'équipement terminal d'un utilisateur lors de la consultation 
                du site. Les cookies utilisés sur le site sont les cookies tiers destinés à établir des statistiques de 
                fréquentation et à mémoriser des informations relatives à un formulaire que vous avez rempli sur le site.
              </p>
              <p className="mb-4">
                Vous avez la possibilité de gérer les cookies en paramétrant votre navigateur pour les accepter ou les 
                refuser. Vous pouvez également les supprimer. Toutefois, si vous refusez les cookies, le Cabinet TCHOUHO & 
                ASSOCIÉS ne saurait être tenu responsable d'une absence d'accessibilité à certaines fonctionnalités du site.
              </p>
            </motion.section>

            {/* 4. TITULARITÉ DES DROITS */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border-t-2 border-amber-600 pt-8"
            >
              <h2 className="text-2xl font-bold text-[#3e2723] mb-6">4. TITULARITÉ DES DROITS</h2>
              
              <p className="mb-4">
                Tous les éléments (textes, logos, images, éléments sonores, vidéos, etc.) contenus dans le site sont 
                protégés par le droit national et international de la propriété intellectuelle. Ces éléments restent la 
                propriété exclusive du Cabinet TCHOUHO & ASSOCIÉS.
              </p>
              <p className="mb-4">
                À ce titre, sauf autorisation préalable et écrite, vous ne pouvez procéder à une quelconque reproduction, 
                représentation, adaptation, traduction et/ou transformation partielle ou intégrale, ou un transfert sur un 
                autre site web de tout élément composant le site.
              </p>
              <p className="mb-4">
                Le non-respect de cette interdiction peut constituer un acte de contrefaçon engageant vos responsabilités 
                civile et pénale. Conformément aux dispositions du Code de la propriété Intellectuelle camerounais, seule 
                est autorisée l'utilisation des éléments composant le site à des fins strictement personnelles.
              </p>
            </motion.section>

            {/* 5. LOI APPLICABLE – JURIDICTION */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border-t-2 border-amber-600 pt-8"
            >
              <h2 className="text-2xl font-bold text-[#3e2723] mb-6">5. LOI APPLICABLE – JURIDICTION</h2>
              
              <p className="mb-4">
                L'ensemble de ce site relève des législations camerounaise, française et internationale sur le droit 
                d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour 
                les documents iconographiques et photographiques.
              </p>
              <p className="mb-4">
                Conformément aux dispositions des articles L.612-1 du Code de la consommation français, vous avez la 
                possibilité, en cas de litige avec un avocat, de recourir à la médiation de la consommation auprès du 
                Médiateur national près du Conseil National des barreaux (CNB), dont les coordonnées sont les suivantes :
              </p>
              <p className="ml-4 mb-4">
                <strong>CNB - Médiateur à la consommation</strong><br />
                180 boulevard Haussmann<br />
                75008 Paris<br />
                France
              </p>
            </motion.section>

            {/* 6. RESPONSABILITÉ */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border-t-2 border-amber-600 pt-8"
            >
              <h2 className="text-2xl font-bold text-[#3e2723] mb-6">6. LIMITATION DE RESPONSABILITÉ</h2>
              
              <p className="mb-4">
                Les informations fournies sur ce site web sont de nature générale et à titre informatif. Elles ne 
                constituent pas un conseil juridique personnalisé ou professionnel.
              </p>
              <p className="mb-4">
                Le Cabinet TCHOUHO & ASSOCIÉS n'est pas responsable des dommages ou pertes résultant de :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li>L'utilisation ou l'impossibilité d'utiliser le site</li>
                <li>Les défaillances techniques ou interruptions du service</li>
                <li>Les informations manquantes ou inexactes</li>
                <li>Les virus ou accès non autorisé</li>
                <li>L'utilisation abusive ou non conforme du site</li>
                <li>Toute action entreprise sur la base des contenus du site</li>
              </ul>
              <p>
                L'accès au site implique l'acceptation pleine et entière de ces conditions d'utilisation.
              </p>
            </motion.section>

            {/* 7. LIENS EXTERNES */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border-t-2 border-amber-600 pt-8"
            >
              <h2 className="text-2xl font-bold text-[#3e2723] mb-6">7. LIENS EXTERNES</h2>
              
              <p>
                Le site peut contenir des liens vers des sites tiers. Le Cabinet TCHOUHO & ASSOCIÉS n'est pas responsable 
                du contenu de ces sites externes et ne les endosse pas. Nous vous recommandons de consulter les conditions 
                d'utilisation et la politique de confidentialité de ces sites.
              </p>
            </motion.section>

            {/* 8. SECRET PROFESSIONNEL */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border-t-2 border-amber-600 pt-8"
            >
              <h2 className="text-2xl font-bold text-[#3e2723] mb-6">8. SECRET PROFESSIONNEL</h2>
              
              <p className="mb-4">
                Le Cabinet TCHOUHO & ASSOCIÉS est soumis au secret professionnel absolu. Aucune information relative 
                à un client ne pourra être communiquée à des tiers sans consentement explicite. Cette obligation s'étend 
                à tous les collaborateurs du cabinet.
              </p>
            </motion.section>

            {/* Pied de page légal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border-t-2 border-amber-600 pt-8 mt-12 text-center"
            >
              <p className="font-semibold text-[#3e2723] mb-2">
                © 2025 Cabinet TCHOUHO & ASSOCIÉS. Tous droits réservés.
              </p>
              <p className="text-sm text-[#7d5d57]">
                Toutes les pages du site Cabinet TCHOUHO & ASSOCIÉS sont protégées par ce présent Copyright. 
                Tous droits de reproduction et de diffusion réservés.
              </p>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
