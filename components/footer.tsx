"use client"

import { useState } from "react"
import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"
import ContactModal from "./contact-modal"

export default function Footer() {
  const [contactModalOpen, setContactModalOpen] = useState(false)

  return (
    <>
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Coding Ninjas</h3>
              <p className="text-gray-400 mb-4">
                Elevating coding education to help students achieve their dream tech careers.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook size={20} />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter size={20} />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram size={20} />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors"></Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin size={20} />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Youtube size={20} />
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Courses</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/courses/data-structures-algorithms"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Data Structures & Algorithms
                  </Link>
                </li>
                <li>
                  <Link
                    href="/courses/full-stack-web-development"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link href="/courses/machine-learning" className="text-gray-400 hover:text-white transition-colors">
                    Machine Learning
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Interview Preparation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Competitive Programming
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Contact Us</h3>
              <p className="text-gray-400 mb-2">Email: info@codingninjas.com</p>
              <p className="text-gray-400 mb-4">Phone: +91 1234567890</p>
              <button
                className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded transition-colors"
                onClick={() => setContactModalOpen(true)}
              >
                Get in Touch
              </button>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Coding Ninjas. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <ContactModal isOpen={contactModalOpen} onClose={() => setContactModalOpen(false)} />
    </>
  )
}
