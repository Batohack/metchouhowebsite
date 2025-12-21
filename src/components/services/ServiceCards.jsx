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
      icon: <FileText className="w-8 h-8 text-secondary-brown" />,
      bg: 'bg-blue-50',
      highlight: false,
    },
    {
      title: t('property-title'),
      description: t('property-desc'),
      icon: <Briefcase className="w-8 h-8 text-secondary-brown" />,
      bg: 'bg-teal-50',
      highlight: true,
    },
    {
      title: t('family-title'),
      description: t('family-desc'),
      icon: <Heart className="w-8 h-8 text-secondary-brown" />,
      bg: 'bg-red-50',
      highlight: false,
    },
    {
      title: t('civil-title'),
      description: t('civil-desc'),
      icon: <Users className="w-8 h-8 text-secondary-brown" />,
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
      icon: <Briefcase className="w-8 h-8 text-secondary-brown" />,
      bg: 'bg-green-50',
      highlight: false,
    },
  ]
  return (
    <section className="py-16 bg-neutral-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-4xl font-bold text-text-primary mb-2">
              Nos services
            </h2>
            <h2 className="text-4xl font-bold text-secondary-brown mb-6">
              juridiques
            </h2>
            <p className="text-text-secondary leading-relaxed max-w-md">
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
                className={`stagger-animation bg-bg-card p-6 rounded-lg hover:shadow-medium cursor-pointer hover-lift border border-border-light ${service.highlight ? 'ring-2 ring-accent-red' : ''}`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="bg-secondary-brown/10 p-3 rounded-full mb-4 border border-secondary-brown/20">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-bold text-text-primary mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs text-text-secondary">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
