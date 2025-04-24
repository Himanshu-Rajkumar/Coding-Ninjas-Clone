"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { useRef } from "react"

export default function HeroSection() {
  const courseOfferingsRef = useRef<HTMLDivElement>(null)

  const scrollToCourseOfferings = () => {
    courseOfferingsRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <section className="bg-[#111827] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-blue-400 mb-4">Restricted by opportunities?</p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Get the tech career <br />
            you deserve. Faster.
          </h1>

          <p className="text-gray-300 mb-10">Structured coding courses that get you there faster with confidence.</p>

          <Button
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 rounded-md text-lg"
            onClick={scrollToCourseOfferings}
          >
            Explore offerings <ChevronDown className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* This empty div is used as a reference for scrolling */}
      <div ref={courseOfferingsRef}></div>
    </>
  )
}
