import { Quote, Star } from 'lucide-react'
import { useTranslation } from '../../hooks/useTranslation'

export function Testimonials() {
  const { t } = useTranslation()

  const testimonials = [
    {
      name: 'Marie-Laure KONE',
      role: 'Entrepreneure - Création SARL',
      content: t('testimonial-1'),
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
      rating: 5,
    },
    {
      name: 'Jean-Pierre DIABATE',
      role: 'Propriétaire - Vente appartement',
      content: t('testimonial-2'),
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
      rating: 5,
    },
    {
      name: 'Sophie TRAORE',
      role: 'Chef d\'entreprise - Contentieux commercial',
      content: t('testimonial-3'),
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
      rating: 5,
    },
  ]
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl text-gray-500 mb-2">{t('testimonials-subtitle')}</h2>
          <h2 className="text-3xl font-bold text-[#FF0000]">
            {t('testimonials-title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md"
            >
              <div className="flex flex-col items-center text-center mb-6">
                <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-gray-100">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900">{item.name}</h3>
                <p className="text-xs text-gray-500 mb-2">{item.role}</p>
                <div className="flex gap-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3 h-3 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
              </div>

              <div className="relative">
                <Quote className="w-8 h-8 text-gray-200 absolute -top-4 -left-2 transform -scale-x-100" />
                <p className="text-sm text-gray-600 leading-relaxed pt-4 text-center">
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
