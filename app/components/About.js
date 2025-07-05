import { Award, Clock, Users, Heart } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img
                src="/images/dr-serena.webp" // Make sure this file exists in public/images/
                alt="Dr. Serena Blake - Clinical Psychologist"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              {/* Image source: https://www.freepik.com/free-photo/portrait-young-businesswoman-holding-eyeglasses-hand-against-gray-backdrop_3717378.htm */}
              <div className="absolute -bottom-6 -right-6 bg-primary-600 text-white p-4 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-sm">Sessions</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About Dr. Serena Blake
            </h2>
            <div className="text-lg text-gray-600 mb-8 leading-relaxed">
              <p className="mb-4">
                Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, 
                with eight years of experience and over 500 client sessions. She blends evidence-based 
                approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, 
                personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma.
              </p>
              <p>
                Whether you meet in her Maplewood Drive office or connect virtually via Zoom, 
                Dr. Blake is committed to creating a safe, supportive space for you to thrive.
              </p>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-primary-50 p-6 rounded-lg">
                <div className="flex items-center mb-2">
                  <Award className="text-primary-600 mr-2" size={24} />
                  <h3 className="font-semibold text-gray-900">Experience</h3>
                </div>
                <p className="text-gray-600">8 years of practice</p>
              </div>
              <div className="bg-primary-50 p-6 rounded-lg">
                <div className="flex items-center mb-2">
                  <Users className="text-primary-600 mr-2" size={24} />
                  <h3 className="font-semibold text-gray-900">Sessions</h3>
                </div>
                <p className="text-gray-600">500+ client sessions</p>
              </div>
            </div>
            
            {/* Specializations */}
            <div className="border-l-4 border-primary-600 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Specializations</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Heart className="text-primary-600 mr-2" size={16} />
                  <span className="text-gray-700">Cognitive-Behavioral Therapy</span>
                </div>
                <div className="flex items-center">
                  <Heart className="text-primary-600 mr-2" size={16} />
                  <span className="text-gray-700">Mindfulness-Based Approaches</span>
                </div>
                <div className="flex items-center">
                  <Heart className="text-primary-600 mr-2" size={16} />
                  <span className="text-gray-700">Trauma-Informed Care</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}