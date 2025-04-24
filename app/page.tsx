"use client"

import { useRef } from "react"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import CompanyShowcase from "@/components/company-showcase"
import CourseOfferings from "@/components/course-offerings"
import Footer from "@/components/footer"

export default function Home() {
  const courseOfferingsRef = useRef<HTMLDivElement>(null)

  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <CompanyShowcase />
      <CourseOfferings />
      <Footer />
    </main>
  )
}
