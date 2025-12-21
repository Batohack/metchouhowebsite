import {
  Clock,
  ThumbsUp,
  Shield,
  MessageCircle,
  Video,
  Phone,
  FileText,
} from 'lucide-react'
import { useTranslation } from '../../hooks/useTranslation'

export function ConsultationFlow() {
  const { t } = useTranslation()
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Flow Diagram */}
          <div className="relative">
            {/* Connecting Lines (Dotted) */}
            <div className="absolute inset-0 pointer-events-none hidden md:block">
              <svg
                className="w-full h-full"
                viewBox="0 0 600 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M250 100 L350 100 L350 200 L250 200"
                  stroke="#3B82F6"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />
                <path
                  d="M250 200 L150 200 L150 300"
                  stroke="#3B82F6"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />
                <path
                  d="M250 200 L350 200 L400 200"
                  stroke="#3B82F6"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />
              </svg>
            </div>

            <div className="space-y-6 relative z-10">
              <div className="flex items-center gap-4 bg-white p-3 rounded-lg shadow-sm max-w-xs">
                <div className="bg-purple-100 p-2 rounded-full text-purple-600">
                  <Clock className="w-5 h-5" />
                </div>
                <span className="text-sm font-semibold text-gray-700">
                  Save Time and Money
                </span>
              </div>

              <div className="flex items-center gap-4 bg-white p-3 rounded-lg shadow-sm max-w-xs">
                <div className="bg-orange-100 p-2 rounded-full text-orange-600">
                  <ThumbsUp className="w-5 h-5" />
                </div>
                <span className="text-sm font-semibold text-gray-700">
                  Best Advise that Matters
                </span>
              </div>

              <div className="flex items-center gap-4 bg-white p-3 rounded-lg shadow-sm max-w-xs">
                <div className="bg-teal-100 p-2 rounded-full text-teal-600">
                  <Shield className="w-5 h-5" />
                </div>
                <span className="text-sm font-semibold text-gray-700">
                  Privat and Confidential Calls
                </span>
              </div>

              <div className="flex items-center gap-4 bg-white p-3 rounded-lg shadow-sm max-w-xs">
                <div className="bg-purple-100 p-2 rounded-full text-purple-600">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <span className="text-sm font-semibold text-gray-700">
                  {t('step-1-title')}
                </span>
              </div>
            </div>

            {/* Central Lawyer Image */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:block">
              <div className="w-24 h-24 rounded-lg overflow-hidden border-4 border-white shadow-lg">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="Lawyer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Action Buttons Floating */}
            <div className="absolute top-0 right-0 hidden md:flex items-center gap-2 bg-white p-2 rounded-lg shadow-md border border-orange-100">
              <div className="bg-orange-500 p-1 rounded text-white">
                <Phone className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold text-orange-500">Appeler</span>
            </div>

            <div className="absolute bottom-0 left-0 hidden md:flex items-center gap-2 bg-white p-2 rounded-lg shadow-md border border-green-100">
              <div className="bg-green-500 p-1 rounded text-white">
                <Video className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold text-green-500">
                Visio
              </span>
            </div>

            <div className="absolute bottom-1/3 -right-8 hidden md:flex items-center gap-2 bg-white p-2 rounded-lg shadow-md border border-red-100">
              <div className="bg-red-500 p-1 rounded text-white">
                <FileText className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold text-red-500">
                Documents
              </span>
            </div>
          </div>

          {/* Right Side: Text Content */}
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              {t('consultation-title')}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Notre processus de consultation est simple et efficace. De la prise de contact initiale
              à l'accompagnement complet, nous vous guidons à chaque étape avec transparence et professionnalisme.
            </p>
            <button className="bg-[#FF0000] hover:bg-red-700 text-white px-8 py-3 rounded-md font-bold shadow-lg">
              {t('talk-to-lawyer')}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
