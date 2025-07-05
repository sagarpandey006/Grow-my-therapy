'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function FAQ() {
  const [openItem, setOpenItem] = useState(null)

  const faqs = [
    {
      question: "Do you accept insurance?",
      answer: "No, I don't accept insurance directly. However, I provide detailed superbills that you can submit to your insurance provider for potential reimbursement. Many clients find they can recover a significant portion of their session fees through out-of-network benefits."
    },
    {
      question: "Are online sessions available?",
      answer: "Yes, I offer virtual sessions via Zoom for clients who prefer the convenience of online therapy. Virtual sessions are available Monday, Wednesday, and Friday from 1 PM to 5 PM. All online sessions maintain the same level of confidentiality and therapeutic quality as in-person sessions."
    },
    {
      question: "What is your cancellation policy?",
      answer: "I require 24-hour notice for cancellations. This allows me to offer the time slot to other clients who may need it. Cancellations made with less than 24 hours' notice will be charged the full session fee, except in cases of emergency or illness."
    }
  ]

  const toggleItem = (index) => {
    setOpenItem(openItem === index ? null : index)
  }

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Common questions about my practice and services.
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded-lg"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0 ml-4">
                    {openItem === index ? (
                      <ChevronUp className="text-primary-600" size={20} />
                    ) : (
                      <ChevronDown className="text-primary-600" size={20} />
                    )}
                  </div>
                </div>
              </button>
              
              {openItem === index && (
                <div className="px-6 pb-4">
                  <div className="pt-2 border-t border-gray-200">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Office Hours */}
        <div className="mt-12 bg-primary-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Office Hours
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">In-Person Sessions</h4>
                <p className="text-gray-600">Tuesday & Thursday</p>
                <p className="text-gray-600">10 AM – 6 PM</p>
                <p className="text-sm text-gray-500 mt-2">1287 Maplewood Drive<br />Los Angeles, CA 90026</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Virtual Sessions</h4>
                <p className="text-gray-600">Monday, Wednesday & Friday</p>
                <p className="text-gray-600">1 PM – 5 PM</p>
                <p className="text-sm text-gray-500 mt-2">Via Zoom<br />Secure video platform</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}