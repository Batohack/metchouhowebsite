import React, { useEffect, useRef } from 'react'
import {
  FileText,
  Users,
  Heart,
  Briefcase,
  Scale,
} from 'lucide-react'
import { useTranslation } from '../../hooks/useTranslation'

export function ServiceCards() {
  const { t } = useTranslation()
  const cardsRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('revealed')
            }, index * 150) // Stagger effect
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  const services = [
    {
      title: t('immigration-title'),
      description: t('immigration-desc'),
      icon: <FileText className="w-8 h-8 text-blue-500" />,
      bg: 'bg-blue-50',
      highlight: false,
    },
    {
      title: t('property-title'),
      description: t('property-desc'),
      icon: <Briefcase className="w-8 h-8 text-[#2C5F5F]" />,
      bg: 'bg-teal-50',
      highlight: true,
    },
    {
      title: t('family-title'),
      description: t('family-desc'),
      icon: <Heart className="w-8 h-8 text-red-500" />,
      bg: 'bg-red-50',
      highlight: false,
    },
    {
      title: t('civil-title'),
      description: t('civil-desc'),
      icon: <Users className="w-8 h-8 text-purple-500" />,
      bg: 'bg-purple-50',
      highlight: false,
    },
    {
      title: t('business-title'),
      description: t('business-desc'),
      icon: <Scale className="w-8 h-8 text-[#FF0000]" />,
      bg: 'bg-red-50',
      highlight: false,
    },
    {
      title: t('succession-title'),
      description: t('succession-desc'),
      icon: <Briefcase className="w-8 h-8 text-green-500" />,
      bg: 'bg-green-50',
      highlight: false,
    },
  ]
  return (
    <section className="py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-2">
              {t('our-services')}
            </h2>
            <h2 className="text-4xl font-bold text-[#FF0000] mb-6">
              {t('services-subtitle')}
            </h2>
            <p className="text-gray-600 leading-relaxed max-w-md">
              Notre cabinet d'avocats vous offre une expertise complète en droit des affaires.
              De la création d'entreprise aux contentieux complexes, nous vous accompagnons
              avec professionnalisme et détermination pour défendre vos intérêts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {services.map((service, index) => (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                className={`stagger-animation ${service.bg} p-6 rounded-lg hover:shadow-md cursor-pointer hover-lift ${service.highlight ? 'ring-2 ring-amber-200' : ''}`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="bg-white p-3 rounded-full shadow-sm mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs text-gray-500">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
