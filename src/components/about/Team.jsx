import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from '../../hooks/useTranslation'
import { Mail, Phone, MapPin, Award, Briefcase, Heart, Scale, X } from 'lucide-react'
import metchouhoImage from '../../assets/Metchouho.jpg'

export function Team() {
  const { t } = useTranslation()
  const [selectedImage, setSelectedImage] = useState(null)

  const teamMembers = [
    {
      name: 'Maître TCHOUHO MEDARD',
      role: t('founder-title'),
      specialty: t('business-law-specialty'),
      experience: '2 ans',
      image: metchouhoImage,
      description: t('founder-description'),
      credentials: ['Barreau  Du Cameroun', 'Barreau Du Rwanda', 'Droit Des Affaires'],
      contact: {
        email: 'medardtcouho@yahoo.fr',
        phone: '+237 677423169'
      }
    },
    {
      name: 'Me Marie-Christine KOFFI',
      role: t('associate-lawyer'),
      specialty: t('family-law-specialty'),
      experience: '5 ans',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
      description: t('associate-description'),
      credentials: ['Droit de la Famille', 'Droit Civil', 'Procédures judiciaires'],
      contact: {
        email: 'm.koffi@tchouho-avocats.com',
        phone: '+225 XX XX XX XX XX'
      }
    },
    {
      name: 'Me Patrice KOUAKOU',
      role: t('junior-lawyer'),
      specialty: t('property-law-specialty'),
      experience: '3 ans',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
      description: t('junior-description'),
      credentials: ['Droit Immobilier', 'Urbanisme', 'Baux commerciaux'],
      contact: {
        email: 'p.kouakou@tchouho-avocats.com',
        phone: '+225 XX XX XX XX XX'
      }
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  return (
    <section id="team-section" className="py-24 bg-neutral-white relative overflow-hidden">
      {/* Background pattern subtil */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-sm font-medium mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Award className="w-4 h-4 mr-2" />
            Équipe d'experts
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-bold text-text-primary mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Notre équipe
          </motion.h2>

          <motion.p
            className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Découvrez notre équipe d'experts juridiques, chacun spécialisé dans son domaine pour vous offrir les meilleurs conseils.
          </motion.p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} member={member} index={index} />
          ))}
        </motion.div>

        {/* Localisation Section */}
        <motion.div
          className="bg-bg-card rounded-2xl shadow-medium p-8 md:p-12 border border-border-light"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                className="flex items-center mb-6"
                whileHover={{ scale: 1.02 }}
              >
                <div className="p-3 bg-secondary-brown/20 rounded-xl mr-4">
                  <MapPin className="w-8 h-8 text-secondary-brown" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-text-primary">Notre cabinet</h3>
                  <p className="text-text-secondary">Quartier Omnisport, Rue des Généraux, Yaoundé, Cameroun</p>
                </div>
              </motion.div>

              <div className="space-y-4">
                <div className="flex items-center text-text-secondary">
                  <Phone className="w-5 h-5 mr-3 text-secondary-brown" />
                  <span>+225 XX XX XX XX XX</span>
                </div>
                <div className="flex items-center text-text-secondary">
                  <Mail className="w-5 h-5 mr-3 text-secondary-brown" />
                  <span>medardtcouho@ya</span>
                </div>
                <div className="flex items-center text-text-secondary">
                  <MapPin className="w-5 h-5 mr-3 text-secondary-brown" />
                  <span>Yaoundé, Cameroun</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-video rounded-xl overflow-hidden shadow-lg border border-slate-200">
                <img
                  src="https://maps.googleapis.com/maps/api/staticmap?center=Abidjan,Cote+d'Ivoire&zoom=12&size=600x300&maptype=roadmap&markers=color:red%7Clabel:C%7C5.359952,+-4.008256&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dOJQ3M3HqhzK8g"
                  alt="Carte Google Maps - Cabinet TCHOUHO, Abidjan"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-semibold drop-shadow-lg">Cabinet TCHOUHO</p>
                  <p className="text-xs drop-shadow-md">Quartier Omnisport, Abidjan</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-4xl max-h-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Photo agrandie"
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-2xl"
              />
              <button
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white rounded-full p-2 hover:bg-white/30 transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-6 h-6" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

function TeamMemberCard({ member, index }) {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: index * 0.1,
        ease: "easeOut"
      }
    }
  }

  return (
    <motion.div
      className="card-luxury group"
      variants={cardVariants}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      {/* Image */}
      <div className="relative h-80 overflow-hidden rounded-t-xl cursor-pointer" onClick={() => setSelectedImage(member.image)}>
        <motion.img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />

        {/* Overlay de clic */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/20 backdrop-blur-sm rounded-full p-3">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
            </svg>
          </div>
        </div>

        {/* Overlay avec informations */}
        <div className="absolute bottom-6 left-6 right-6 text-white drop-shadow-lg">
          <motion.h3
            className="text-2xl font-bold mb-2 text-text-primary"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            {member.name}
          </motion.h3>

          <motion.p
            className="text-secondary-brown font-medium mb-3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            {member.role}
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {member.credentials.slice(0, 2).map((credential, idx) => (
              <span
                key={idx}
                className="text-xs bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full border border-white/30"
              >
                {credential}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-semibold text-text-primary bg-secondary-brown/10 px-4 py-2 rounded-full border border-secondary-brown">
            {member.specialty}
          </span>
          <span className="text-sm font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-lg">
            {member.experience}
          </span>
        </div>

        <p className="text-slate-600 text-base leading-relaxed mb-6">
          {member.description}
        </p>

        {/* Credentials */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-slate-900 mb-3">Domaines d'expertise</h4>
          <div className="flex flex-wrap gap-2">
            {member.credentials.map((credential, idx) => (
              <span
                key={idx}
                className="text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded-full"
              >
                {credential}
              </span>
            ))}
          </div>
        </div>

        {/* Contact Button */}
        <motion.button
          className="w-full bg-accent-red hover:bg-hover-accent text-text-light py-4 px-6 rounded-xl font-semibold text-sm transition-all duration-300 shadow-medium hover:shadow-strong"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Prendre rendez-vous
        </motion.button>
      </div>
    </motion.div>
  )
}
