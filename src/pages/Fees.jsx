import { motion } from 'framer-motion'
import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'
import { Clock, FileText, TrendingUp, Shield } from 'lucide-react'

export function Fees() {
  const handleOpenModal = () => {
    // Stub - Header requires this prop
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <div className="min-h-screen bg-white">
      <Header onOpenModal={handleOpenModal} />
      
      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Titre principal */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold text-[#3e2723] mb-12"
          >
            NOS HONORAIRES
          </motion.h1>

          {/* Section principale avec image et contenu */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Image à gauche */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-6"
            >
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Honoraires et tarification"
                className="rounded-lg shadow-xl w-full h-80 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Cabinet professionnel"
                className="rounded-lg shadow-xl w-full h-80 object-cover"
              />
            </motion.div>

            {/* Contenu à droite */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              {/* Mode de détermination */}
              <section>
                <h2 className="text-3xl font-bold text-blue-600 mb-6">
                  Mode de détermination des honoraires
                </h2>
                
                <div className="space-y-4 text-[#5d4037] leading-relaxed">
                  <p>
                    Nos honoraires sont fixés en toute transparence avec le client, dès la prise en charge 
                    de son dossier.
                  </p>

                  <p>
                    Le montant des honoraires est fixé conformément aux règles déontologiques de la profession 
                    d'avocat en fonction des usages, de la difficulté de l'affaire, du temps passé, des frais 
                    exposés par l'avocat et du résultat obtenu.
                  </p>

                  <p className="font-semibold">
                    Le cabinet facture sur la base d'un taux horaire ou forfaitaire en fonction de l'accord 
                    avec chaque client :
                  </p>

                  {/* Sous-sections */}
                  <div className="space-y-6 mt-6">
                    {/* Au temps passé */}
                    <div>
                      <h3 className="flex items-center text-lg font-bold text-[#3e2723] mb-3">
                        <Clock className="w-5 h-5 mr-3 text-amber-600" />
                        Au temps passé :
                      </h3>
                      <p className="ml-8 text-[#5d4037]">
                        Pour les dossiers courants, notamment en contentieux, le taux horaire varie entre 
                        <strong> 150 000 et 250 000 FCFA/h</strong> pour les associés seniors et entre 
                        <strong> 100 000 et 150 000 FCFA/h</strong> pour les collaborateurs juniors.
                      </p>
                    </div>

                    {/* Au forfait */}
                    <div>
                      <h3 className="flex items-center text-lg font-bold text-[#3e2723] mb-3">
                        <FileText className="w-5 h-5 mr-3 text-amber-600" />
                        Au forfait :
                      </h3>
                      <p className="ml-8 text-[#5d4037]">
                        Le plus souvent, les honoraires seront fixés selon un forfait convenu avec le client 
                        pour couvrir les diligences prévisibles.
                      </p>
                    </div>

                    {/* Honoraire supplémentaire */}
                    <div>
                      <h3 className="flex items-center text-lg font-bold text-[#3e2723] mb-3">
                        <TrendingUp className="w-5 h-5 mr-3 text-amber-600" />
                        Un honoraire supplémentaire de résultat :
                      </h3>
                      <p className="ml-8 text-[#5d4037]">
                        Peut être convenu avec accord du client pour les dossiers spécifiques.
                      </p>
                    </div>
                  </div>

                  <p className="text-sm italic text-[#7d5d57] mt-6">
                    Les honoraires sont facturés après acceptation du devis proposé au client.
                  </p>
                </div>
              </section>

              {/* Convention d'honoraires */}
              <section className="border-t border-amber-200 pt-8">
                <h2 className="text-3xl font-bold text-blue-600 mb-6">
                  Convention d'honoraires
                </h2>
                
                <p className="text-[#5d4037] leading-relaxed">
                  Le cabinet conclut par écrit avec le client une convention d'honoraires qui précisera 
                  le montant et le mode de détermination des honoraires couvrant les diligences prévisibles, 
                  ainsi que les frais, débours et émoluments.
                </p>
              </section>

              {/* Contestations d'honoraires */}
              <section className="border-t border-amber-200 pt-8">
                <h2 className="text-3xl font-bold text-blue-600 mb-6">
                  Contestations d'honoraires
                </h2>
                
                <p className="text-[#5d4037] leading-relaxed">
                  En cas de contestation éventuelle sur les honoraires du cabinet, le client peut saisir 
                  le Barreau et aussi recourir à un médiateur de la consommation.
                </p>
              </section>
            </motion.div>
          </div>

          {/* Section CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-8 sm:p-12 text-center border border-amber-200"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-[#3e2723] mb-4">
              Demander un devis personnalisé
            </h2>
            <p className="text-[#5d4037] mb-8 max-w-2xl mx-auto">
              Contactez-nous pour obtenir une estimation précise de nos honoraires adaptés à votre situation 
              et vos besoins spécifiques.
            </p>
            <button className="bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Nous Contacter
            </button>
          </motion.div>

          {/* Infos de confiance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-16"
          >
            <div className="bg-white border-l-4 border-amber-600 p-6 rounded shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-lg font-bold text-[#3e2723] mb-3 flex items-center">
                <Shield className="w-5 h-5 mr-3 text-amber-600" />
                Transparence
              </h3>
              <p className="text-[#5d4037] text-sm">
                Tous nos honoraires sont communiqués avant le début des diligences, sans surprise.
              </p>
            </div>

            <div className="bg-white border-l-4 border-amber-600 p-6 rounded shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-lg font-bold text-[#3e2723] mb-3 flex items-center">
                <FileText className="w-5 h-5 mr-3 text-amber-600" />
                Convention écrite
              </h3>
              <p className="text-[#5d4037] text-sm">
                Une convention d'honoraires formelle est signée avec chaque client pour clarifier les engagements.
              </p>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
