import { Brain, Heart, Shield, ArrowRight } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: <Brain className="text-primary-600" size={40} />,
      title: "Anxiety & Stress Management",
      description: "Learn effective coping strategies and evidence-based techniques to manage anxiety, reduce stress, and regain control of your daily life. Through cognitive-behavioral therapy and mindfulness practices, we'll work together to build your resilience and confidence.",
      image: "/api/placeholder/400/300",
      alt: "Person meditating peacefully"
    },
    {
      icon: <Heart className="text-primary-600" size={40} />,
      title: "Relationship Counseling",
      description: "Strengthen your connections with others through improved communication, conflict resolution, and emotional intimacy. Whether you're working on romantic relationships, family dynamics, or friendships, we'll explore patterns and develop healthier ways of relating.",
      image: "/api/placeholder/400/300",
      alt: "Couple having a meaningful conversation"
    },
    {
      icon: <Shield className="text-primary-600" size={40} />,
      title: "Trauma Recovery",
      description: "Heal from past experiences in a safe, supportive environment using trauma-informed approaches. We'll work at your pace to process difficult memories, reduce symptoms, and help you reclaim your sense of safety and empowerment.",
      image: "/api/placeholder/400/300",
      alt: "Person finding peace and healing"
    }
  ]

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Services I Offer
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive mental health support tailored to your unique needs and goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.alt}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Replace with actual images from freepik.com */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <button className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium group-hover:translate-x-1 transition-transform duration-200">
                  Learn More
                  <ArrowRight className="ml-1" size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Pricing Info */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Session Fees</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <div className="border-2 border-primary-200 rounded-lg p-6">
                <div className="text-primary-600 font-semibold mb-2">Individual Sessions</div>
                <div className="text-3xl font-bold text-gray-900">$200</div>
                <div className="text-gray-600 text-sm mt-2">Per 50-minute session</div>
              </div>
              <div className="border-2 border-primary-200 rounded-lg p-6">
                <div className="text-primary-600 font-semibold mb-2">Couples Sessions</div>
                <div className="text-3xl font-bold text-gray-900">$240</div>
                <div className="text-gray-600 text-sm mt-2">Per 50-minute session</div>
              </div>
            </div>
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
              While I don't accept insurance directly, I provide detailed superbills that you can submit 
              to your insurance provider for potential reimbursement.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}