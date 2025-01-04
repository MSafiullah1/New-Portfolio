import { Facebook, Github, Instagram, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-indigo-900 dark:bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* <div>
            <h3 className="text-xl font-semibold mb-4">Muhammad Safiullah</h3>
            <p>Exploring the frontiers of technology and innovation.</p>
          </div> */}
          {/* <div>
            <h3 className="text-xl font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-indigo-300 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-indigo-300 transition-colors">About</a></li>
              <li><a href="#projects" className="hover:text-indigo-300 transition-colors">Projects</a></li>
              <li><a href="#contact" className="hover:text-indigo-300 transition-colors">Contact</a></li>
            </ul>
          </div> */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Social Media</h3>
            <div className="flex space-x-4">
              {/* <a href="#" className="hover:text-indigo-300 transition-colors"><Github /></a> */}
              <a href="https://www.linkedin.com/in/safiullah-sarfraz-937149273/" className="hover:text-indigo-300 transition-colors"><Linkedin /></a>
              <a href="https://www.instagram.com/1safiullah_/" className="hover:text-indigo-300 transition-colors"><Instagram /></a>
              <a href="https://www.facebook.com/safiullah.sarfraz.1/" className="hover:text-indigo-300 transition-colors"><Facebook /></a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <p>Lahore, Pakistan</p>
            <p>+92 3099889595</p>
            <p>sarfrazsafiullah3@gmail.com</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-indigo-800 text-center">
          <p>&copy; {new Date().getFullYear()} Muhammad Safiullah. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

