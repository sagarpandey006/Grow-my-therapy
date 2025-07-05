'use client'

import { Phone, Mail, MapPin, Clock, Heart } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div className="col-span-1 lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Dr. Serena Blake, PsyD</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Licensed clinical psychologist providing evidence-based therapy for anxiety, 
              relationships, and trauma recovery. Creating safe spaces for healing and growth 
              in Los Angeles, CA.
            </p>
            <div className="flex items-center text-gray-300">
              <Heart className="mr-2 text-primary-400" size={16} />
              <span className="text-sm">Licensed Clinical Psychologist (PsyD)</span>
            </div>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Phone className="mr-3 text-primary-400" size={16} />
                <span className="text-sm">(323) 555-0192</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="mr-3 text-primary-400" size={16} />
                <span className="text-sm">serena@blakepsychology.com</span>
              </div>
              <div className="flex items-start text-gray-300">
                <MapPin className="mr-3 text-primary-400 mt-0.5" size={16} />
                <span className="text-sm">
                  1287 Maplewood Drive<br />
                  Los Angeles, CA 90026
                </span>
              </div>
            </div>
          </div>
          
          {/* Office Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Office Hours</h4>
            <div className="space-y-3">
              <div className="flex items-start text-gray-300">
                <Clock className="mr-3 text-primary-400 mt-0.5" size={16} />
                <div className="text-sm">
                  <div className="font-medium">In-Person</div>
                  <div>Tue & Thu</div>
                  <div>10 AM – 6 PM</div>
                </div>
              </div>
              <div className="flex items-start text-gray-300">
                <Clock className="mr-3 text-primary-400 mt-0.5" size={16} />
                <div className="text-sm">
                  <div className="font-medium">Virtual</div>
                  <div>Mon, Wed & Fri</div>
                  <div>1 PM – 5 PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              <p>© 2024 Dr. Serena Blake, PsyD. All rights reserved.</p>
            </div>
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <button
                onClick={scrollToTop}
                className="text-primary-400 hover:text-primary-300 text-sm transition-colors"
              >
                Back to Top
              </button>
              <div className="text-gray-400 text-xs">
                <p>Licensed in California | License #PSY12345</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Crisis Resources */}
        <div className="mt-8 bg-red-900/30 border border-red-800 rounded-lg p-4">
          <div className="text-center">
            <h4 className="font-semibold text-red-300 mb-2">Crisis Resources</h4>
            <p className="text-red-200 text-sm">
              If you're experiencing a mental health emergency, call <strong>988</strong> (Suicide & Crisis Lifeline) 
              or <strong>911</strong>, or go to your nearest emergency room.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}