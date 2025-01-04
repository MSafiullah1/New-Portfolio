'use client'

import { Mail, Phone, MapPin } from 'lucide-react'
import { useState } from 'react'
import { sendEmail } from '../actions/sendEmail'

export default function Contact() {
  const [formStatus, setFormStatus] = useState<{ success?: boolean; message?: string } | null>(null)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const result = await sendEmail(formData)
    setFormStatus(result)
  }

  return (
    <section id="contact" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center text-indigo-600 dark:text-indigo-400">Contact Me</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-indigo-600 dark:text-indigo-400">Get in Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <MapPin className="w-6 h-6 mr-4 text-indigo-600 dark:text-indigo-400" />
                <span className="text-gray-800 dark:text-gray-200">Lahore, Pakistan</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-6 h-6 mr-4 text-indigo-600 dark:text-indigo-400" />
                <a href="tel:+923099889595" className="text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">+92 3099889595</a>
              </li>
              <li className="flex items-center">
                <Mail className="w-6 h-6 mr-4 text-indigo-600 dark:text-indigo-400" />
                <a href="mailto:sarfrazsafiullah3@gmail.com" className="text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">sarfrazsafiullah3@gmail.com</a>
              </li>
            </ul>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-200">Your Name</label>
              <input type="text" id="name" name="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white" required />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-200">Your Email</label>
              <input type="email" id="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white" required />
            </div>
            <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-200">Subject</label>
              <input type="text" id="subject" name="subject" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white" required />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-200">Message</label>
              <textarea id="message" name="message" rows={4} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white" required></textarea>
            </div>
            <button type="submit" className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors dark:bg-indigo-500 dark:hover:bg-indigo-600">Send Message</button>
            {formStatus && (
              <div className={`mt-4 p-4 rounded-lg ${formStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {formStatus.message}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

