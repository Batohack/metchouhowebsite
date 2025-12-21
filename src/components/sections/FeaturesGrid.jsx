import {
  FileText,
  Building,
  Gavel,
  FileCheck,
  Landmark,
  Scale,
} from 'lucide-react'
export function FeaturesGrid() {
  const features = [
    {
      title: 'Immigration assistance',
      icon: <FileText className="w-6 h-6 text-orange-500" />,
      bg: 'bg-orange-50',
    },
    {
      title: 'Intellectual property',
      icon: <Building className="w-6 h-6 text-teal-500" />,
      bg: 'bg-teal-50',
    },
    {
      title: 'Complaince lawyer',
      icon: <Gavel className="w-6 h-6 text-pink-500" />,
      bg: 'bg-pink-50',
    },
    {
      title: 'Making a will',
      icon: <FileCheck className="w-6 h-6 text-purple-500" />,
      bg: 'bg-purple-50',
    },
    {
      title: 'Legal documentation',
      icon: <Scale className="w-6 h-6 text-purple-400" />,
      bg: 'bg-purple-50',
    },
    {
      title: 'Estate planning',
      icon: <Landmark className="w-6 h-6 text-blue-500" />,
      bg: 'bg-blue-50',
    },
  ]
  return (
    <section className="py-16 bg-neutral-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl text-gray-500 mb-2">Experience a smarter</h2>
          <h2 className="text-3xl font-bold text-[#FF0000]">
            legal solution platform in your hand
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 border-b border-gray-100 hover:bg-gray-50 rounded-lg"
            >
              <div
                className={`w-12 h-12 ${feature.bg} rounded-lg flex items-center justify-center mb-4`}
              >
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur. Vel mattis vel quam at.
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-[#FF0000] hover:bg-red-700 text-white px-8 py-3 rounded-md font-bold shadow-lg">
            Talk to lawyer
          </button>
        </div>
      </div>
    </section>
  )
}
