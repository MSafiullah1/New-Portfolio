import Image from 'next/image'
import imgSrc from '../assets/IMG_0970.jpeg'
import { Github, Linkedin, Mail, Phone } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="py-20 bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-800 dark:to-purple-900 text-white">
      <div className="container mx-auto px-6 text-center">
        <Image
          src={imgSrc}
          alt="Muhammad Safiullah"
          width={200}
          height={200}
          className="rounded-full border-4 border-white shadow-lg mx-auto mb-8"
        />
        <h1 className="text-5xl font-bold mb-4">Muhammad Safiullah</h1>
        <p className="text-xl mb-8">Computer Science Student | AI Enthusiast | Researcher</p>
        <div className="flex justify-center space-x-6">
          {/* <a href="https://github.com/yourgithub" className="text-white hover:text-indigo-200 transition-colors">
            <Github size={28} />
          </a> */}
          <a href="https://www.linkedin.com/in/safiullah-sarfraz-937149273/" className="text-white hover:text-indigo-200 transition-colors">
            <Linkedin size={28} />
          </a>
          <a href="mailto:sarfrazsafiullah3@gmail.com" className="text-white hover:text-indigo-200 transition-colors">
            <Mail size={28} />
          </a>
          <a href="tel:+923099889595" className="text-white hover:text-indigo-200 transition-colors">
            <Phone size={28} />
          </a>
        </div>
      </div>
    </section>
  )
}

