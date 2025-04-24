"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import LoginModal from "./login-modal"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const [jobBootcampOpen, setJobBootcampOpen] = useState(false)
  const [iitCertificationsOpen, setIitCertificationsOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [loginModalOpen, setLoginModalOpen] = useState(false)
  const pathname = usePathname()

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
    // Close dropdowns when toggling mobile menu
    setJobBootcampOpen(false)
    setIitCertificationsOpen(false)
  }

  return (
    <>
      <nav className="bg-white py-4 px-6 flex items-center justify-between shadow-sm sticky top-0 z-30">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <div className="relative h-8 w-8 mr-2">
              <div className="absolute inset-0 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xs">CN</span>
              </div>
            </div>
            <span className="text-gray-800 font-medium">codingninjas</span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden text-gray-700" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <div className="relative">
            <button
              className="flex items-center text-gray-700 hover:text-gray-900"
              onClick={() => {
                setJobBootcampOpen(!jobBootcampOpen)
                setIitCertificationsOpen(false)
              }}
            >
              Job Bootcamp <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            {jobBootcampOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-md py-2 z-10">
                <Link
                  href="/courses/data-structures-algorithms"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setJobBootcampOpen(false)}
                >
                  Data Structures & Algorithms
                </Link>
                <Link
                  href="/courses/full-stack-web-development"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setJobBootcampOpen(false)}
                >
                  Full Stack Development
                </Link>
                <Link
                  href="/courses/machine-learning"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setJobBootcampOpen(false)}
                >
                  Machine Learning
                </Link>
              </div>
            )}
          </div>

          <div className="relative">
            <button
              className="flex items-center text-gray-700 hover:text-gray-900"
              onClick={() => {
                setIitCertificationsOpen(!iitCertificationsOpen)
                setJobBootcampOpen(false)
              }}
            >
              IIT Certifications <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            {iitCertificationsOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-10">
                <Link
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setIitCertificationsOpen(false)}
                >
                  IIT Delhi
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setIitCertificationsOpen(false)}
                >
                  IIT Bombay
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setIitCertificationsOpen(false)}
                >
                  IIT Madras
                </Link>
              </div>
            )}
          </div>
        </div>

        <div className="hidden md:block">
          <Button className="bg-orange-500 hover:bg-orange-600 text-white" onClick={() => setLoginModalOpen(true)}>
            Login
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md py-4 px-6 absolute w-full z-20">
          <div className="space-y-4">
            <div>
              <button
                className="flex items-center justify-between w-full text-gray-700 py-2"
                onClick={() => setJobBootcampOpen(!jobBootcampOpen)}
              >
                <span>Job Bootcamp</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${jobBootcampOpen ? "rotate-180" : ""}`} />
              </button>
              {jobBootcampOpen && (
                <div className="pl-4 mt-2 space-y-2 border-l-2 border-gray-200">
                  <Link
                    href="/courses/data-structures-algorithms"
                    className="block py-2 text-sm text-gray-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Data Structures & Algorithms
                  </Link>
                  <Link
                    href="/courses/full-stack-web-development"
                    className="block py-2 text-sm text-gray-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Full Stack Development
                  </Link>
                  <Link
                    href="/courses/machine-learning"
                    className="block py-2 text-sm text-gray-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Machine Learning
                  </Link>
                </div>
              )}
            </div>

            <div>
              <button
                className="flex items-center justify-between w-full text-gray-700 py-2"
                onClick={() => setIitCertificationsOpen(!iitCertificationsOpen)}
              >
                <span>IIT Certifications</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${iitCertificationsOpen ? "rotate-180" : ""}`} />
              </button>
              {iitCertificationsOpen && (
                <div className="pl-4 mt-2 space-y-2 border-l-2 border-gray-200">
                  <Link href="#" className="block py-2 text-sm text-gray-700" onClick={() => setMobileMenuOpen(false)}>
                    IIT Delhi
                  </Link>
                  <Link href="#" className="block py-2 text-sm text-gray-700" onClick={() => setMobileMenuOpen(false)}>
                    IIT Bombay
                  </Link>
                  <Link href="#" className="block py-2 text-sm text-gray-700" onClick={() => setMobileMenuOpen(false)}>
                    IIT Madras
                  </Link>
                </div>
              )}
            </div>

            <Button
              className="w-full bg-orange-500 hover:bg-orange-600 text-white"
              onClick={() => {
                setLoginModalOpen(true)
                setMobileMenuOpen(false)
              }}
            >
              Login
            </Button>
          </div>
        </div>
      )}

      <LoginModal isOpen={loginModalOpen} onClose={() => setLoginModalOpen(false)} />
    </>
  )
}
