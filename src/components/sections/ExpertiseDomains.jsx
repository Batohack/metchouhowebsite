import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Scale, Briefcase, Shield, DollarSign, Users, Gavel, Zap } from 'lucide-react'

export function ExpertiseDomains() {
  const [selectedDomain, setSelectedDomain] = useState(null)

  const domains = [
    { 
      name: 'Droit Administratif',
      description: 'Représentation devant les administrations et contentieux administratif',
      icon: <Gavel />
    },
    { 
      name: 'Modes Alternatifs de Règlement des Différends',
      description: 'Médiation, arbitrage et conciliation',
      icon: <Users />
    },
    { 
      name: 'Droit de la Concurrence',
      description: 'Conformité concurrentielle et litiges',
      icon: <Zap />
    },
    { 
      name: 'Droit Bancaire',
      description: 'Financement, crédit et opérations bancaires',
      icon: <DollarSign />
    },
    { 
      name: 'Droit Commercial',
      description: 'Droit et réglementation des affaires commerciales',
      icon: <Briefcase />
    },
    { 
      name: 'Droit des Sociétés',
      description: 'Création d\'entreprise, organisation commerciale et gouvernance',
      icon: <Users />
    },
    { 
      name: 'Droit Civil',
      description: 'Droit civil et common law',
      icon: <Scale />
    },
    { 
      name: 'Actions Collectives',
      description: 'Litiges de masse et actions collectives',
      icon: <Users />
    },
    { 
      name: 'Droit Constitutionnel',
      description: 'Questions constitutionnelles et droits fondamentaux',
      icon: <Shield />
    },
    { 
      name: 'Droit de la Consommation',
      description: 'Protection des consommateurs et conformité',
      icon: <Shield />
    },
    { 
      name: 'Droit des Contrats',
      description: 'Rédaction, négociation et contentieux contractuel',
      icon: <Briefcase />
    },
    { 
      name: 'Droit Fiscal et Douanier',
      description: 'Fiscalité d\'entreprise, contentieux fiscal et douanier',
      icon: <DollarSign />
    },
    { 
      name: 'Droit d\'Assurance',
      description: 'Contentieux d\'assurance et régulation assurantielle',
      icon: <Shield />
    },
    { 
      name: 'Droit du Travail',
      description: 'Droit du travail, contrats de travail et litiges sociaux',
      icon: <Users />
    },
    { 
      name: 'Propriété Intellectuelle',
      description: 'Brevets, marques, droits d\'auteur et PI',
      icon: <Briefcase />
    },
    { 
      name: 'Droit Foncier et Domanial',
      description: 'Immobilier, droit foncier et régulation foncière',
      icon: <Shield />
    },
    { 
      name: 'Droit de l\'Immigration',
      description: 'Visa, permis de travail et immigration',
      icon: <Users />
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
      {/* Décoration de fond */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-amber-100/10 rounded-full blur-3xl -ml-48 -mt-48 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-100/10 rounded-full blur-3xl -mr-48 -mb-48 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#3e2723] mb-4">
            Domaines d'Expertise
          </h2>
          <p className="text-[#5d4037] text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Une maîtrise complète de multiples domaines juridiques pour vous offrir 
            un accompagnement global et efficace
          </p>
          <div className="w-24 h-1.5 bg-gradient-to-r from-amber-600 to-amber-400 mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Grille des domaines */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {domains.map((domain, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              onMouseEnter={() => setSelectedDomain(idx)}
              onMouseLeave={() => setSelectedDomain(null)}
              className="group"
            >
              <motion.div
                className="relative h-full bg-gradient-to-br from-[#f5f1ed] to-white rounded-xl p-5 sm:p-6 shadow-lg border border-amber-100/30 cursor-pointer transition-all duration-300 hover:shadow-xl hover:border-amber-400/50"
                whileHover={{ y: -4 }}
              >
                {/* Icon */}
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform duration-300">
                  {React.cloneElement(domain.icon, { className: 'w-6 h-6' })}
                </div>

                {/* Titre */}
                <h3 className="text-base sm:text-lg font-bold text-[#3e2723] mb-2 leading-snug group-hover:text-amber-700 transition-colors">
                  {domain.name}
                </h3>

                {/* Description - visible au hover ou sur mobile */}
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: selectedDomain === idx ? 1 : 0,
                    height: selectedDomain === idx ? 'auto' : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="text-sm text-[#5d4037] hidden sm:block overflow-hidden"
                >
                  {domain.description}
                </motion.p>

                {/* Afficher la description sur mobile */}
                <p className="text-xs text-[#5d4037] sm:hidden mt-2">
                  {domain.description}
                </p>

                {/* Accent line */}
                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-amber-600 to-amber-400 w-0 group-hover:w-full transition-all duration-500 rounded-b-xl" />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12 sm:mt-16"
        >
          <p className="text-[#5d4037] mb-6 text-base sm:text-lg">
            Un domaine n'est pas listé ? Contactez-nous pour explorer d'autres possibilités.
          </p>
          <button className="bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Nous Contacter
          </button>
        </motion.div>
      </div>
    </section>
  )
}
