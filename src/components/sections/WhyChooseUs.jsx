import React, { useEffect, useRef } from 'react'
import { Scale, Clock, Shield, Smile, BarChart, Headphones } from 'lucide-react'
import { useTranslation } from '../../hooks/useTranslation'

export function WhyChooseUs() {
  const { t } = useTranslation()
  const elementsRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    elementsRef.current.forEach((element) => {
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])
  return (
    <section className="py-16 bg-neutral-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2
            ref={(el) => (elementsRef.current[0] = el)}
            className="fade-in-up text-3xl font-bold text-text-primary"
          >
            {t('why-choose-us')}
          </h2>
        </div>

        <div className="relative h-[600px] md:h-[500px] flex items-center justify-center">
          {/* Central Character */}
          <div className="absolute z-20 w-48 h-48 md:w-64 md:h-64 rounded-full bg-white shadow-2xl flex items-center justify-center border-4 border-white overflow-hidden">
            <img
              src="https://img.freepik.com/free-vector/lawyer-concept-illustration_114360-2278.jpg?w=740&t=st=1709923456~exp=1709924056~hmac=123"
              alt="Lawyer Character"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Circular Items - Desktop: Absolute positioning, Mobile: Flex column */}
          <div className="hidden md:block absolute inset-0">
            {/* Top Left */}
            <div className="absolute top-[15%] left-[25%] flex flex-col items-end text-right w-48">
              <h3 className="font-bold text-gray-900 text-sm">{t('expertise-title')}</h3>
              <p className="text-[10px] text-gray-500">
                {t('expertise-desc')}
              </p>
            </div>
            <div className="absolute top-[25%] left-[32%] bg-[#4A5568] p-2 rounded-full text-white">
              <BarChart className="w-5 h-5" />
            </div>

            {/* Middle Left */}
            <div className="absolute top-[45%] left-[15%] flex flex-col items-end text-right w-48">
              <h3 className="font-bold text-gray-900 text-sm">{t('confidentiality-title')}</h3>
              <p className="text-[10px] text-gray-500">
                {t('confidentiality-desc')}
              </p>
            </div>
            <div className="absolute top-[45%] left-[28%] bg-[#2C5F5F] p-3 rounded-full text-white shadow-lg">
              <Scale className="w-6 h-6" />
            </div>

            {/* Bottom Left */}
            <div className="absolute bottom-[20%] left-[25%] flex flex-col items-end text-right w-48">
              <h3 className="font-bold text-gray-900 text-sm">{t('results-title')}</h3>
              <p className="text-[10px] text-gray-500">
                {t('results-desc')}
              </p>
            </div>
            <div className="absolute bottom-[28%] left-[32%] bg-[#4A5568] p-2 rounded-full text-white">
              <Shield className="w-5 h-5" />
            </div>

            {/* Top Right */}
            <div className="absolute top-[15%] right-[25%] flex flex-col items-start text-left w-48">
              <h3 className="font-bold text-gray-900 text-sm">{t('availability-title')}</h3>
              <p className="text-[10px] text-gray-500">
                {t('availability-desc')}
              </p>
            </div>
            {/* No icon for Time in design, but adding for symmetry if needed, or keeping blank as per design */}

            {/* Middle Right */}
            <div className="absolute top-[45%] right-[15%] flex flex-col items-start text-left w-48">
              <h3 className="font-bold text-gray-900 text-sm">Service client</h3>
              <p className="text-[10px] text-gray-500">
                Accompagnement personnalisé et suivi de qualité
              </p>
            </div>
            <div className="absolute top-[45%] right-[28%] bg-[#4A5568] p-2 rounded-full text-white">
              <Clock className="w-5 h-5" />
            </div>

            {/* Bottom Right */}
            <div className="absolute bottom-[20%] right-[25%] flex flex-col items-start text-left w-48">
              <h3 className="font-bold text-gray-900 text-sm">
                Localisation stratégique
              </h3>
              <p className="text-[10px] text-gray-500">
                Situé au quartier Omnisport pour votre commodité
              </p>
            </div>
            <div className="absolute bottom-[28%] right-[32%] bg-[#4A5568] p-2 rounded-full text-white">
              <Smile className="w-5 h-5" />
            </div>
          </div>

          {/* Mobile View */}
          <div className="md:hidden grid grid-cols-2 gap-4 w-full mt-32">
            <div className="flex flex-col items-center text-center">
              <div className="bg-[#4A5568] p-2 rounded-full text-white mb-2">
                <Scale className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-xs">Expertise</h3>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-[#4A5568] p-2 rounded-full text-white mb-2">
                <Clock className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-xs">Disponibilité</h3>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-[#2C5F5F] p-2 rounded-full text-white mb-2">
                <Shield className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-xs">Confidentialité</h3>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-[#4A5568] p-2 rounded-full text-white mb-2">
                <Headphones className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-xs">Support</h3>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-[#4A5568] p-2 rounded-full text-white mb-2">
                <BarChart className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-xs">Résultats</h3>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-[#4A5568] p-2 rounded-full text-white mb-2">
                <Smile className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-xs">Satisfaction</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
